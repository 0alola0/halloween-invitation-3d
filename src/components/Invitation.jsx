import React from 'react';
import {Canvas} from '@react-three/fiber'
import Card from './Card';
import Address from './Address';

const Invitation = () => {
    return (
        <>
        <Address/>
        <Canvas
        camera={{
        fov: 64,
        position: [0, 2, 6],
        }}>
        <Card/>                
        </Canvas>
        </>
    );
}

export default Invitation;
