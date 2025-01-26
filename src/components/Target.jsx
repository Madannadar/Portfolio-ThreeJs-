import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const target = (props, isMobile) => {
    const targetRef = useRef();
    const { scene } = useGLTF('model.gltf')

    useGSAP(() => {  // is a animation library
        gsap.to(targetRef.current.position, {
            // x: targetRef.current.position.x + 1,
            y: targetRef.current.position.y + 0.5,
            // z: 0,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={isMobile ? 1.3 : 1.5}>
        <primitive object={scene} />
    </mesh>
  )
}

export default target