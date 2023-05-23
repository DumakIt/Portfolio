import { Modal } from "antd";
import { RefObject } from "react";
import { useClickThreeModel } from "../../hooks/custom/useClickThreeModel";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";
import { Camera } from "@react-three/fiber/dist/declarations/src/core/utils";
import * as S from "./tvModalStyles";
import { Size } from "@react-three/fiber";

interface ITvModalProps {
  size: Size;
  controlRef: RefObject<OrbitControlsType>;
  camera: Camera & {
    manual?: boolean | undefined;
  };
  changeIsTvModal: () => void;
}

export default function TvModal(props: ITvModalProps): JSX.Element {
  const { onClickCancel } = useClickThreeModel({
    size: props.size,
    camera: props.camera,
    controlRef: props.controlRef,
    changeIsTvModal: props.changeIsTvModal,
  });

  return (
    <Modal width={1300} open={true} footer={false} onCancel={onClickCancel}>
      <S.ModalContainer>
        <S.PageWrapper>
          <img src="/images/main/usedMarketMain.png" />
          <h1>중고마켓</h1>
          <S.TextDiv>
            GraphQL과 포트원(아임포트)를 이용하여 물건을 사고, 팔 수 있는 중고
            물품 거래 웹사이트입니다.
          </S.TextDiv>
          <h2>주요기능</h2>
          <S.ListUl>
            <li>포인트 충전</li>
            <li>물건 구매 / 판매</li>
            <li>댓글 및 대댓글</li>
          </S.ListUl>
          <S.MovePageLink href="/usedMarket" target="_blank">
            바로가기
          </S.MovePageLink>
        </S.PageWrapper>
        <S.PageWrapper>
          <img src="/images/main/usedMarketMain.png" />
          <h1>고양이 갤러리</h1>
          <S.TextDiv>
            Axios와 Cloud Firestore를 사용하여 간단한 CRUD를 구현하여 고양이
            사진을 저장하는 웹사이트입니다.
          </S.TextDiv>
          <h2>주요기능</h2>
          <S.ListUl>
            <li>카테고리 생성</li>
            <li>저장한 사진 불러오기</li>
            <li>사진 저장 및 삭제</li>
            <li>사진 제목 수정</li>
          </S.ListUl>
          <S.MovePageLink href="/catGallery" target="_blank">
            바로가기
          </S.MovePageLink>
        </S.PageWrapper>
      </S.ModalContainer>
    </Modal>
  );
}
