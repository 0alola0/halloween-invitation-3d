import React from 'react';
import{ OrbitControls, useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'
import { SearchMe } from './SearchMe';


const House = () => {
  const ref=useRef()

  return (
    <> 
    <mesh ref={ref}>
      <OrbitControls enableZoom={false} />
      <directionalLight color="#433c57" intensity={5} position={[-60, 10, 5]} />
      <spotLight color="#5c3d5b" intensity={9} position={[60, 10, 3]} angle={0.15} penumbra={0.9} />
      <spotLight color="#433c57" position={[4, 15, 3]} angle={1.5} intensity={4} />
      <pointLight color="#4d814a" intensity={90} distance={5} ref={ref} />
      <pointLight color="#D8CB9B" intensity={150} distance={3.8} position={[0, 4, 5]}/>
      <pointLight color="#5c3d5b" intensity={800} distance={4} position={[7, 5, -5]}/>
      <pointLight color="#5c3d5b" intensity={800} distance={4} position={[-3, 5, -7]}/>
      <pointLight color="#5c3d5b" intensity={200} distance={5} position={[7, 2, 3]}/>
      <SearchMe/>
    </mesh>    
    </>
  );
}

export default House;