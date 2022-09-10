import React from "react"

const Box = () => {
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    )
}

export default Box
