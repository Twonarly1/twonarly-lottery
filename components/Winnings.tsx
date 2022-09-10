import { ethers } from "ethers"
import React from "react"
import Confetti from "react-confetti"
import toast from "react-hot-toast"
import { currency } from "../constants"
import useWindowDimensions from "../lib/useWindowDimensions"
import { winningsProps } from "../typings"

const Winnings = ({ winnings, WithdrawWinnings }: winningsProps) => {
    const { height, width } = useWindowDimensions()
    let w: any = width
    const onWithdrawWinnings = async () => {
        const notification = toast.loading("Withdrawing winnings...")

        try {
            const data = await WithdrawWinnings([{}])

            toast.success("Winnings withdrawn successfully!", {
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
        <div>
            {winnings > 0 && (
                <div className=" mx-auto mt-5  max-w-md rounded-xl shadow-lg md:max-w-2xl lg:max-w-4xl">
                    <Confetti
                        numberOfPieces={200}
                        recycle={true}
                        tweenDuration={5000}
                        // height={250}
                        confettiSource={{
                            x: w / 2,
                            y: -100,
                            w: 10,
                            h: 100,
                        }}
                    />
                    <button
                        onClick={onWithdrawWinnings}
                        className="w-full rounded-xl bg-pink-50 p-5 text-center"
                    >
                        <p className="font-winner text-[32px]">Winner Winner Chicken Dinner!</p>
                        <p>
                            Total Winnings: {ethers.utils.formatEther(winnings.toString())}{" "}
                            {currency}
                        </p>
                        <br />
                        <p className="animate-pulse rounded-lg border-2 border-alt bg-white py-2 font-semibold shadow">
                            Click here to withdraw!
                        </p>
                    </button>
                </div>
            )}
        </div>
    )
}

export default Winnings
