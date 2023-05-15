import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../query/useQueryFetchUsedItemQuestionAnswers";

const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItemQuestionAnswer = () => {
  const [mutation] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const updateUseditemQuestionAnswer = (args) => (data) => {
    void mutation({
      variables: {
        updateUseditemQuestionAnswerInput: { contents: data.UpdateReply },
        useditemQuestionAnswerId: args.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: {
            useditemQuestionId: args.useditemQuestionId,
          },
        },
      ],
    });
    args.setIsActive("");
  };
  return { updateUseditemQuestionAnswer };
};
