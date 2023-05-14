import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import { useQueryFetchUsedItemsCountIPicked } from "./useQueryFetchUsedItemsCountIPicked";
import { IFetchUseditemsIPickedArgs } from "./useQueryTypes";

const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      seller {
        name
        picture
      }
    }
  }
`;

export const useQueryFetchUsedItemsIPicked = () => {
  const { data: count } = useQueryFetchUsedItemsCountIPicked();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, { variables: { search: "", page: 1 } });

  const fetchUseditemsIPicked = async (args: IFetchUseditemsIPickedArgs) => {
    if (data === undefined || count?.fetchUseditemsCountIPicked === 0) return;
    const lastCount =
      Math.ceil((count?.fetchUseditemsCountIPicked ?? 10) / 10) - 1;
    const result = await Promise.all(
      new Array(lastCount).fill(1).map(
        async (_, idx) =>
          await fetchMore({
            variables: {
              search: "",
              page: idx + 2,
            },
          })
      )
    );
    const newResult = [...data.fetchUseditemsIPicked];
    result.map((el) => newResult.push(...el.data.fetchUseditemsIPicked));
    args.setIsToggle(newResult.some((el) => el._id === args.id));
  };
  return { data, fetchUseditemsIPicked };
};
