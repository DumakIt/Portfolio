import { useRouterMovePage } from "../../../../commons/hooks/custom/useRouterMovePage";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "../../../../commons/hooks/mutation/useMutationCreatePointTransactionOfBuyingAndSelling";
import { useMutationDeleteUsedItem } from "../../../../commons/hooks/mutation/useMutationDeleteUsedItem";
import { useMutationToggleUsedItemPick } from "../../../../commons/hooks/mutation/useMutationToggleUsedItemPick";
import * as S from "./detailHeaderStyles";
import { IFinalDetailHeaderProps } from "./detailHeaderTypes";

export default function DetailHeader(
  props: IFinalDetailHeaderProps
): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  const { deleteUsedItem } = useMutationDeleteUsedItem();
  const { createPointTransactionOfBuyingAndSelling } =
    useMutationCreatePointTransactionOfBuyingAndSelling();
  const { toggleUseditemPick } = useMutationToggleUsedItemPick();

  const onClickPickBtn = (): void => {
    void toggleUseditemPick({ useditemId: props.id });
  };

  return (
    <S.Container>
      <S.ImgWrapper>
        <img
          src={
            props.data?.images?.[0] !== undefined
              ? `https://storage.googleapis.com/${props.data?.images[0]}`
              : "/main/detailDefault.png"
          }
        />
      </S.ImgWrapper>
      <S.ItemInfoWrapper>
        <S.FuncBtnBox>
          <S.ItemBtnUpdate
            src="/images/editIcon.png"
            onClick={onClickMovePage(`/final/${props.id}/edit`)}
          />
          <S.ItemBtnDelete
            src="/images/deleteIcon.png"
            onClick={() => {
              deleteUsedItem({ useditemId: props.id });
            }}
          />
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
