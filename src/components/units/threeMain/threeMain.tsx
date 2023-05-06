import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ThreeModel from "../../commons/threeModel/threeModel";
import { Container } from "./threeMainStyles";

export default function ThreeMain(): JSX.Element {
  return (
    <Container>
      <Canvas
        shadows
        camera={{
          position: [-13, 10, 19],
        }}
      >
        <mesh>
          <Sky
            distance={4000}
            rayleigh={0.2}
            inclination={0.53}
            turbidity={0.5}
            azimuth={0.9}
          />
          <Stars radius={50} count={5000} saturation={0} fade />
        </mesh>
        <OrbitControls minDistance={10} maxDistance={50} />
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
        <ThreeModel />
      </Canvas>
    </Container>
  );
}
