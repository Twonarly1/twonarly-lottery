export type DrawProps = {
    currentWinningReward: number
    remainingTickets: BigNumber
}

export type ticketProps = {
    ticketPrice: number
    ticketCommission: number
    expiration: BigNumber
    remainingTickets: BigNumber
    BuyTickets: Function
}

export type userTicketProps = {
    userTickets: number
}

export type countdownProps = {
    hours: number
    minutes: number
    seconds: number
    completed: boolean
}

export type MarqueeProps = {
    lastWinner: string
    lastWinnerAmount: number
}

export interface navButtonProps {
    title: string
    isActive?: boolean
    onClick?: () => void
}
export type winningsProps = {
    winnings: number
    WithdrawWinnings: Function
}
