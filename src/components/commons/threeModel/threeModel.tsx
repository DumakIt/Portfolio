/* eslint-disable react/no-unknown-property */

import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GSAP from "gsap";

export default function ThreeModel(props): JSX.Element {
  const [hovered, setHovered] = useState("");
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/threeJS/model.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // 순서대로 mesh들을 화면에 나오는것 처럼 보이는 애니메이션
    if (group !== undefined) {
      const timeLine = GSAP.timeline();
      const meshes = group.current?.children[0].children.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      meshes.forEach((mesh) => {
        if (mesh.name === "01wall") return;
        if (mesh.name === "00cube") {
          timeLine.to(mesh.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.8,
          });
        } else {
          timeLine.to(
            mesh.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1.4)",
              duration: 0.6,
            },
            ">-0.2"
          );
        }
      });
    }
  }, [group]);

  useEffect(() => {
    // tv 및 canvas에 마우스 호버시 애니메이션
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
          name="00cube"
          geometry={nodes["00cube"].geometry}
          material={materials.gray}
        />
        <group name="01wall" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="01wall_1"
            receiveShadow
            geometry={nodes["01wall_1"].geometry}
            material={materials.gray}
          />
          <mesh
            name="01wall_2"
            receiveShadow
            geometry={nodes["01wall_2"].geometry}
            material={materials.white}
          />
          <mesh
            name="01wall_3"
            receiveShadow
            geometry={nodes["01wall_3"].geometry}
            material={materials.orange}
          />
        </group>
        <group
          name="02shelf"
          position={[11.81, -2.97, 0.84]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="02shelf_1"
            castShadow
            receiveShadow
            geometry={nodes["02shelf_1"].geometry}
            material={materials.black1}
          />
          <mesh
            name="02shelf_2"
            castShadow
            receiveShadow
            geometry={nodes["02shelf_2"].geometry}
            material={materials.white}
          />
          <mesh
            name="02shelf_3"
            castShadow
            receiveShadow
            geometry={nodes["02shelf_3"].geometry}
            material={materials.orange}
          />
        </group>
        <group
          name="03table"
          position={[1.38, -4.84, 0.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="03table_1"
            castShadow
            receiveShadow
            geometry={nodes["03table_1"].geometry}
            material={materials.white}
          />
          <mesh
            name="03table_2"
            castShadow
            receiveShadow
            geometry={nodes["03table_2"].geometry}
            material={materials.black1}
          />
          <mesh
            name="03table_3"
            castShadow
            receiveShadow
            geometry={nodes["03table_3"].geometry}
            material={materials.silver1}
          />
          <mesh
            name="03table_4"
            castShadow
            receiveShadow
            geometry={nodes["03table_4"].geometry}
            material={materials.silver2}
          />
          <mesh
            name="03table_5"
            castShadow
            receiveShadow
            geometry={nodes["03table_5"].geometry}
            material={materials.brown}
          />
        </group>
        <group
          name="04chair"
          position={[6.77, -6.64, 6.71]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="04chair_1"
            castShadow
            receiveShadow
            geometry={nodes["04chair_1"].geometry}
            material={materials.white}
          />
          <mesh
            name="04chair_2"
            castShadow
            receiveShadow
            geometry={nodes["04chair_2"].geometry}
            material={materials.brown}
          />
        </group>
        <group
          name="05chair"
          position={[1.73, -6.64, 6.71]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="05chair_1"
            castShadow
            receiveShadow
            geometry={nodes["05chair_1"].geometry}
            material={materials.white}
          />
          <mesh
            name="05chair_2"
            castShadow
            receiveShadow
            geometry={nodes["05chair_2"].geometry}
            material={materials.brown}
          />
        </group>
        <group
          name="06chair"
          position={[-3.3, -6.64, 6.71]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="06chair_1"
            castShadow
            receiveShadow
            geometry={nodes["06chair_1"].geometry}
            material={materials.white}
          />
          <mesh
            name="06chair_2"
            castShadow
            receiveShadow
            geometry={nodes["06chair_2"].geometry}
            material={materials.brown}
          />
        </group>
        <group
          name="07chair"
          position={[-10.23, -6.64, 0.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="07chair_1"
            castShadow
            receiveShadow
            geometry={nodes["07chair_1"].geometry}
            material={materials.white}
          />
          <mesh
            name="07chair_2"
            castShadow
            receiveShadow
            geometry={nodes["07chair_2"].geometry}
            material={materials.brown}
          />
        </group>
        <group
          name="08chair"
          position={[-3.37, -6.64, -6.47]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="08chair_1"
            castShadow
            receiveShadow
            geometry={nodes["08chair_1"].geometry}
            material={materials.white}
          />
          <mesh
            name="08chair_2"
            castShadow
            receiveShadow
            geometry={nodes["08chair_2"].geometry}
            material={materials.brown}
          />
        </group>
        <group
          name="09chair"
          position={[1.67, -6.64, -6.47]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="09chair_1"
            castShadow
            receiveShadow
            geometry={nodes["09chair_1"].geometry}
            material={materials.white}
          />
          <mesh
            name="09chair_2"
            castShadow
            receiveShadow
            geometry={nodes["09chair_2"].geometry}
            material={materials.brown}
          />
        </group>
        <group
          name="10chair"
          position={[6.71, -6.64, -6.47]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <mesh
            name="10chair_1"
            castShadow
            receiveShadow
            geometry={nodes["10chair_1"].geometry}
            material={materials.white}
          />
          <mesh
            name="10chair_2"
            castShadow
            receiveShadow
            geometry={nodes["10chair_2"].geometry}
            material={materials.brown}
          />
        </group>
        <mesh
          name="11tv"
          castShadow
          receiveShadow
          geometry={nodes["11tv"].geometry}
          material={materials.black1}
          position={[12.16, 2.81, 0.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
          onPointerOver={onHover("tvHover")}
          onPointerOut={onHover("")}
        />
        <mesh
          name="12easel"
          castShadow
          receiveShadow
          geometry={nodes["12easel"].geometry}
          material={materials.black1}
          position={[-10.6, -3.9, -7.04]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          name="13canvas"
          castShadow
          receiveShadow
          geometry={nodes["13canvas"].geometry}
          material={materials.white}
          position={[-10.6, -1.3, -6.73]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
          onPointerOver={onHover("canvasHover")}
          onPointerOut={onHover("")}
        />

        <mesh
          name="14board"
          castShadow
          receiveShadow
          geometry={nodes["14board"].geometry}
          material={materials.white}
          position={[5.99, 2.01, -9.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/threeJS/model.glb");
