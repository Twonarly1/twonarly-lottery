import { useContract, useContractData } from "@thirdweb-dev/react"
import React from "react"
import Countdown from "react-countdown"
import { countdownProps } from "../typings"

function CountdownTimer() {
    const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)

    const { data: expiration, isLoading: isLoadingExpiration } = useContractData(
        contract,
        "expiration"
    )

    const renderer = ({ hours, minutes, seconds, completed }: countdownProps) => {
        if (completed) {
            return (
                <div className="">
                    <h2 className="animate-bounce text-center text-xl text-black">
                        Ticket Sales have CLOSED for this Draw!
                    </h2>
                    <div className="mx-auto flex w-full justify-center space-x-2 xs:space-x-6">
                        <div className="flex-1 border-2 border-alt bg-bkg">
                            <div className="countdown animate-pulse">{hours}</div>
                            <div className="countdown-label">hours</div>
                        </div>

                        <div className="flex-1 rounded-md border-2 border-alt bg-bkg">
                            <div className="countdown animate-pulse">{minutes}</div>
                            <div className="countdown-label">minutes</div>
                        </div>

                        <div className="flex-1 rounded-md border-2 border-alt bg-bkg ">
                            <div className="countdown animate-pulse">{seconds}</div>
                            <div className="countdown-label">seconds</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 className="mb-2 text-sm italic text-black">Time Remaining</h3>
                    <div className="flex space-x-6">
                        <div className="flex-1 rounded-md border-2 border-alt bg-bkg">
                            <div className="countdown">{hours}</div>
                            <div className="countdown-label">hours</div>
                        </div>

                        <div className="flex-1 rounded-md border-2 border-alt bg-bkg">
                            <div className="countdown">{minutes}</div>
                            <div className="countdown-label">minutes</div>
                        </div>

                        <div className="flex-1 rounded-md border-2 border-alt bg-bkg">
                            <div className="countdown">{seconds}</div>
                            <div className="countdown-label">seconds</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    if (isLoadingExpiration) return null

    return (
        <div>
            <Countdown date={new Date(expiration * 1000)} renderer={renderer} />
        </div>
    )
}

export default CountdownTimer
