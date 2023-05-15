import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
  IUpdateUseditemQuestionInput,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";
import { IUpdateUsedItemQuestionArgs } from "./useMutationTypes";

const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItemQuestion = () => {
  const [mutation] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const updateUsedItemQuestion =
    (args) => (data: { UpdateComment: string }) => {
      void mutation({
        variables: {
          updateUseditemQuestionInput: { contents: data.UpdateComment },
          useditemQuestionId: args.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: args.useditemId,
            },
          },
        ],
      });
      args.reset({ UpdateComment: "" });
      args.setIsActive("");
    };
  return { updateUsedItemQuestion };
};
