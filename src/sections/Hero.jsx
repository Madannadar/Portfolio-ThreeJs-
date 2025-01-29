import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Ring } from '@react-three/drei';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
// import {Leva, useControls} from 'leva'
 // provides the bar that we use to toggle and find the best spot to place the 3d object
import HackerRoom from '../components/hackerRoom';
import Target from '../components/target';
import CanvasLoader from '../components/CanvasLoader'
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';

const hero = () => {
    // const control = useControls('HackerRoom', 
    //     {
    //          positionX: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         positionY: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         positionZ: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationX: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationY: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationZ: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },
    //         scale: {
    //             value: 1,
    //             min: 0.1,
    //             max: 10
    //         }
    //     }
    // );
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isTable = useMediaQuery({query: '( min-width: 768px) and (max-width: 1024px)'});
    const isSmall = useMediaQuery({query: '(max-width: 440px)'});

    const sizes = calculateSizes(isSmall, isMobile, isTable);

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>Hi, I am Madan <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient text-center'>FullStack Developer</p>
        </div>
        <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
          //Uncaught Error: R3F: Input is not part of the THREE namespace! Did you forget to extend?
            <Canvas className='w-full h-full'>
                <Suspense fullback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                        // scale={0.05} 
                        // position={[0, 0, 0]} 
                        // rotation={[0, 280, 0]}
                        rotation={[-2.9, 6.4, 3.17]}
                        position={sizes.deskPosition}
                        scale={sizes.deskScale} />
                    </HeroCamera>
                     <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>
                    <ambientLight intensity={1} />
                    <directionalLight intensity={0.5} position={[10, 10, 10]}/>
                </Suspense>
            </Canvas>
            // we cannot use html element on canvas
        </div>
        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
            <a href="#about" className='w-fit'>
                {/* <button></button> */}
                <Button name="Let's work togeather" isBeam containerClass="sm:w-fit w-full sm:min-w-96 b"/>
            </a>
        </div>
    </section>
  )
}

export default hero