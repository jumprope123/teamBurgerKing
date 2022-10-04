/* global kakao */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMapSearchData } from "../../../store/Store";

const { kakao } = window;

const KakaoMap = (props) => {
  /**
   * 리덕스의 리듀서를 사용하기 위한 변수선언
   */
  let dispatch = useDispatch();

  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.57253458172258, 126.98050426601237), // 지도의 중심좌표 (버거킹 종로구청점)
        level: 5, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "center_changed", function () {
      // 지도의 중심좌표를 얻어옵니다
      var latlng = map.getCenter();

      searchAddrFromCoords(latlng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          console.log(result[0]["address_name"]);
        }
      });
      console.log(latlng);
    });

    function searchAddrFromCoords(coords, callback) {
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    // 키워드로 장소를 검색합니다
    ps.keywordSearch("버거킹", placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        makeMarker(data);
        dispatch(changeMapSearchData(data));
      }
    }
    function makeMarker(positions) {
      // 마커 이미지의 이미지 주소입니다
      console.log(positions);
      var imageSrc = "/image/main/shop/maker.png";
      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(100, 100);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        // 마커를 생성합니다
        new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(positions[i]["y"], positions[i]["x"]), // 마커를 표시할 위치
          title: positions[i]["place_name"], // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "0px",
        marginRight: "0px",
      }}
    >
      <div id="map" style={{ width: "100%", height: props.mapHeight }}></div>
    </div>
  );
};

export default KakaoMap;
