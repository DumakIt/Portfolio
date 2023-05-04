/* eslint-disable react/no-unknown-property */

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function ThreeModel(props): JSX.Element {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/threeJS/model.glb");
  const { actions } = useAnimations(animations, group);
  console.log(actions);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="canvas"
          geometry={nodes.canvas.geometry}
          material={materials.white}
          position={[-10.65, -0.78, -6.73]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group name="obj" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_157_Mesh002"
            geometry={nodes.kaedim_mesh_157_Mesh002.geometry}
            material={materials.black1}
          />
          <mesh
            name="kaedim_mesh_157_Mesh002_1"
            geometry={nodes.kaedim_mesh_157_Mesh002_1.geometry}
            material={materials.silver1}
          />
          <mesh
            name="kaedim_mesh_157_Mesh002_2"
            geometry={nodes.kaedim_mesh_157_Mesh002_2.geometry}
            material={materials.silver2}
          />
          <mesh
            name="kaedim_mesh_157_Mesh002_3"
            geometry={nodes.kaedim_mesh_157_Mesh002_3.geometry}
            material={materials.white}
          />
          <mesh
            name="kaedim_mesh_157_Mesh002_4"
            geometry={nodes.kaedim_mesh_157_Mesh002_4.geometry}
            material={materials.orange}
          />
          <mesh
            name="kaedim_mesh_157_Mesh002_5"
            geometry={nodes.kaedim_mesh_157_Mesh002_5.geometry}
            material={materials.gray}
          />
          <mesh
            name="kaedim_mesh_157_Mesh002_6"
            geometry={nodes.kaedim_mesh_157_Mesh002_6.geometry}
            material={materials.brown}
          />
        </group>
        <mesh
          name="tv"
          geometry={nodes.tv.geometry}
          material={materials.black1}
          position={[12.28, 2.79, 0.57]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="board"
          geometry={nodes.board.geometry}
          material={materials.white}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/threeJS/model.glb");
