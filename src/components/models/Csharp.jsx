/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 csharp.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/portfolio/assets/models/csharp.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={0.017}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4.geometry}
          material={materials["Material.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/portfolio/assets/models/csharp.glb");
