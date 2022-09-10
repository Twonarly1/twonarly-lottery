import { BigNumber, ethers } from "ethers"
import React from "react"
import { currency } from "../../constants"
import { DrawProps } from "../../typings"
import CountdownTimer from "./CountdownTimer"

const DrawDetails = ({ currentWinningReward, remainingTickets }: DrawProps) => {
    return (
        <div className="stats-container">
            <h1 className="text-center text-5xl  text-black ">The Next Draw</h1>
            <div className="flex justify-between space-x-2 p-2">
                <div className="stats bg-bkg">
                    <h2 className="text-sm">Total Pool</h2>
                    <p className="text-xl text-black">
                        {currentWinningReward &&
                            ethers.utils.formatEther(currentWinningReward.toString())}{" "}
                        {currency}
                    </p>
                </div>
                <div className="stats bg-bkg">
                    <h2 className="text-sm">Tickets Remaining</h2>
                    <p className="text-xl">{remainingTickets?.toNumber()}</p>
                </div>
            </div>
            {/* timer */}
            <div className="mt-5 mb-3">
                <CountdownTimer />
            </div>
        </div>
    )
}

export default DrawDetails
