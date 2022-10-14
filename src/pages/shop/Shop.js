import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStateFooter, changeStateHeader } from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import KakaoMap from "../../components/main/shop/KakaoMap";
import { Nav } from "react-bootstrap";
import {
  faCaretDown,
  faCheckSquare,
  faCircleChevronDown,
  faCircleChevronUp,
  faLocationCrosshairs,
  faRefresh,
  faSearch,
  faSquareCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import TabContentDetail from "../../components/main/shop/TabContentDetail";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios, { Axios } from "axios";
import SiGunGu from "../../components/main/shop/SiGunGu";

const Shop = () => {
  const kakaomap = useRef();
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
    setAll(true);
    setDelivery(false);
    setKingOrder(false);
    setTwentyFourHours(false);
    setMorningMenu(false);
    setParking(false);
    setDrive(false);
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
    setShopNavHeight(document.getElementById("shopNav").clientHeight);
  };
  const [shopNavHeight, setShopNavHeight] = useState(46);

  const [value, setValue] = useState(0);

  const TabContent = useCallback(() => {
    if (value === 0) {
      return (
        <>
          <div style={{ borderTop: "1px solid #F2F2F2" }}></div>
          <button
            className={"w-full fontBM_MenuName background_white"}
            style={{ height: "60px", border: "1px solid #D5D5D5" }}
            onClick={() => {
              navigator.geolocation.getCurrentPosition((position) => {
                kakaomap.current.clickThisPosition(position);
              });
            }}
          >
            <div
              className={
                "displayFlex justify-content-center alignItemsCenter textAlignCenter"
              }
            >
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <div style={{ marginTop: "4px" }}>&nbsp;현 위치로 매장검색</div>
            </div>
          </button>
          <div className={"mgt25"}></div>
        </>
      );
    } else if (value === 1) {
      return (
        <>
          <div style={{ borderTop: "1px solid #F2F2F2" }}></div>
          <div className={"displayFlex justify-content-center textAlignCenter"}>
            <input
              id={"searchShop"}
              className={"w-full inputCustom"}
              style={{ height: "60px" }}
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  if (
                    document.getElementById("searchShop").value == null ||
                    document.getElementById("searchShop").value == "" ||
                    document.getElementById("searchShop").value == undefined
                  ) {
                    Swal.fire({
                      title: "검색 조건을 입력 해 주세요.",
                      icon: "warning",
                      confirmButtonText: "확인",
                    });
                  } else {
                    kakaomap.current.searchShopName(
                      document.getElementById("searchShop").value
                    );
                  }
                }
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: "50px" }}
                onClick={() => {
                  if (
                    document.getElementById("searchShop").value == null ||
                    document.getElementById("searchShop").value == "" ||
                    document.getElementById("searchShop").value == undefined
                  ) {
                    Swal.fire({
                      title: "검색 조건을 입력 해 주세요.",
                      icon: "warning",
                      confirmButtonText: "확인",
                    });
                  } else {
                    kakaomap.current.searchShopName(
                      document.getElementById("searchShop").value
                    );
                  }
                }}
              />
            </div>
          </div>
          <div className={"mgt25"}></div>
        </>
      );
    } else if (value === 2) {
      return (
        <>
          <div style={{ borderTop: "1px solid #F2F2F2" }}></div>
          <SiGunGu changeSiGunGu={changeSiGunGu} />
          <div className={"mgt25"}></div>
        </>
      );
    }
  }, [value]);

  const [faCircleChevronValue, setFaCircleChevronValue] = useState("up");
  const [all, setAll] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [kingOrder, setKingOrder] = useState(false);
  const [twentyFourHours, setTwentyFourHours] = useState(false);
  const [morningMenu, setMorningMenu] = useState(false);
  const [parking, setParking] = useState(false);
  const [drive, setDrive] = useState(false);

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
            {/*구분 border*/}
            <div style={{ borderBottom: "1px solid #F2F2F2" }}></div>
            {/*체크박스 영역 - START*/}
            <div>
              <div
                className={"row gx-0 alignItemsCenter mgt15"}
                onClick={() => {
                  all == true ? setAll(false) : setAll(true);
                  setDelivery(false);
                  setKingOrder(false);
                  setTwentyFourHours(false);
                  setMorningMenu(false);
                  setParking(false);
                  setDrive(false);
                }}
              >
                <div className={"col-3 textAlignCenter"}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className={all == true ? "colorRed ft40" : "colorGray ft40"}
                  />
                </div>
                <div className={"col-9 alignItemsCenter"}>전체</div>
              </div>
              <div
                className={"row gx-0 alignItemsCenter mgt15"}
                onClick={() => {
                  delivery == true ? setDelivery(false) : setDelivery(true);
                  setAll(false);
                }}
              >
                <div className={"col-3 textAlignCenter"}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className={
                      delivery == true ? "colorRed ft40" : "colorGray ft40"
                    }
                  />
                </div>
                <div className={"col-9 alignItemsCenter"}>
                  <img src="/image/main/shop/delivery.png" />
                  &nbsp;&nbsp;딜리버리
                </div>
              </div>
              <div
                className={"row gx-0 alignItemsCenter mgt15"}
                onClick={() => {
                  kingOrder == true ? setKingOrder(false) : setKingOrder(true);
                  setAll(false);
                }}
              >
                <div className={"col-3 textAlignCenter"}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className={
                      kingOrder == true ? "colorRed ft40" : "colorGray ft40"
                    }
                  />
                </div>
                <div className={"col-9 alignItemsCenter"}>
                  <img src="/image/main/shop/kingOrder.png" />
                  &nbsp;&nbsp;킹오더
                </div>
              </div>
              <div
                className={"row gx-0 alignItemsCenter mgt15"}
                onClick={() => {
                  twentyFourHours == true
                    ? setTwentyFourHours(false)
                    : setTwentyFourHours(true);
                  setAll(false);
                }}
              >
                <div className={"col-3 textAlignCenter"}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className={
                      twentyFourHours == true
                        ? "colorRed ft40"
                        : "colorGray ft40"
                    }
                  />
                </div>
                <div className={"col-9 alignItemsCenter"}>
                  <img src="/image/main/shop/24Hours.png" />
                  &nbsp;&nbsp;24시간매장
                </div>
              </div>
              <div
                className={"row gx-0 alignItemsCenter mgt15"}
                onClick={() => {
                  morningMenu == true
                    ? setMorningMenu(false)
                    : setMorningMenu(true);
                  setAll(false);
                }}
              >
                <div className={"col-3 textAlignCenter"}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className={
                      morningMenu == true ? "colorRed ft40" : "colorGray ft40"
                    }
                  />
                </div>
                <div className={"col-9 alignItemsCenter"}>
                  <img src="/image/main/shop/morningMenu.png" />
                  &nbsp;&nbsp;아침메뉴
                </div>
              </div>
              <div
                className={"row gx-0 alignItemsCenter mgt15"}
                onClick={() => {
                  parking == true ? setParking(false) : setParking(true);
                  setAll(false);
                }}
              >
                <div className={"col-3 textAlignCenter"}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className={
                      parking == true ? "colorRed ft40" : "colorGray ft40"
                    }
                  />
                </div>
                <div className={"col-9 alignItemsCenter"}>
                  <img src="/image/main/shop/parking.png" />
                  &nbsp;&nbsp;주차가능
                </div>
              </div>
              <div
                className={"row gx-0 alignItemsCenter mgt15"}
                style={{ paddingBottom: "10px" }}
                onClick={() => {
                  drive == true ? setDrive(false) : setDrive(true);
                  setAll(false);
                }}
              >
                <div className={"col-3 textAlignCenter"}>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className={
                      drive == true ? "colorRed ft40" : "colorGray ft40"
                    }
                  />
                </div>
                <div className={"col-9 alignItemsCenter"}>
                  <img src="/image/main/shop/drive.png" />
                  &nbsp;&nbsp;드라이브스루
                </div>
              </div>
            </div>
            {/*체크박스 영역 - END*/}
            <div
              id={"applyBtn"}
              className={
                "displayFlex justify-content-center textAlignCenter alignItemsCenter text-white"
              }
              style={{ width: "324px", height: "54px", background: "red" }}
              onMouseOver={() => {
                window.document.getElementById("applyBtn").style.cursor =
                  "pointer";
              }}
              onMouseLeave={() => {
                window.document.getElementById("applyBtn").style.cursor =
                  "default";
              }}
              onClick={() => {
                //적용버튼 실제 구현X
                setFaCircleChevronValue("up");
              }}
            >
              <span>적용</span>
            </div>
            {/*상단 타이틀 - END */}
          </div>
        </div>
        {/**
         매장 옵션 팝업 창 - END
         */}
      </div>
    );
  }

  function changeSiGunGu(data) {
    kakaomap.current.searchShopName(data);
  }

  return (
    <React.Fragment>
      <WidthNavBar WidthNavBarData={widthNavBarData} />
      {/*메인 화면 구성 - START*/}
      <div className={"row w-full"}>
        <div className={"col-9 mg0 gx-3"}>
          <KakaoMap ref={kakaomap} mapHeight={mapHeight} />
        </div>
        <div className={"col-3 gx-0"} style={{ paddingLeft: "7px" }}>
          <Nav
            id={"shopNav"}
            fill
            justify
            className="justify-content-center fontBM_MenuName"
            variant="tabs"
            defaultActiveKey="link-0"
            style={{ border: "none" }}
          >
            <Nav.Item>
              <Nav.Link
                id={"nav0"}
                eventKey="link-0"
                style={{ border: "none" }}
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
                id={"nav1"}
                eventKey="link-1"
                style={{ border: "none" }}
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
                id={"nav2"}
                eventKey="link-2"
                style={{ border: "none" }}
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

          <div>
            <div style={{ height: "124px" }}>
              <div className={"row"}>
                <div className={"col-6"}>{shopOptions()}</div>
                <div className={"col-6 textAlignRight"}>
                  <FontAwesomeIcon
                    id={"refreshBtn"}
                    style={{ fontSize: "30px", marginTop: "2px" }}
                    icon={faRefresh}
                    onMouseOver={() => {
                      window.document.getElementById(
                        "refreshBtn"
                      ).style.cursor = "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById(
                        "refreshBtn"
                      ).style.cursor = "default";
                    }}
                    onClick={() => {
                      window.document.getElementById("nav0").click();
                      setAll(true);
                      setDelivery(false);
                      setKingOrder(false);
                      setTwentyFourHours(false);
                      setMorningMenu(false);
                      setParking(false);
                      setDrive(false);
                      kakaomap.current.clickRefresh();
                    }}
                  />
                </div>
              </div>
              <TabContent />
            </div>
          </div>
          <TabContentDetail
            mapHeight={mapHeight}
            shopNavHeight={shopNavHeight}
          />
        </div>
      </div>
      {/*메인 화면 구성 - END*/}
    </React.Fragment>
  );
};

export default Shop;
