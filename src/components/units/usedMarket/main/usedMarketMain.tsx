import * as S from "./usedMarketMainStyles";
import InfiniteScroll from "react-infinite-scroller";
import { useQueryFetchUsedItems } from "../../../commons/hooks/query/useQueryFetchUseditems";
import { CreateAtTime } from "../../../commons/utility/useCreateAtTime";
import { IUseditem } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../../../commons/hooks/custom/useRouterMovePage";

export default function UsedMarketMain(): JSX.Element {
  const { data, FetchMore } = useQueryFetchUsedItems();
  const { onClickMovePage } = useRouterMovePage();

  return (
    <InfiniteScroll loadMore={FetchMore} hasMore={true}>
      <S.Container>
        {data?.fetchUseditems.map((el: IUseditem) => (
          <S.ItemWrapper
            key={el._id}
            onClick={onClickMovePage(`/usedMarket/${el._id}`)}
          >
            <S.ImgWrapper isImg={Boolean(el.images?.[0])}>
              <img
                src={
                  el.images?.[0] !== undefined && el.images?.[0] !== ""
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/images/main/defaultItem.png"
                }
              />
            </S.ImgWrapper>
            <S.ContentsWrapper>
              <div>{el.name}</div>
              <S.ContentsBottomWrapper>
                <div>{el.price?.toLocaleString()}원</div>
                <div>{CreateAtTime(el.createdAt)}</div>
              </S.ContentsBottomWrapper>
            </S.ContentsWrapper>
          </S.ItemWrapper>
        ))}
      </S.Container>
    </InfiniteScroll>
  );
}
