import { useMetamask } from "@thirdweb-dev/react"
import React from "react"

const Login = () => {
    const connectWithMetamask = useMetamask()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bkg text-center">
            <div className="mb-10 flex flex-col items-center">
                <img className="mb-10 h-56 w-56 rounded-full" alt="" src="/two.png" />
                <h1 className="text-6xl font-bold text-black">The Twonarly Draw</h1>
                <h2 className="text-black">Get started by logging in with your Wallet.</h2>
                <button
                    onClick={connectWithMetamask}
                    className="mt-10 rounded-lg bg-gray-900/50 px-8 py-5 text-white shadow-lg"
                >
                    Login with Metamask
                </button>
            </div>
        </div>
    )
}

export default Login
