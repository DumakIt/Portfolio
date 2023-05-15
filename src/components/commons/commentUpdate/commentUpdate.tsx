import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { IUseditemQuestion } from "../../../commons/types/generated/types";
import { useMutationUpdateUsedItemQuestion } from "../hooks/mutation/useMutationUpdateUsedItemQuestion";
import * as S from "./commentUpdateStyles";

interface IDetailCommentUpdateProps {
  id: string;
  data: IUseditemQuestion;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  reset: UseFormReset<FieldValues>;
  setIsActive: Dispatch<SetStateAction<string>>;
}

export default function CommentUpdate(
  props: IDetailCommentUpdateProps
): JSX.Element {
  const { updateUsedItemQuestion } = useMutationUpdateUsedItemQuestion();

  const onClickUpdateCanCel = () => {
    props.setIsActive("");
  };

  return (
    <form
      onSubmit={props.handleSubmit(
        updateUsedItemQuestion({
          useditemId: props.id,
          useditemQuestionId: props.data._id,
          setIsActive: props.setIsActive,
          reset: props.reset,
        })
      )}
    >
      <S.CommentTextareaWrapper>
        <textarea
          defaultValue={props.data.contents}
          {...props.register("UpdateComment")}
        />
        <S.CommentUpdateBtnWrapper>
          <S.CommentUpdateCanCel type="button" onClick={onClickUpdateCanCel}>
            취소하기
          </S.CommentUpdateCanCel>
          <S.CommentUpdateSubmit>수정하기</S.CommentUpdateSubmit>
        </S.CommentUpdateBtnWrapper>
      </S.CommentTextareaWrapper>
    </form>
  );
}
