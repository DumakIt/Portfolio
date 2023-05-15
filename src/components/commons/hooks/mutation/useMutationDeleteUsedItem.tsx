import { gql, useMutation } from "@apollo/client";
import { useRouterMovePage } from "../custom/useRouterMovePage";
import { Modal } from "antd";
import { FETCH_USED_ITEMS } from "../query/useQueryFetchUseditems";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useMutationDeleteUsedItem = () => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const deleteUsedItem = (variables: { useditemId: string }) => async () => {
    console.log(variables);
    try {
      await mutation({
        variables,
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      routerMovePage(`/usedMarket`);
    } catch (error) {
      if (error instanceof Error) {
        return Modal.error({
          title: error.message,
          content: "확인후 다시 시도해 주세요.",
        });
      }
    }
  };

  return { deleteUsedItem };
};
