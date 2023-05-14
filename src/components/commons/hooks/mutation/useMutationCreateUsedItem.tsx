import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      tags
      useditemAddress {
        lat
        lng
      }
    }
  }
`;

export const useMutationCreateUsedItem = () => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_USED_ITEM);

  const createUsedItem = async (value) => {
    console.log(value);
    const result = await mutation({
      variables: {
        createUseditemInput: {
          ...value,
          price: Number(value.price),
          tags: String(value.tags).split(" "),
          useditemAddress: {
            ...value.useditemAddress,
            lat: Number(value.useditemAddress?.lat),
            lng: Number(value.useditemAddress?.lng),
          },
        },
      },
    });
    routerMovePage(`/final/${result.data?.createUseditem._id}`);
  };
  return { createUsedItem };
};
