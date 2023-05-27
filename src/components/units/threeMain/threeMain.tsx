/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import ThreeModel from "../../commons/main/threeModel/threeModel";
import * as S from "./threeMainStyles";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";

export default function ThreeMain(): JSX.Element {
  const controlRef = useRef<OrbitControlsType>(null);

  return (
    <S.Container>
      <Canvas shadows>
        <mesh>
          <Sky
            distance={4000}
            rayleigh={0.2}
            inclination={0.53}
            turbidity={0.5}
            azimuth={0.9}
          />
          <Stars radius={50} count={5000} saturation={0} fade={true} />
        </mesh>
        <OrbitControls
          minDistance={10}
          maxDistance={50}
          target={[0, 0, 0]}
          ref={controlRef}
        />
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[-70, 30, 40]}
          shadow-mapSize={[4069, 4069]}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-bias={-0.0002}
        />
        <ThreeModel controlRef={controlRef} />
      </Canvas>
    </S.Container>
  );
}
