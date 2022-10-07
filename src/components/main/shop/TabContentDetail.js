import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ShopDetailModal from "./ShopDetailModal";
import NutritionalContentsModal from "../menu/NutritionalContentsModal";

const TabContentDetail = (props) => {
  const [resultData, setResultData] = useState([]);
  const [divCnt, setDivCnt] = useState(0);
  const ShopDetailModalRef = useRef({});
  /**
   * 리덕스에서 mapSearchData 값을 가져오기 위한 변수선언
   */
  let reduxMapSearchData = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    let result = [];
    for (let i = 0; i < reduxMapSearchData.mapSearchData.length; i++) {
      result.push({
        name: reduxMapSearchData.mapSearchData[i]["place_name"],
        address: reduxMapSearchData.mapSearchData[i]["road_address_name"],
        tel: reduxMapSearchData.mapSearchData[i]["phone"],
        icon: [
          //  버거킹 db를 알 수가 없어 하드코딩 처리
          "/image/main/shop/delivery.png",
          "/image/main/shop/kingOrder.png",
        ],
      });
    }
    setResultData(result);
  }, [reduxMapSearchData.mapSearchData]);

  useEffect(() => {
    setDivCnt(resultData.length);
  }, [resultData]);

  function makeResult() {
    let result = [];
    for (let i = 0; i < Object.keys(resultData).length; i++) {
      result.push(
        <div
          className={
            "mgt30 displayFlex justify-content-center alignItemsCenter"
          }
        >
          <div
            id={"shopDetailWhiteBox" + i}
            className={"col-10 background_white"}
            style={{ width: "379px", height: "168px" }}
            onMouseOver={() => {
              window.document.getElementById(
                "shopDetailWhiteBox" + i
              ).style.cursor = "pointer";
            }}
            onMouseLeave={() => {
              window.document.getElementById(
                "shopDetailWhiteBox" + i
              ).style.cursor = "default";
            }}
            onClick={() => {
              ShopDetailModalRef.current.onOpen(resultData[i]);
            }}
          >
            <div className={"mgl20"}>
              <p className={"mgt10 fontBM_btn_menuDetail"}>
                {resultData[i]["name"]}
              </p>
              <div>
                <div>{resultData[i]["address"]}</div>
                <div>{resultData[i]["tel"]}</div>
              </div>
              {makeIcon(resultData[i]["icon"])}
            </div>
          </div>
        </div>
      );
    }

    return result;
  }

  function makeIcon(data) {
    let result = [];
    data.map((item) => {
      result.push(
        <span>
          <img src={item} /> <span></span>
        </span>
      );
    });
    return result;
  }

  return (
    <React.Fragment>
      <ShopDetailModal ref={ShopDetailModalRef} />
      <div
        className={"row background_F5EBDC overFlowYScroll"}
        style={{ height: props.mapHeight - props.shopNavHeight - 124 }}
      >
        <div
          className={
            "col-12 pt10 mgb10 fontBM_MenuNavBar_small displayFlex justify-content-center "
          }
        >
          <div className={"row"}>
            <div className={"col-12"}>
              <span className={"colorRed"}>{divCnt}개</span>의 검색결과가
              있습니다.
              {makeResult()}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabContentDetail;
