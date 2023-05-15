import { Map, MapMarker, useInjectKakaoMapApi } from "react-kakao-maps-sdk";

export default function KakaoMapDetail(props): JSX.Element {
  const { loading } = useInjectKakaoMapApi({
    appkey: "bd267c3409ad63bff12f4bc9683e42a5",
    libraries: ["services"],
  });

  return (
    <>
      {!loading && (
        <Map
          center={{ lat: props.data?.lat, lng: props.data?.lng }}
          level={3}
          isPanto={true}
          style={{ width: "100%", height: "448px" }}
        >
          <MapMarker
            position={{ lat: props.data?.lat, lng: props.data?.lng }}
          />
        </Map>
      )}
    </>
  );
}
