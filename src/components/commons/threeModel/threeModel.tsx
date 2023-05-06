/* eslint-disable react/no-unknown-property */

import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function ThreeModel(props): JSX.Element {
  const [hovered, setHovered] = useState("");
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/threeJS/model.glb");
  const { actions, names } = useAnimations(animations, group);
  console.log(names, actions);

  useEffect(() => {
    actions[hovered]?.setDuration(0.7).play();
  }, [hovered]);

  const onHover = (targetMesh: string) => (): void => {
    actions[hovered]?.stop();
    setHovered(targetMesh);
  };

  return (
    <group ref={group} {...props} dispose={null} position={[0, 6, 0]}>
      <group name="Scene">
        <mesh
          name="floor1"
          receiveShadow
          geometry={nodes.floor1.geometry}
          material={materials.gray}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="canvas"
          castShadow
          receiveShadow
          geometry={nodes.canvas.geometry}
          material={materials.white}
          position={[-10.6, -1.3, -6.73]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerOver={onHover("canvasHover")}
          onPointerOut={onHover("")}
        />
        <mesh
          name="book1"
          castShadow
          receiveShadow
          geometry={nodes.book1.geometry}
          material={materials.white}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="book2"
          castShadow
          receiveShadow
          geometry={nodes.book2.geometry}
          material={materials.black1}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="tvHub"
          castShadow
          receiveShadow
          geometry={nodes.tvHub.geometry}
          material={materials.white}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="laptop"
          position={[0, 0, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            name="kaedim_mesh_156_Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_156_Mesh002.geometry}
            material={materials.black1}
          />
          <mesh
            name="kaedim_mesh_156_Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_156_Mesh002_1.geometry}
            material={materials.silver1}
          />
          <mesh
            name="kaedim_mesh_156_Mesh002_2"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_156_Mesh002_2.geometry}
            material={materials.silver2}
          />
          <mesh
            name="kaedim_mesh_156_Mesh002_3"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_156_Mesh002_3.geometry}
            material={materials.white}
          />
        </group>
        <mesh
          name="easel"
          castShadow
          receiveShadow
          geometry={nodes.easel.geometry}
          material={materials.black1}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="tvController"
          castShadow
          receiveShadow
          geometry={nodes.tvController.geometry}
          material={materials.black1}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="tv"
          castShadow
          receiveShadow
          geometry={nodes.tv.geometry}
          material={materials.black1}
          position={[12.16, 2.81, 0.57]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerOver={onHover("tvHover")}
          onPointerOut={onHover("")}
        />
        <mesh
          name="board"
          castShadow
          receiveShadow
          geometry={nodes.board.geometry}
          material={materials.white}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="tvShelf"
          castShadow
          receiveShadow
          geometry={nodes.tvShelf.geometry}
          material={materials.orange}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="wall2"
          receiveShadow
          geometry={nodes.wall2.geometry}
          material={materials.white}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group name="wall1" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_2_Mesh002"
            receiveShadow
            geometry={nodes.kaedim_mesh_2_Mesh002.geometry}
            material={materials.gray}
          />
          <mesh
            name="kaedim_mesh_2_Mesh002_1"
            receiveShadow
            geometry={nodes.kaedim_mesh_2_Mesh002_1.geometry}
            material={materials.white}
          />
        </group>
        <group name="chair3" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_31_Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_31_Mesh002.geometry}
            material={materials.white}
          />
          <mesh
            name="kaedim_mesh_31_Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_31_Mesh002_1.geometry}
            material={materials.brown}
          />
        </group>
        <group name="chair4" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_36_Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_36_Mesh002.geometry}
            material={materials.white}
          />
          <mesh
            name="kaedim_mesh_36_Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_36_Mesh002_1.geometry}
            material={materials.brown}
          />
        </group>
        <group name="chair6" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_45_Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_45_Mesh002.geometry}
            material={materials.white}
          />
          <mesh
            name="kaedim_mesh_45_Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_45_Mesh002_1.geometry}
            material={materials.brown}
          />
        </group>
        <mesh
          name="floor2"
          receiveShadow
          geometry={nodes.floor2.geometry}
          material={materials.orange}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group name="chair5" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_50_Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_50_Mesh002.geometry}
            material={materials.white}
          />
          <mesh
            name="kaedim_mesh_50_Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_50_Mesh002_1.geometry}
            material={materials.brown}
          />
        </group>
        <mesh
          name="table"
          castShadow
          receiveShadow
          geometry={nodes.table.geometry}
          material={materials.brown}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group name="chair1" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_6_Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_6_Mesh002.geometry}
            material={materials.white}
          />
          <mesh
            name="kaedim_mesh_6_Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_6_Mesh002_1.geometry}
            material={materials.brown}
          />
        </group>
        <group name="chair2" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_8_Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_8_Mesh002.geometry}
            material={materials.white}
          />
          <mesh
            name="kaedim_mesh_8_Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_8_Mesh002_1.geometry}
            material={materials.brown}
          />
        </group>
        <group name="chair7" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="kaedim_mesh_9_Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_9_Mesh002.geometry}
            material={materials.white}
          />
          <mesh
            name="kaedim_mesh_9_Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.kaedim_mesh_9_Mesh002_1.geometry}
            material={materials.brown}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/threeJS/model.glb");
