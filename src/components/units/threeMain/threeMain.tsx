import {
  AccumulativeShadows,
  OrbitControls,
  RandomizedLight,
  Sky,
  SoftShadows,
  Stars,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLightHelper, SpotLightHelper } from "three";
import ThreeModel from "../../commons/threeModel/threeModel";
import { Container } from "./threeMainStyles";

export default function ThreeMain(): JSX.Element {
  const Aaa = () => {
    const light = useRef();
    useHelper(light, DirectionalLightHelper, 1, "red");

    return (
      <directionalLight
        ref={light}
        castShadow
        position={[-70, 30, 40]}
        shadow-mapSize={[8192, 8192]}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-bias={-0.0013}
      />
    );
  };

  return (
    <Container>
      <Canvas
        camera={{
          position: [-19, 10, 19],
        }}
        shadows
      >
        <mesh>
          {/* <Sky sunPosition={[1, 0.2, 1]} /> */}
          {/* <Stars count={5000} /> */}
        </mesh>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        {/* <directionalLight position={[-30, 20, 30]} castShadow /> */}
        <Aaa />
        <ThreeModel />
        <gridHelper />
        <axesHelper />
      </Canvas>
    </Container>
  );
}
