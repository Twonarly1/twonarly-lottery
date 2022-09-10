import React from "react"
import { userTicketProps } from "../../typings"

const UserTickets = ({ userTickets }: userTicketProps) => {
    return (
        <div>
            {userTickets > 0 && (
                <div className="stats bg-white">
                    <p className="mb-2 text-lg">you have {userTickets} Ticket(s) in this draw.</p>
                    <div className="flex max-w-sm flex-wrap gap-x-2 gap-y-2">
                        {Array(userTickets)
                            .fill("")
                            .map((_, index) => (
                                <p
                                    className="flex h-20 w-12 flex-shrink-0 items-center justify-center rounded-lg border-2 border-alt bg-accent text-sm italic text-black"
                                    key={index}
                                >
                                    {index + 1}
                                </p>
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserTickets
