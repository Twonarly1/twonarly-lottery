import React from "react"
import {
    StarIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    ArrowUturnDownIcon,
} from "@heroicons/react/24/solid"
import { useContract, useContractCall, useContractData } from "@thirdweb-dev/react"
import { ethers } from "ethers"
import { currency } from "../constants"
import toast from "react-hot-toast"

const AdminControls = () => {
    const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)
    //read
    const { data: totalCommission } = useContractData(contract, "operatorTotalCommission")
    //write
    const { mutateAsync: DrawWinnerTicket } = useContractCall(contract, "DrawWinnerTicket")
    const { mutateAsync: RefundAll } = useContractCall(contract, "RefundAll")
    const { mutateAsync: restartDraw } = useContractCall(contract, "restartDraw")
    const { mutateAsync: WithdrawCommission } = useContractCall(contract, "WithdrawCommission")

    const drawWinner = async () => {
        const notification = toast.loading("Picking a Lucky Winner...")

        try {
            const data = await DrawWinnerTicket([{}])

            toast.success("A Winner has been selected!", {
                id: notification,
            })
            console.info("contract call successs", data)
        } catch (err) {
            toast.error("Whoops something went wrong!", {
                id: notification,
            })

            console.error("contract call failure", err)
        }
    }

    const onWithdrawCommission = async () => {
        const notification = toast.loading("Withdrawing commission...")

        try {
            const data = await WithdrawCommission([{}])

            toast.success("Your Commission has been withdrawn successfully!", {
                id: notification,
            })
            console.info("contract call successs", data)
        } catch (err) {
            toast.error("Whoops something went wrong!", {
                id: notification,
            })

            console.error("contract call failure", err)
        }
    }

    const onRestartDraw = async () => {
        const notification = toast.loading("Restarting draw...")

        try {
            const data = await restartDraw([{}])

            toast.success("Draw restarted successfully!", {
                id: notification,
            })
            console.info("contract call successs", data)
        } catch (err) {
            toast.error("Whoops something went wrong!", {
                id: notification,
            })

            console.error("contract call failure", err)
        }
    }

    const onRefundAll = async () => {
        const notification = toast.loading("Refunding all...")

        try {
            const data = await RefundAll([{}])

            toast.success("All refunded successfully!", {
                id: notification,
            })
            console.info("contract call successs", data)
        } catch (err) {
            toast.error("Whoops something went wrong!", {
                id: notification,
            })

            console.error("contract call failure", err)
        }
    }

    return (
        <div className="flex justify-center">
            <div className=" rounded-md border-2 border-alt bg-white px-5 py-3 text-center text-black">
                <h2 className="font-bold">Admin Controls</h2>
                <p className="mb-5">
                    Total Commision to be withdrawn:{" "}
                    {totalCommission && ethers.utils.formatEther(totalCommission?.toString())}{" "}
                    {currency}
                </p>

                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <button
                        onClick={drawWinner}
                        className="admin-button border-2 border-alt bg-bkg hover:bg-white"
                    >
                        <StarIcon className="mx-auto mb-2 h-6" />
                        Draw Winner
                    </button>
                    <button
                        onClick={onWithdrawCommission}
                        className="admin-button border-2 border-alt bg-bkg hover:bg-white"
                    >
                        <CurrencyDollarIcon className="mx-auto mb-2 h-6" />
                        Withdraw Commision
                    </button>
                    <button
                        onClick={onRestartDraw}
                        className="admin-button border-2 border-alt bg-bkg hover:bg-white"
                    >
                        <ArrowPathIcon className="mx-auto mb-2 h-6" />
                        Restart Draw
                    </button>
                    <button
                        onClick={onRefundAll}
                        className="admin-button border-2 border-alt bg-bkg hover:bg-white"
                    >
                        <ArrowUturnDownIcon className="mx-auto mb-2 h-6" />
                        Refund All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminControls
