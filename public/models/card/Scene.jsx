/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: P3D (https://sketchfab.com/PelpesElSabio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-ghost-2c8c03bb0e5049529e653f9011a8fc90
Title: Cute ghost
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Ground_M_Ground_0.geometry} material={materials.M_Ground} position={[0, -1.79, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Ghost_M_Ghost_0.geometry} material={materials.M_Ghost} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Ghost001_M_Ghost_0.geometry} material={materials.M_Ghost} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Ghost002_Outline_0.geometry} material={materials.Outline} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
