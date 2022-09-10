import { ethers } from "ethers"
import React from "react"
import Marquee from "react-fast-marquee"
import { MarqueeProps } from "../typings"

const MarqueeComp = ({ lastWinner, lastWinnerAmount }: MarqueeProps) => {
    return (
        <Marquee className="mb-5 bg-bkg p-5 sm:mb-12" gradient={false} speed={100}>
            <div className=" mx-10 flex space-x-10 text-[16px] ">
                <h4 className="flex tracking-wide text-gray-500/40">
                    Last Winner:
                    <p className="ml-1 text-gray-400">{lastWinner?.toString()}</p>
                </h4>
                <h4 className="flex  tracking-wide text-gray-500/40">
                    Previous Winnings:
                    <p className="ml-1 tracking-tighter  text-gray-400">
                        {lastWinnerAmount && ethers.utils.formatEther(lastWinnerAmount?.toString())}{" "}
                    </p>
                </h4>
            </div>
        </Marquee>
    )
}

export default MarqueeComp
