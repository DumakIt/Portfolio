import { Modal } from "antd";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../../commons/stores";
import { useRouterMovePage } from "./useRouterMovePage";

export const useWithAuth = (): void => {
  const { routerMovePage } = useRouterMovePage();
  const restoreAccess = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void restoreAccess.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.info({
          content: "로그인 후 이용 가능합니다",
          onOk() {
            routerMovePage("/usedMarket/login");
          },
          okButtonProps: {
            style: { backgroundColor: "black", color: "white" },
          },
        });
      }
    });
  }, []);
};
