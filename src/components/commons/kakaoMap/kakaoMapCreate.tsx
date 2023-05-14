import { Modal } from "antd";
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffectKakaoMapLoad } from "../hooks/custom/useEffectKakaoMapLoad";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";

export default function KakaoMap(props) {
  const [isToggle, changeIsToggle] = useSetIsToggle();
  const [position, setPosition] = useState({ lat: 37.56682195069747, lng: 126.97865508922976 });
  const [MapCenter, setMapCenter] = useState({
    center: { lat: 37.56682195069747, lng: 126.97865508922976 },
    isPanto: true,
  });

  useEffectKakaoMapLoad(changeIsToggle);
  useEffect(() => {
    if (isToggle) {
      onClickKeywordSearch();
    }
  }, [props.keyword]);

  useEffect(() => {
    if (props.data) {
      setPosition({ lat: props.data?.lat, lng: props.data?.lng });
      setMapCenter({
        isPanto: true,
        center: { lat: props.data?.lat, lng: props.data?.lng },
      });
    }
  }, [props.data, isToggle]);

  const onClickKeywordSearch = () => {
    try {
      const ps = new window.kakao.maps.services.Places();
      const placesSearchCB = (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const searchResult = data[0];

          setMapCenter({
            isPanto: true,
            center: { lat: searchResult.y, lng: searchResult.x },
          });
          setPosition({ lat: searchResult.y, lng: searchResult.x });
          props.setValue("useditemAddress.lat", searchResult.y);
          props.setValue("useditemAddress.lng", searchResult.x);
        }
      };
      ps.keywordSearch(props.keyword, placesSearchCB);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: error.message,
          content: "확인후 다시한번 시도해 주세요",
        });
    }
  };

  return (
    <div>
      {isToggle && (
        <Map center={MapCenter.center} isPanto={MapCenter.isPanto} level={3} style={{ width: "500px", height: "360px" }}>
          {position && <MapMarker position={position} />}
        </Map>
      )}
    </div>
  );
}
