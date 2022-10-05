/* global kakao */
import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useDispatch } from "react-redux";
import { changeMapSearchData } from "../../../store/Store";

const { kakao } = window;

const KakaoMap = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    clickThisPosition(position) {
      setKakaoMap(
        position["coords"]["latitude"],
        position["coords"]["longitude"]
      );
    },
  }));
  /**
   * 리덕스의 리듀서를 사용하기 위한 변수선언
   */
  let dispatch = useDispatch();

  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    setKakaoMap(37.57253458172258, 126.98050426601237);
  }, []);

  function setKakaoMap(x, y) {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(x, y), // 지도의 중심좌표 (버거킹 종로구청점)
        level: 5, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
    var markers = [];
    var markersAll = [];

    // map.setZoomable(false);
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    getMarker();
    // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "center_changed", getMarker);

    function getMarker() {
      // 지도의 중심좌표를 얻어옵니다
      var latlng = map.getCenter();

      searchAddrFromCoords(latlng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          let place =
            result[0]["region_1depth_name"] +
            " " +
            result[0]["region_2depth_name"] +
            " " +
            result[0]["region_3depth_name"] +
            " " +
            "버거킹";
          // 키워드로 장소를 검색합니다
          ps.keywordSearch(place, placesSearchCB);

          // 키워드 검색 완료 시 호출되는 콜백함수 입니다
          function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
              makeMarker(data);
              setMarkers(map);
              dispatch(changeMapSearchData(data));
            }
          }
        }
      });
    }

    // 배열에 추가된 마커들을 지도에 표시하는 함수입니다
    function setMarkers(map) {
      for (var i = 0; i < markersAll.length; i++) {
        let checkDupe = false;
        for (var j = 0; j < markers.length; j++) {
          if (markersAll[i]["Gb"] == markers[j]["Gb"]) {
            checkDupe = true;
            break;
          }
        }
        if (checkDupe == false) {
          markersAll[i].setMap(null);
        } else {
          markersAll[i].setMap(map);
        }
      }
    }

    function makeMarker(positions) {
      dispatch(changeMapSearchData(positions));
      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "/image/main/shop/maker.png";
      markers = [];
      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(100, 100);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          // map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(positions[i]["y"], positions[i]["x"]), // 마커를 표시할 위치
          title: positions[i]["place_name"], // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
        markers.push(marker);

        let dupeMarker = false;
        for (let i = 0; i < markersAll.length; i++) {
          if (markersAll[i]["Gb"] == marker["Gb"]) {
            dupeMarker = true;
            break;
          }
        }
        if (dupeMarker == false) {
          markersAll.push(marker);
        }

        // 마커에 클릭이벤트를 등록합니다
        let x = positions[i]["x"];
        let y = positions[i]["y"];
        kakao.maps.event.addListener(marker, "click", function () {
          // 이동할 위도 경도 위치를 생성합니다
          var moveLatLon = new kakao.maps.LatLng(y, x);

          // 지도 중심을 이동 시킵니다
          map.panTo(moveLatLon);
        });
      }
    }

    function searchAddrFromCoords(coords, callback) {
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();
  }

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
});

export default KakaoMap;
