import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStateFooter, changeStateHeader } from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import KakaoMap from "../../components/main/shop/KakaoMap";
import { Nav } from "react-bootstrap";
import {
  faCircleChevronDown,
  faCircleChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = () => {
  /**
   * 리덕스의 리듀서를 사용하기 위한 변수선언
   */
  let dispatch = useDispatch();

  /**
   * 페이지별 가로네비게이션을 선언하기 위한 Hooks
   * key값이 보여지는값, value값이 클릭시 이동할 Link주소
   * value값이 false선언시 클릭불가능한 text로 나타난다.
   */
  const [widthNavBarData, setWidthNavBarData] = useState({
    HOME: "/home",
    매장찾기: false,
  });

  /**
   * ComponentDidmount와 같은 동작을 하는 Hooks
   * 리덕스의 changeState함수를 호출하여 인자로 true,false를 전달한다.
   * true인 경우 Header와 Footer가 존재, 반대의 경우 Main페이지만 나타난다.
   */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(changeStateHeader(true));
    dispatch(changeStateFooter(false));
    setFaCircleChevronValue("up");
    setValue(0);
  }, []);

  useEffect(() => {
    setMapHeight(
      window.innerHeight -
        document.getElementById("navDiv").clientHeight -
        document.getElementById("headerDiv").clientHeight -
        6
    );
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [mapHeight, setMapHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setMapHeight(
      window.innerHeight -
        document.getElementById("navDiv").clientHeight -
        document.getElementById("headerDiv").clientHeight -
        6
    );
  };

  const [value, setValue] = useState(1);

  function TabContent() {
    if (value === 0) {
      return (
        <div>
          {shopOptions()}
          <div>Tab 1 내용입니다.</div>
          {resultDiv()}
        </div>
      );
    } else if (value === 1) {
      return (
        <div>
          {shopOptions()}
          <div>Tab 2 내용입니다.</div>
          {resultDiv()}
        </div>
      );
    } else if (value === 2) {
      return (
        <div>
          {shopOptions()}
          <div>Tab 3 내용입니다.</div>
          {resultDiv()}
        </div>
      );
    }
  }

  const [faCircleChevronValue, setFaCircleChevronValue] = useState("down");

  function shopOptions() {
    return (
      <div className={"fontBM_MenuName"}>
        <div
          id={"optionsDiv"}
          className={"displayFlex"}
          onClick={() => {
            if (faCircleChevronValue == "down") {
              setFaCircleChevronValue("up");
            } else {
              setFaCircleChevronValue("down");
            }
          }}
          onMouseOver={() => {
            window.document.getElementById("optionsDiv").style.cursor =
              "pointer";
          }}
          onMouseLeave={() => {
            window.document.getElementById("optionsDiv").style.cursor =
              "default";
          }}
        >
          <span>매장옵션</span>
          <div style={{ marginTop: "2px", marginLeft: "5px" }}>
            {faCircleChevronValue == "up" ? (
              <FontAwesomeIcon icon={faCircleChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faCircleChevronDown} />
            )}
          </div>
        </div>
        {/**
         매장 옵션 팝업 창 - START
         */}
        <div
          className={faCircleChevronValue == "up" ? "displayNone" : ""}
          style={{
            position: "absolute",
            zIndex: "9999",
            background: "white",
            border: "1px solid #D5D5D5",
            width: "326px",
            height: "511px",
            marginLeft: "20px",
          }}
        >
          <div>
            {/*상단 타이틀 - START */}
            <div className={"background_white displayFlex"}>
              <div
                className={"displayFlex alignItemsCenter mgl20"}
                style={{ width: "80%" }}
              >
                <div className={"fontBM_btn_menuDetail mgt10 mgb10"}>
                  매장옵션
                </div>
              </div>
              <div
                id={"popUpClose"}
                className={
                  "displayFlex justify-content-center alignItemsCenter textAlignCenter"
                }
                style={{ width: "20%" }}
                onClick={() => {
                  setFaCircleChevronValue("up");
                }}
                onMouseOver={() => {
                  window.document.getElementById("popUpClose").style.cursor =
                    "pointer";
                }}
                onMouseLeave={() => {
                  window.document.getElementById("popUpClose").style.cursor =
                    "default";
                }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className={"ft40 mgt10 mgb10"}
                />
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #F2F2F2" }}></div>
            {/*상단 타이틀 - END */}
          </div>
        </div>
        {/**
         매장 옵션 팝업 창 - END
         */}
      </div>
    );
  }

  function resultDiv() {
    return <div> 결과값들 </div>;
  }

  return (
    <React.Fragment>
      <WidthNavBar WidthNavBarData={widthNavBarData} />
      {/*메인 화면 구성 - START*/}
      <div className={"row w-full"}>
        <div className={"col-9 mg0 gx-3"}>
          <KakaoMap mapHeight={mapHeight} />
        </div>
        <div className={"col-3 gx-0"} style={{ paddingLeft: "7px" }}>
          <Nav
            fill
            justify
            className="justify-content-center fontBM_MenuName"
            variant="tabs"
            defaultActiveKey="link-0"
          >
            <Nav.Item>
              <Nav.Link
                eventKey="link-0"
                onClick={() => {
                  setValue(0);
                }}
              >
                <span
                  className={
                    value == 0 ? "color_MenuNavBarActivate" : "colorBlack"
                  }
                >
                  가까운매장
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  setValue(1);
                }}
              >
                <span
                  className={
                    value == 1 ? "color_MenuNavBarActivate" : "colorBlack"
                  }
                >
                  매장명검색
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => {
                  setValue(2);
                }}
              >
                <span
                  className={
                    value == 2 ? "color_MenuNavBarActivate" : "colorBlack"
                  }
                >
                  지역검색
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent />
        </div>
      </div>
      {/*메인 화면 구성 - END*/}
    </React.Fragment>
  );
};

export default Shop;
