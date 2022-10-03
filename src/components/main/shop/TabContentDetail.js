import React, { useEffect, useState } from "react";

const TabContentDetail = (props) => {
  const [resultData, setResultData] = useState([]);
  const [divCnt, setDivCnt] = useState(0);
  useEffect(() => {
    setResultData([
      {
        name: "충무로역점",
        address: "서울특별시 중구 퇴계로 216",
        tel: "02-2285-0337",
        icon: [
          "/image/main/shop/delivery.png",
          "/image/main/shop/kingOrder.png",
        ],
      },
      {
        name: "종로점",
        address: "서울특별시 종로구 종로 94",
        tel: "02-2285-4838",
        icon: [
          "/image/main/shop/delivery.png",
          "/image/main/shop/kingOrder.png",
        ],
      },
      {
        name: "동국대점",
        address: "서울특별시 중구 필동로1길 30",
        tel: "02-2277-3006",
        icon: ["/image/main/shop/kingOrder.png"],
      },
      {
        name: "종로구청점",
        address: "서울특별시 종로구 삼봉로57",
        tel: "02-722-0238",
        icon: ["/image/main/shop/kingOrder.png"],
      },
      {
        name: "시청역점",
        address: "서울특별시 중구 서소문로 136",
        tel: "02-777-0332",
        icon: ["/image/main/shop/kingOrder.png"],
      },
      {
        name: "회현역점",
        address: "서울특별시 중구 퇴계로 52",
        tel: "070-7462-6807",
        icon: ["/image/main/shop/kingOrder.png"],
      },
    ]);
  }, []);

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
            className={"col-10 background_white"}
            style={{ width: "379px", height: "168px" }}
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
  );
};

export default TabContentDetail;
