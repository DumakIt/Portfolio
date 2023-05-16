import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";
import { FETCH_USER_LOGGED_IN } from "../query/useQueryFetchUserLoggedIn";

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

interface IuseMutationCreatePointTransactionOfBuyingAndSelling {
  createPointTransactionOfBuyingAndSelling: (
    variables: IMutationCreatePointTransactionOfBuyingAndSellingArgs
  ) => () => Promise<void>;
}

export const useMutationCreatePointTransactionOfBuyingAndSelling =
  (): IuseMutationCreatePointTransactionOfBuyingAndSelling => {
    const { routerMovePage } = useRouterMovePage();
    const [mutation] = useMutation<
      Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
      IMutationCreatePointTransactionOfBuyingAndSellingArgs
    >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

    const createPointTransactionOfBuyingAndSelling =
      (variables: IMutationCreatePointTransactionOfBuyingAndSellingArgs) =>
      async () => {
        try {
          await mutation({
            variables,
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });
          routerMovePage("/usedMarket");
        } catch (error) {
          if (error instanceof Error)
            Modal.error({
              content: "확인후 다시 시도해 주세요",
              okButtonProps: {
                style: { backgroundColor: "black", color: "white" },
              },
            });
        }
      };

    return { createPointTransactionOfBuyingAndSelling };
  };
