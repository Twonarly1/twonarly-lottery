import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import Box from "./Box"

const Footer = () => {
    return (
        <footer className="flex items-center justify-between border-t border-alt p-5 text-black md:p-0 md:px-5">
            <div className="w-20 items-center  justify-center opacity-60 sm:flex">
                <Canvas className="">
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.9} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <Box />
                    </Suspense>
                </Canvas>
            </div>

            <p className="pl-5 text-xs text-black/40">
                DISCLAIMER: This dapp is made for informational and educational purposes only.
                Instead, the information presented is meant for nothing more than learning and
                entertainment purposes. We are not liable for any losses that are incurred or
                problems that arise at online casinos or elsewhere after the reading and
                consideration of this tutorials content. If you are gambling online utilizing
                information from this tutorial, you are doing so completely and totally at your own
                risk.
            </p>
        </footer>
    )
}

export default Footer
