import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";
import { FETCH_USED_ITEM } from "../query/useQueryFetchUsedItem";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItem = () => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<Pick<IMutation, "updateUseditem">, IMutationUpdateUseditemArgs>(UPDATE_USED_ITEM);

  const updateUsedItem = (id: string) => async (value: any) => {
    await mutation({
      variables: {
        useditemId: id,
        updateUseditemInput: {
          ...value,
          price: Number(value.price),
          useditemAddress: {
            ...value.useditemAddress,
            lat: Number(value.useditemAddress?.lat),
            lng: Number(value.useditemAddress?.lng),
          },
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

    routerMovePage(`/final/${id}`);
  };
  return { updateUsedItem };
};
