import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../query/useQueryFetchUsedItemQuestionAnswers";

const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

interface Iargs {
  useditemQuestionId: string;
  useditemQuestionAnswerId: string;
}

export const useMutationDeleteUsedItemQuestionAnswer = () => {
  const [mutation] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const deleteUsedItemQuestionAnswer = (args: Iargs) => () => {
    try {
      void mutation({
        variables: {
          useditemQuestionAnswerId: args.useditemQuestionAnswerId,
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
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          title: error.message,
          content: "확인 후 다시 시도해주세요.",
        });
      }
    }
  };
  return { deleteUsedItemQuestionAnswer };
};
