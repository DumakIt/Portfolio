import * as S from "./detailAsideStyles";
import { useMutationCreateUsedItemQuestion } from "../../../../commons/hooks/mutation/useMutationCreateUsedItemQuestion";
import { useForm } from "react-hook-form";
import { useQueryFetchUsedItemQuestions } from "../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import { useSetIsActive } from "../../../../commons/hooks/custom/useSetIsActive";
import InfiniteScroll from "react-infinite-scroller";
import { IFinalDetailAsideProps } from "./detailAsideTypes";
import Comment from "../../../../commons/comment/comment";
import CommentUpdate from "../../../../commons/commentUpdate/commentUpdate";
import Reply from "../../../../commons/reply/reply";

export default function DetailAside(
  props: IFinalDetailAsideProps
): JSX.Element {
  const [onClickIsActive, isActive, setIsActive] = useSetIsActive();
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
          {commentData?.fetchUseditemQuestions.map((el) => (
            <div key={el._id}>
              {el._id !== isActive ? (
                <Comment
                  key={el._id}
                  data={el}
                  picture={props.data?.seller?.picture}
                  id={props.id}
                  setIsActive={setIsActive}
                  reset={reset}
                  onClickIsActive={onClickIsActive}
                />
              ) : (
                <CommentUpdate
                  key={el._id}
                  data={el}
                  id={props.id}
                  setIsActive={setIsActive}
                  reset={reset}
                  register={register}
                  handleSubmit={handleSubmit}
                />
              )}
              <Reply
                id={el._id}
                isActive={isActive}
                setIsActive={setIsActive}
                reset={reset}
              />
            </div>
          )) ?? <></>}
        </InfiniteScroll>
      </S.CommentsContainer>
    </S.Container>
  );
}
