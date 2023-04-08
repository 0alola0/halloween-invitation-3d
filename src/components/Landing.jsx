import React from 'react';
import {Canvas} from '@react-three/fiber'
import House from './House';
import Riddle from './Riddle';


const Landing = () => {

    return (
        <>
        <Riddle/>
        <Canvas
        camera={{
        fov: 64,
        position: [0, 0, 13],
        }}>
        <House/>                
        </Canvas>
        </>
    );
  }
  
  export default Landing;