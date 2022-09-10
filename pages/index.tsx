import { useAddress, useContract, useContractData, useContractCall } from "@thirdweb-dev/react"
import type { NextPage } from "next"
import Header from "../components/Header"
import Login from "../components/Login"
import Loading from "../components/Loading"
import { Suspense, useEffect, useState } from "react"
import AdminControls from "../components/AdminControls"
import Footer from "../components/Footer"
import Marquee from "../components/Marquee"
import UserTickets from "../components/nextDraw/UserTickets"
import Winnings from "../components/Winnings"
import DrawDetails from "../components/nextDraw/DrawDetails"
import Tickets from "../components/nextDraw/Tickets"

const Home: NextPage = () => {
    const address = useAddress()
    const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)
    const [userTickets, setUserTickets] = useState(0)
    //read
    const { data: remainingTickets } = useContractData(contract, "RemainingTickets")
    const { data: currentWinningReward } = useContractData(contract, "CurrentWinningReward")
    const { data: ticketPrice } = useContractData(contract, "ticketPrice")
    const { data: ticketCommission } = useContractData(contract, "ticketCommission")
    const { data: expiration } = useContractData(contract, "expiration")
    const { data: tickets } = useContractData(contract, "getTickets")
    const { data: winnings } = useContractData(contract, "getWinningsForAddress", address)
    const { data: lastWinner } = useContractData(contract, "lastWinner")
    const { data: lastWinnerAmount } = useContractData(contract, "lastWinnerAmount")
    const { data: isLotteryOperator } = useContractData(contract, "lotteryOperator")

    //write
    const { mutateAsync: BuyTickets } = useContractCall(contract, "BuyTickets")
    console.log(BuyTickets)

    const { mutateAsync: WithdrawWinnings } = useContractCall(contract, "WithdrawWinnings")

    //can be done on backend?
    useEffect(() => {
        if (!tickets) return
        const totwhiteickets: string[] = tickets
        const noOfUserTickets = totwhiteickets.reduce(
            (total, ticketAddress) => (ticketAddress === address ? total + 1 : total),
            0
        )
        setUserTickets(noOfUserTickets)
    }, [tickets, address])

    if (isLoading) return <Loading />
    if (!address) return <Login />

    return (
        <div className="relative flex min-h-screen flex-col bg-bkg">
            <div className=" z-10 flex-1 items-center">
                <Header />
                <Marquee lastWinner={lastWinner} lastWinnerAmount={lastWinnerAmount} />
                {isLotteryOperator === address && <AdminControls />}
                <Winnings winnings={winnings} WithdrawWinnings={WithdrawWinnings} />
                {/* next draw box */}
                <div className="m-5 items-start justify-center space-y-5 md:flex md:flex-row md:space-y-0 md:space-x-5">
                    <DrawDetails
                        currentWinningReward={currentWinningReward}
                        remainingTickets={remainingTickets}
                    />
                    <div className="stats-containter space-y-2">
                        <Tickets
                            ticketPrice={ticketPrice}
                            ticketCommission={ticketCommission}
                            expiration={expiration}
                            remainingTickets={remainingTickets}
                            BuyTickets={BuyTickets}
                        />
                        <UserTickets userTickets={userTickets} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
