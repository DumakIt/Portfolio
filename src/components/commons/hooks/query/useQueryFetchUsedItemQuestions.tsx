import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      user {
        name
        _id
      }
      createdAt
    }
  }
`;

export const useQueryFetchUsedItemQuestions = (
  variables: IQueryFetchUseditemQuestionsArgs
) => {
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, { variables });

  const FetchMore = async () => {
    if (data === undefined) return;
    await fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestions.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestions === undefined) return prev;
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return { data, FetchMore, refetch };
};
