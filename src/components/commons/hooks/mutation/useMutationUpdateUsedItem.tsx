import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";
import { FETCH_USED_ITEM } from "../query/useQueryFetchUsedItem";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItem = () => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const updateUsedItem =
    (id: string) => async (updateUseditemInput: IUseditem) => {
      await mutation({
        variables: {
          useditemId: id,
          updateUseditemInput: {
            ...updateUseditemInput,
            remarks: "",
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: id,
            },
          },
        ],
      });

      routerMovePage(`/usedMarket/${id}`);
    };
  return { updateUsedItem };
};
