import { useRouterIdCheck } from "../../../../src/components/commons/hooks/custom/useRouterIdCheck";
import { useQueryFetchUsedItem } from "../../../../src/components/commons/hooks/query/useQueryFetchUsedItem";
import UsedMarketWrite from "../../../../src/components/units/usedMarket/write/usedMarketWrite";

export default function editPage(): JSX.Element {
  const { id } = useRouterIdCheck("detail");
  const { data } = useQueryFetchUsedItem({ useditemId: id });
  return <UsedMarketWrite isEdit={true} data={data} id={id} />;
}
