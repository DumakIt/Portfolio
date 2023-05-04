import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ThreeModel from "../../commons/threeModel/threeModel";
import { Container } from "./threeMainStyles";

export default function ThreeMain(): JSX.Element {
  return (
    <Container>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <ThreeModel />
      </Canvas>
    </Container>
  );
}
