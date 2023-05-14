import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormReset } from "react-hook-form";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../commons/stores";
import {
  IUseditemQuestion,
  Maybe,
} from "../../../commons/types/generated/types";
import { useMutationDeleteUsedItemQuestion } from "../hooks/mutation/useMutationDeleteUsedItemQuestion";
import * as S from "./detailCommentStyles";

interface IDetailCommentProps {
  id: string;
  data: IUseditemQuestion;
  picture: Maybe<string> | undefined;
  reset: UseFormReset<FieldValues>;
  setIsActive: Dispatch<SetStateAction<string>>;
}

export default function DetailComment(props: IDetailCommentProps): JSX.Element {
  const [loggedInUser] = useRecoilState(loggedInUserState);
  const { deleteUsedItemQuestion } = useMutationDeleteUsedItemQuestion();

  const onClickCommentUpdate = (args) => (event) => {
    props.reset({ UpdateContents: args.contents });
    props.setIsActive(event.currentTarget.id);
  };

  return (
    <>
      <S.CommentWriterInfoContainer>
        <S.CommentWriterInfoWrapper>
          <S.CommentWriterIconBox>
            {props.picture === null ? (
              <S.CommentWriterDefaultIcon />
            ) : (
              <img
                src={`https://storage.googleapis.com/${props.picture ?? ""}`}
              />
            )}
          </S.CommentWriterIconBox>
          <S.CommentWriterCreateAtWrapper>
            <S.CommentWriter>{props.data.user.name}</S.CommentWriter>
            <S.CommentCreateAt>
              {props.data.createdAt.slice(0, 10).replaceAll("-", ".")}
            </S.CommentCreateAt>
          </S.CommentWriterCreateAtWrapper>
        </S.CommentWriterInfoWrapper>
        {loggedInUser._id === props.data.user._id && (
          <div>
            <S.CommentUpdateIcon
              id={props.data._id}
              onClick={onClickCommentUpdate(props.data.contents)}
            />
            <S.CommentDeleteIcon
              onClick={deleteUsedItemQuestion({
                useditemQuestionId: props.data._id,
                useditemId: props.id,
              })}
            />
          </div>
        )}
      </S.CommentWriterInfoContainer>

      <S.CommentContents>{props.data.contents}</S.CommentContents>
    </>
  );
}
