import DetailHeader from "./header/detailHeader";
import styled from "@emotion/styled";
import DetailBody from "./body/detailBody";
import DetailAside from "./aside/detailAside";
import { useRouterIdCheck } from "../../../commons/hooks/custom/useRouterIdCheck";
import { useQueryFetchUsedItem } from "../../../commons/hooks/query/useQueryFetchUsedItem";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 80px auto 0;
`;

export const Line = styled.div`
  border-left: 1px solid #555555;
  margin-left: 37px;
  margin-right: 31px;
`;

export default function UsedMarketDetail(): JSX.Element {
  const { id } = useRouterIdCheck("detail");
  const { data } = useQueryFetchUsedItem({ useditemId: id });
  return (
    <>
      <DetailHeader data={data?.fetchUseditem} id={id} />
      <BodyWrapper>
        <DetailBody data={data?.fetchUseditem} />
        <Line></Line>
        <DetailAside data={data?.fetchUseditem} id={id} />
      </BodyWrapper>
    </>
  );
}
