import React from 'react';
import { Grhosty } from './Ghosty';
import { useRef, useState } from 'react'
import{ OrbitControls, useGLTF } from '@react-three/drei'

const Card = () => {
  const ref=useRef()

  return (
    <mesh ref={ref}>
      <OrbitControls enableZoom={false} />
      <Grhosty/>
    </mesh> 
  );
}

export default Card;
