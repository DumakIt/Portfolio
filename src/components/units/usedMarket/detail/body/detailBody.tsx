import * as S from "./detailBodyStyles";
import Dompurify from "dompurify";
import KakaoMapDetail from "../../../../commons/kakaoMapDetail/kakaoMapDetail";
import { IFinalDetailBodyProps } from "./detailBodyTypes";

export default function DetailBody(props: IFinalDetailBodyProps): JSX.Element {
  return (
    <S.Container>
      <S.ItemInfoTitle>상품정보</S.ItemInfoTitle>
      <S.Line></S.Line>
      <S.ImgContainer>
        {props.data?.images ? (
          props.data?.images.map(
            (el, idx) =>
              el &&
              idx !== 0 && (
                <S.ImgWrapper key={el}>
                  <img src={`https://storage.googleapis.com/${el}`} />
                </S.ImgWrapper>
              )
          )
        ) : (
          <></>
        )}
      </S.ImgContainer>

      {typeof window !== "undefined" ? (
        <S.ItemContents
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(props.data?.contents ?? ""),
          }}
        />
      ) : (
        <S.ItemContents></S.ItemContents>
      )}
      <S.SellLocationWrapper>
        {props.data?.useditemAddress && (
          <>
            <S.SellLocationTitle>
              <S.LocationIcon />
              <div>거래지역</div>
            </S.SellLocationTitle>
            <KakaoMapDetail data={props.data?.useditemAddress} />
          </>
        )}
      </S.SellLocationWrapper>
    </S.Container>
  );
}
