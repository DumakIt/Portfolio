import { IQuery } from "../../../../commons/types/generated/types";

export interface IFinalWriteBodyProps {
  isEdit: boolean;
  id: string;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}
