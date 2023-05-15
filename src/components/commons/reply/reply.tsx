import { Dispatch, SetStateAction } from "react";
import { FieldValues, useForm, UseFormReset } from "react-hook-form";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../commons/stores";
import { ICreateUseditemQuestionAnswerInput } from "../../../commons/types/generated/types";
import { useMutationCreateUsedItemQuestionAnswer } from "../hooks/mutation/useMutationCreateUsedItemQuestionAnswer";
import { useMutationDeleteUsedItemQuestionAnswer } from "../hooks/mutation/useMutationDeleteUsedItemQuestionAnswer";
import { useQueryFetchUsedItemQuestionAnswers } from "../hooks/query/useQueryFetchUsedItemQuestionAnswers";
import ReplyUpdate from "../replyUpdate/replyUpdate";
import * as S from "./replyStyles";

interface IReplyProps {
  id: string;
  isActive: string;
  reset: UseFormReset<FieldValues>;
  setIsActive: Dispatch<SetStateAction<string>>;
}

export default function Reply(props: IReplyProps): JSX.Element {
  const [loggedInUser] = useRecoilState(loggedInUserState);
  const { data } = useQueryFetchUsedItemQuestionAnswers({
    useditemQuestionId: props.id,
  });
  const { createUsedItemQuestionAnswer } =
    useMutationCreateUsedItemQuestionAnswer();
  const { deleteUsedItemQuestionAnswer } =
    useMutationDeleteUsedItemQuestionAnswer();
  const { handleSubmit, reset, register } =
    useForm<ICreateUseditemQuestionAnswerInput>();

  const onClickReplyUpdate = (event) => {
    props.setIsActive(event.currentTarget.id);
  };

  return (
    <>
      {props.isActive === props.id + "ReplyWrite" && (
        <S.ReplyWriteWrapper
          onSubmit={handleSubmit(
            createUsedItemQuestionAnswer({
              id: props.id,
              reset,
              setIsActive: props.setIsActive,
            })
          )}
        >
          <S.ReplyEnter />
          <S.ReplyWriteTextareaWrapper>
            <textarea {...register("contents")} />
            <S.ReplyWriteSubmit>작성하기</S.ReplyWriteSubmit>
          </S.ReplyWriteTextareaWrapper>
        </S.ReplyWriteWrapper>
      )}
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <div key={el._id}>
          {props.isActive !== el._id + "ReplyUpdate" ? (
            <S.ReplyContainer key={el._id}>
              <S.ReplyEnter />
              <S.ReplyDetailContainer key={el._id}>
                <div>
                  <S.ReplyWriterInfoWrapper>
                    <S.ReplyWriterIconBox>
                      {el.user.picture === null ? (
                        <S.ReplyWriterDefaultIcon />
                      ) : (
                        <img
                          src={`https://storage.googleapis.com/${
                            el.user.picture ?? ""
                          }`}
                        />
                      )}
                    </S.ReplyWriterIconBox>
                    <S.ReplyWriterCreateAtWrapper>
                      <S.ReplyWriter>{el.user.name}</S.ReplyWriter>
                      <S.ReplyCreateAt>
                        {el.createdAt.slice(0, 10).replaceAll("-", ".")}
                      </S.ReplyCreateAt>
                    </S.ReplyWriterCreateAtWrapper>
                  </S.ReplyWriterInfoWrapper>
                  {loggedInUser._id === el.user._id && (
                    <div>
                      <S.ReplyUpdateIcon
                        id={el._id + "ReplyUpdate"}
                        onClick={onClickReplyUpdate}
                      />
                      <S.ReplyDeleteIcon
                        onClick={deleteUsedItemQuestionAnswer({
                          useditemQuestionId: props.id,
                          useditemQuestionAnswerId: el._id,
                        })}
                      />
                    </div>
                  )}
                </div>
                <S.ReplyContents>{el.contents}</S.ReplyContents>
              </S.ReplyDetailContainer>
            </S.ReplyContainer>
          ) : (
            <ReplyUpdate
              id={el._id}
              useditemQuestionId={props.id}
              setIsActive={props.setIsActive}
              data={el}
            />
          )}
        </div>
      ))}
    </>
  );
}
