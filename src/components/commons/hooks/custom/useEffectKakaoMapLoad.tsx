import { useEffect } from "react";

export const useEffectKakaoMapLoad = (changeIsToggle) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=bd267c3409ad63bff12f4bc9683e42a5&libraries=services&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        changeIsToggle();
      });
    };
  }, []);
};
