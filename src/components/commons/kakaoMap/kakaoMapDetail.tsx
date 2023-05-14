import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffectKakaoMapLoad } from "../hooks/custom/useEffectKakaoMapLoad";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";

export default function KakaoMapDetail(props) {
  const [isToggle, changeIsToggle] = useSetIsToggle();

  const [center, setCenter] = useState({
    center: { lat: 37.56682195069747, lng: 126.97865508922976 },
    isPanto: true,
  });

  const [position, setPosition] = useState({
    lat: 37.56682195069747,
    lng: 126.97865508922976,
  });
  console.log(props);

  useEffectKakaoMapLoad(changeIsToggle);

  useEffect(() => {
    if (isToggle) {
      SearchMap();
    }
  }, [props.isOpen, isToggle]);

  const SearchMap = () => {
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const searchResult = result[0];
        setCenter({ center: { lat: searchResult.y, lng: searchResult.x } });
        setPosition({ lat: searchResult.y, lng: searchResult.x });
      }
    };
    geocoder.addressSearch(props.keyword, callback);
  };

  return (
    <>
      <div>
        <Map
          center={center.center}
          isPanto={center.isPanto}
          level={3}
          style={{ width: "860px", height: "448px" }}
        >
          <MapMarker position={position} />
        </Map>
      </div>
    </>
  );
}
