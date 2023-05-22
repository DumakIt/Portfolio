import { Canvas } from "@react-three/fiber";
import ThreeModel from "../../commons/threeModel/threeModel";
import * as S from "./threeMainStyles";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";
import { Modal } from "antd";
import { useSetIsToggle } from "../../commons/hooks/custom/useSetIsToggle";

export default function ThreeMain(): JSX.Element {
  const controlRef = useRef<OrbitControlsType>(null);
  const [isToggle, changeIsToggle] = useSetIsToggle();

  return (
    <S.Container>
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
        <ThreeModel controlRef={controlRef} changeIsToggle={changeIsToggle} />
      </Canvas>
      {isToggle && (
        <Modal
          width={1300}
          open={true}
          footer={false}
          onCancel={changeIsToggle}
        >
          <S.ModalContainer>
            <S.PageWrapper>
              <S.ImageBox>
                <img src="/images/main/usedMarketMain.png" />
              </S.ImageBox>
              <h1>중고마켓</h1>
              <S.TextDiv>
                GraphQL과 포트원(아임포트)를 이용하여 물건을 사고, 팔 수 있는
                중고 물품 거래 웹사이트입니다.
              </S.TextDiv>
              <h2>주요기능</h2>
              <S.ListUl>
                <li>포인트 충전</li>
                <li>물건 구매 / 판매</li>
                <li>댓글 및 대댓글</li>
              </S.ListUl>
              <S.MovePageBtn>바로가기</S.MovePageBtn>
            </S.PageWrapper>
            <S.PageWrapper>
              <S.ImageBox>
                <img src="/images/main/usedMarketMain.png" />
              </S.ImageBox>
              <h1>고양이 갤러리</h1>
              <S.TextDiv>
                Axios와 Cloud Firestore를 사용하여 간단한 CRUD를 구현하여 고양이
                사진을 저장하는 웹사이트입니다.
              </S.TextDiv>
              <h2>주요기능</h2>
              <S.ListUl>
                <li>카테고리 생성</li>
                <li>사진 저장, 삭제 및 저장한 사진 불러오기</li>
                <li>사진 제목 수정</li>
              </S.ListUl>
              <S.MovePageBtn>바로가기</S.MovePageBtn>
            </S.PageWrapper>
          </S.ModalContainer>
        </Modal>
      )}
    </S.Container>
  );
}
