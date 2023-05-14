import * as S from "./detailAsideStyles";
import { useMutationCreateUsedItemQuestion } from "../../../../commons/hooks/mutation/useMutationCreateUsedItemQuestion";
import { useForm } from "react-hook-form";
import { useQueryFetchUsedItemQuestions } from "../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import { useSetIsActive } from "../../../../commons/hooks/custom/useSetIsActive";
import InfiniteScroll from "react-infinite-scroller";
import { IFinalDetailAsideProps } from "./detailAsideTypes";
import DetailComment from "../../../../commons/comment/detailComment";
import DetailCommentUpdate from "../../../../commons/commentUpdate/detailCommentUpdate";

export default function DetailAside(
  props: IFinalDetailAsideProps
): JSX.Element {
  const [, isActive, setIsActive] = useSetIsActive();
  const { createUsedItemQuestion } = useMutationCreateUsedItemQuestion();
  const { register, handleSubmit, reset } = useForm();
  const { data: commentData, FetchMore } = useQueryFetchUsedItemQuestions({
    useditemId: props.id,
  });

  return (
    <S.Container>
      <S.SellerInfoTitle>판매자</S.SellerInfoTitle>
      <S.SellerInfoWrapper>
        <S.SellerIconBox>
          {props.data?.seller?.picture === null ? (
            <S.SellerDefaultIcon />
          ) : (
            <img
              src={`https://storage.googleapis.com/${
                props.data?.seller?.picture ?? ""
              }`}
            />
          )}
        </S.SellerIconBox>
        <S.SellerName>{props.data?.seller?.name}</S.SellerName>
      </S.SellerInfoWrapper>
      <S.CommentTitle>댓글</S.CommentTitle>
      <S.Line></S.Line>
      <form
        onSubmit={handleSubmit(createUsedItemQuestion({ id: props.id, reset }))}
      >
        <S.CommentTextareaWrapper>
          <textarea {...register("contents")} />
          <S.CommentWriteBtn>작성하기</S.CommentWriteBtn>
        </S.CommentTextareaWrapper>
      </form>
      <S.CommentsContainer>
        <InfiniteScroll loadMore={FetchMore} hasMore={true}>
          {commentData?.fetchUseditemQuestions.map((el) =>
            el._id !== isActive ? (
              <DetailComment
                key={el._id}
                data={el}
                picture={props.data?.seller?.picture}
                id={props.id}
                setIsActive={setIsActive}
                reset={reset}
              />
            ) : (
              <DetailCommentUpdate
                key={el._id}
                data={el}
                id={props.id}
                setIsActive={setIsActive}
                reset={reset}
                register={register}
                handleSubmit={handleSubmit}
              />
            )
          ) ?? <></>}
        </InfiniteScroll>
      </S.CommentsContainer>
    </S.Container>
  );
}
