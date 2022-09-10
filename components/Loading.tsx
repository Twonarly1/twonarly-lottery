import React from "react"
import PropagateLoader from "react-spinners/PropagateLoader"

const Loading = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-black">
            <div className="mb-10 flex items-center space-x-2">
                <img src="/two.png" alt="" className="h-20 w-20 rounded-full" />
                <h1 className="text-lg font-bold text-white">loading the twonarly draw!!!</h1>
            </div>
            <PropagateLoader color="white" size={30} />
        </div>
    )
}

export default Loading
