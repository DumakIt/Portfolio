import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { IMutation, IMutationToggleUseditemPickArgs } from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "../query/useQueryFetchUsedItem";

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useMutationToggleUsedItemPick = () => {
  const [mutation] = useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(TOGGLE_USED_ITEM_PICK);
  const toggleUseditemPick = async (variables) => {
    try {
      await mutation({
        variables,
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables,
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: error.message,
          content: "잠시후 다시 시도해주세요.",
        });
    }
  };

  return { toggleUseditemPick };
};
