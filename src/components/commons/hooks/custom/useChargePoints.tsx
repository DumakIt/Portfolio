import { Modal } from "antd";
import { useMutationCreatePointTransactionOfLoading } from "../mutation/useMutationCreatePointTransactionOfLoading";

declare const window: typeof globalThis & {
  IMP: any;
};

export const useChargePoints = () => {
  const { createPointTransactionOfLoading } = useMutationCreatePointTransactionOfLoading();

  const onClickCharge = (args) => () => {
    console.log(args);
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "포인트 충전",
        amount: args.amount,
        buyer_email: args.data?.email,
        buyer_name: args.data?.name,
      },
      (rsp: any) => {
        if (rsp.success) {
          args.onClickCancel();
          createPointTransactionOfLoading({ impUid: rsp.imp_uid });
        } else {
          Modal.error({
            title: "충전을 실패했습니다",
            content: "확인 후 다시 시도해주세요.",
            onOk() {
              args.onClickCancel();
            },
          });
        }
      }
    );
  };
  return { onClickCharge };
};
