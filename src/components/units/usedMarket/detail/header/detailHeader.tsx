import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../../../commons/stores";
import { IUseditem } from "../../../../../commons/types/generated/types";
import { useRouterMovePage } from "../../../../commons/hooks/custom/useRouterMovePage";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "../../../../commons/hooks/mutation/useMutationCreatePointTransactionOfBuyingAndSelling";
import { useMutationDeleteUsedItem } from "../../../../commons/hooks/mutation/useMutationDeleteUsedItem";

import * as S from "./detailHeaderStyles";

export interface IDetailHeaderProps {
  data: IUseditem | undefined;
  id: string;
}

export default function DetailHeader(props: IDetailHeaderProps): JSX.Element {
  const [loggedInUser] = useRecoilState(loggedInUserState);
  const { onClickMovePage } = useRouterMovePage();
  const { deleteUsedItem } = useMutationDeleteUsedItem();
  const { createPointTransactionOfBuyingAndSelling } =
    useMutationCreatePointTransactionOfBuyingAndSelling();

  return (
    <S.Container>
      <S.ImgWrapper>
        <img
          src={
            props.data?.images?.[0] !== ""
              ? `https://storage.googleapis.com/${
                  props.data?.images?.[0] ?? ""
                }`
              : "/images/usedMarket/defaultItem.png"
          }
        />
      </S.ImgWrapper>
      <S.ItemInfoWrapper>
        <S.FuncBtnBox>
          {loggedInUser._id === props.data?.seller?._id && (
            <>
              <S.ItemBtnUpdate
                onClick={onClickMovePage(`/usedMarket/${props.id}/edit`)}
              />
              <S.ItemBtnDelete
                onClick={() => {
                  void deleteUsedItem({ useditemId: props.id })();
                }}
              />
            </>
          )}
        </S.FuncBtnBox>
        <S.ItemName>{props.data?.name}</S.ItemName>

        <S.ItemPrice>
          {props.data?.price?.toLocaleString()}
          <span>원</span>
        </S.ItemPrice>
        <S.Line></S.Line>
        <S.BuyBtn
          onClick={() => {
            if (loggedInUser._id !== undefined) {
              void createPointTransactionOfBuyingAndSelling({
                useritemId: props.id,
              })();
            } else {
              Modal.info({
                content: "로그인 후 이용 가능합니다",
                okButtonProps: {
                  style: { backgroundColor: "black", color: "white" },
                },
              });
            }
          }}
        >
          구매하기
        </S.BuyBtn>
      </S.ItemInfoWrapper>
    </S.Container>
  );
}
