/* global kakao */
import React, { useEffect, useState } from "react";

const { kakao } = window;

const KakaoMap = (props) => {
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

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: "버거킹 종로구청점",
        latlng: new kakao.maps.LatLng(37.57253458172258, 126.98050426601237),
      },
      {
        title: "버거킹 종로점",
        latlng: new kakao.maps.LatLng(37.569931723536165, 126.98817958379975),
      },
      {
        title: "버거킹 혜화점",
        latlng: new kakao.maps.LatLng(37.58344495913932, 127.00215109885075),
      },
      {
        title: "버거킹 서대문역점",
        latlng: new kakao.maps.LatLng(37.56294567440028, 126.96956746396184),
      },
      {
        title: "버거킹 시청역점",
        latlng: new kakao.maps.LatLng(37.56364769609941, 126.97606970027857),
      },
      {
        title: "버거킹 회현역점",
        latlng: new kakao.maps.LatLng(37.55862514042776, 126.97868572218866),
      },
      {
        title: "버거킹 충무로역점",
        latlng: new kakao.maps.LatLng(37.56139530010465, 126.99572736608742),
      },
      {
        title: "버거킹 동국대점",
        latlng: new kakao.maps.LatLng(37.558072939571794, 126.99835609928371),
      },
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "/image/main/shop/maker.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(100, 100);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <div id="map" style={{ width: "100%", height: props.mapHeight }}></div>
    </div>
  );
};

export default KakaoMap;
