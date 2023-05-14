import * as S from "./detailBodyStyles";
import Dompurify from "dompurify";
import KakaoMapDetail from "../../../../commons/kakaoMap/kakaoMapDetail";
import { useEffect, useState } from "react";
import { IFinalDetailBodyProps } from "./detailBodyTypes";

export default function DetailBody(props: IFinalDetailBodyProps): JSX.Element {
  const [keyword, setKeyword] = useState("서울 시청");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.data?.useditemAddress?.address) {
      setKeyword(props.data?.useditemAddress?.address);
      setIsOpen(true);
    }
  }, [props.data]);

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
        {props.data?.useditemAddress?.address && (
          <S.SellLocationTitle>
            <img src="/images/gps.png" />
            <div>거래지역</div>
          </S.SellLocationTitle>
        )}
        <KakaoMapDetail
          keyword={keyword}
          isOpen={isOpen}
          address={props.data?.useditemAddress}
        />
      </S.SellLocationWrapper>
    </S.Container>
  );
}
