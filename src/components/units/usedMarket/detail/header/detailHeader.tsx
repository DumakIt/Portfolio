import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../../../commons/stores";
import { useRouterMovePage } from "../../../../commons/hooks/custom/useRouterMovePage";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "../../../../commons/hooks/mutation/useMutationCreatePointTransactionOfBuyingAndSelling";
import { useMutationDeleteUsedItem } from "../../../../commons/hooks/mutation/useMutationDeleteUsedItem";
import * as S from "./detailHeaderStyles";
import { IFinalDetailHeaderProps } from "./detailHeaderTypes";

export default function DetailHeader(
  props: IFinalDetailHeaderProps
): JSX.Element {
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
              ? `https://storage.googleapis.com/${props.data?.images[0]}`
              : "/images/defaultItem.png"
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
                  deleteUsedItem({ useditemId: props.id });
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
          onClick={createPointTransactionOfBuyingAndSelling({
            useritemId: props.id,
          })}
        >
          구매하기
        </S.BuyBtn>
      </S.ItemInfoWrapper>
    </S.Container>
  );
}
