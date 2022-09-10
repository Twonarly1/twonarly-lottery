import React from "react"
import { navButtonProps } from "../typings"

const NavButton = ({ title, isActive, onClick }: navButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`rounded border-2 border-alt py-2 px-4 font-bold text-black hover:bg-white ${
                isActive && "bg-white"
            }`}
        >
            {title}
        </button>
    )
}

export default NavButton
