import { Modal } from "antd";
import { RefObject } from "react";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";
import { Camera } from "@react-three/fiber/dist/declarations/src/core/utils";
import { useClickThreeModel } from "../../hooks/custom/useClickThreeModel";
import * as S from "./canvasModalStyles";
import { Size } from "@react-three/fiber";

interface ICanvasModalProps {
  size: Size;
  controlRef: RefObject<OrbitControlsType>;
  camera: Camera & {
    manual?: boolean | undefined;
  };
  changeIsCanvasModal: () => void;
}

export default function CanvasModal(props: ICanvasModalProps): JSX.Element {
  const { onClickCancel } = useClickThreeModel({
    size: props.size,
    camera: props.camera,
    controlRef: props.controlRef,
    changeIsCanvasModal: props.changeIsCanvasModal,
  });
  return (
    <Modal width={750} open={true} footer={false} onCancel={onClickCancel}>
      <S.ModalContainer>
        <img src="/images/main/eatsMeMain.png" />
        <h1>잇츠미 :: TeamProject</h1>
        <S.TextDiv>
          팀프로젝트로 진행한 나만의 맛집코스를 작성 및 공유하는 웹사이트입니다.
        </S.TextDiv>
        <h2>주요기능</h2>
        <S.ListUl>
          <li>맛집 코스 작성</li>
          <li>지역별 맛집 조회</li>
          <li>chatGPT를 활용한 챗봇</li>
        </S.ListUl>
        <S.MovePageLink href="https://eatsme.site/" target="_blank">
          바로가기
        </S.MovePageLink>
      </S.ModalContainer>
    </Modal>
  );
}
