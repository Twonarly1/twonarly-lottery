import { BigNumber, ethers } from "ethers"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { currency } from "../../constants"
import { ticketProps } from "../../typings"

const Tickets = ({
    ticketPrice,
    ticketCommission,
    expiration,
    remainingTickets,
    BuyTickets,
}: ticketProps) => {
    const [quantity, setQuantity] = useState<number>(1)
    const handleClick = async () => {
        if (!ticketPrice) return
        const notification = toast.loading("Buying your tickets...")
        try {
            const data = await BuyTickets([
                {
                    value: ethers.utils.parseEther(
                        (Number(ethers.utils.formatEther(ticketPrice)) * quantity).toString()
                    ),
                },
            ])
            toast.success("Tickets purchased successfully!", {
                id: notification,
            })
            console.info("contract call success", data)
        } catch (err) {
            toast.error("Whoops something went wrong!", {
                id: notification,
            })
            console.error("contract call failure", err)
        }
    }

    return (
        <div className="stats-container">
            <div className="flex items-center justify-between pb-2 text-black">
                <h2>Price per ticket</h2>
                <p>
                    {ticketPrice && ethers.utils.formatEther(ticketPrice.toString())} {currency}
                </p>
            </div>
            <div className="flex items-center space-x-2 rounded-md border-2 border-alt bg-bkg p-4 text-black">
                <p>TICKETS</p>
                <input
                    className="flex w-full  bg-transparent text-right text-black outline-none"
                    type="number"
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
            </div>
            <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-sm font-extrabold italic text-black">
                    <p>Total cost of tickets</p>
                    <p>
                        {ticketPrice &&
                            Number(ethers.utils.formatEther(ticketPrice?.toString())) *
                                quantity}{" "}
                        {currency}
                    </p>
                </div>
                <div className="flex items-center justify-between text-xs italic text-black">
                    <p>Service Fees</p>
                    <p>
                        {ticketCommission && ethers.utils.formatEther(ticketCommission.toString())}{" "}
                        {currency}
                    </p>
                </div>
                <div className="flex items-center justify-between text-xs italic text-black ">
                    <p>+ Network Fees</p>
                    <p>TBC</p>
                </div>
            </div>
            <button
                disabled={
                    expiration?.toString() < Date.now().toString() ||
                    remainingTickets?.toNumber() === 0
                }
                onClick={handleClick}
                className="buy-button"
            >
                Buy {quantity} ticket(s) for{" "}
                {ticketPrice && Number(ethers.utils.formatEther(ticketPrice.toString())) * quantity}
            </button>
        </div>
    )
}

export default Tickets
