import React from "react"
import NavButton from "./NavButton"
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
import { useAddress, useDisconnect } from "@thirdweb-dev/react"

const Header = () => {
    const address = useAddress()
    const disconnect = useDisconnect()

    return (
        <header className="grid w-full grid-cols-2 items-center justify-between  p-5 md:grid-cols-5">
            <div className="flex h-20 w-fit items-center space-x-2 rounded-full ">
                <img src="/two.png" alt="" height={60} width={60} />
                <div>
                    <h1 className="text-lg font-bold text-black">Twonarly Lottery</h1>
                    <p className="truncate text-xs text-black">
                        {address?.substring(0, 5)}...
                        {address?.substring(address.length, address.length - 5)}
                    </p>
                </div>
            </div>
            <div className="hidden items-center justify-center rounded-md md:col-span-3 md:flex">
                <div className="space-x-2 rounded-md bg-bkg p-4">
                    <NavButton isActive title={"Buy Tickets"} />
                    <NavButton onClick={disconnect} title={"Logout"} />
                </div>
            </div>
            <div className="ml-auto flex flex-col text-right">
                {/* <Bars3BottomRightIcon className="mx-auto h-8 w-8 rotate-90 cursor-pointer text-black" /> */}
                <span className="md:hidden">
                    <NavButton onClick={disconnect} title={"Logout"} />
                </span>
            </div>
        </header>
    )
}

export default Header
