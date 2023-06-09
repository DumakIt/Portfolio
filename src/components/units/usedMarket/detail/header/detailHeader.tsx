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
      <S.ImgWrapper isImg={Boolean(props.data?.images?.[0])}>
        <img
          src={
            props.data?.images?.[0] !== ""
              ? `https://storage.googleapis.com/${
                  props.data?.images?.[0] ?? ""
                }`
              : "/images/usedMarket/defaultItem.webp"
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

        <S.BuyBtnBox>
          <button
            onClick={() => {
              void createPointTransactionOfBuyingAndSelling({
                useritemId: props.id,
                loggedInUser: loggedInUser._id,
              })();
            }}
          >
            구매하기
          </button>
        </S.BuyBtnBox>
      </S.ItemInfoWrapper>
    </S.Container>
  );
}
