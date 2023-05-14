import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";

const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

export const useMutationCreateUsedItemQuestion = () => {
  const [mutation] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const createUsedItemQuestion =
    (args: { id: string; reset: () => void }) =>
    async (createUseditemQuestionInput: { contents: string }) => {
      if (createUseditemQuestionInput.contents.trim().length === 0) return;
      await mutation({
        variables: {
          createUseditemQuestionInput,
          useditemId: args.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: args.id,
            },
          },
        ],
      });
      args.reset();
    };
  return { createUsedItemQuestion };
};
