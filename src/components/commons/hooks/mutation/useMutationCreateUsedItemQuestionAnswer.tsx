import { gql, useMutation } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import {
  ICreateUseditemQuestionAnswerInput,
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../query/useQueryFetchUsedItemQuestionAnswers";

const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

interface IcreateUsedItemQuestionAnswerArgs {
  id: string;
  reset: UseFormReset<ICreateUseditemQuestionAnswerInput>;
  setIsActive: Dispatch<SetStateAction<string>>;
}

export const useMutationCreateUsedItemQuestionAnswer = () => {
  const [mutation] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const createUsedItemQuestionAnswer =
    (args: IcreateUsedItemQuestionAnswerArgs) =>
    async (createUseditemQuestionAnswerInput) => {
      void mutation({
        variables: {
          createUseditemQuestionAnswerInput,
          useditemQuestionId: args.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: args.id,
            },
          },
        ],
      });
      args.setIsActive("");
      args.reset();
    };
  return { createUsedItemQuestionAnswer };
};
