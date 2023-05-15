import { useForm } from "react-hook-form";
import { useMutationUpdateUsedItemQuestionAnswer } from "../hooks/mutation/useMutationUpdateUsedItemQuestionAnswer";
import * as S from "./replyUpdateStyles";

export default function ReplyUpdate(props): JSX.Element {
  const { updateUseditemQuestionAnswer } =
    useMutationUpdateUsedItemQuestionAnswer();
  const { handleSubmit, reset, register } = useForm();

  const onClickUpdateCanCel = () => {
    props.setIsActive("");
  };

  return (
    <S.ReplyWriteWrapper
      onSubmit={handleSubmit(
        updateUseditemQuestionAnswer({
          id: props.id,
          reset,
          useditemQuestionId: props.useditemQuestionId,
          setIsActive: props.setIsActive,
        })
      )}
    >
      <S.ReplyEnter />
      <S.CommentTextareaWrapper>
        <textarea
          defaultValue={props.data.contents}
          {...register("UpdateReply")}
        />
        <S.CommentUpdateBtnWrapper>
          <S.CommentUpdateCanCel type="button" onClick={onClickUpdateCanCel}>
            취소하기
          </S.CommentUpdateCanCel>
          <S.CommentUpdateSubmit>수정하기</S.CommentUpdateSubmit>
        </S.CommentUpdateBtnWrapper>
      </S.CommentTextareaWrapper>
    </S.ReplyWriteWrapper>
  );
}
