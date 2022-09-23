import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { changeState } from "../../../store/Store";
import WidthNavBar from "../../../components/main/menu/WidthNavBar";
import { Link } from "react-router-dom";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuCarousel from "../../../components/main/menu/MenuCarousel";
import NutritionalContentsModal from "../../../components/main/menu/NutritionalContentsModal";

const ShowDetail = () => {
  const NutritionalContentsModalRef = useRef({});

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
    메뉴소개: "/SpecialDiscount",
    "스페셜&할인팩": "/SpecialDiscount",
    햄버거상세: false,
  });

  /**
   * ComponentDidmount와 같은 동작을 하는 Hooks
   * 리덕스의 changeState함수를 호출하여 인자로 true,false를 전달한다.
   * true인 경우 Header와 Footer가 존재, 반대의 경우 Main페이지만 나타난다.
   */
  useEffect(() => {
    dispatch(changeState(true));
  }, []);

  return (
    <React.Fragment>
      <NutritionalContentsModal ref={NutritionalContentsModalRef} />
      <WidthNavBar WidthNavBarData={widthNavBarData} />
      {/* 메인 이미지와 글자 크게 보여주는 란 - START*/}
      <div
        className={
          "row background_footer w-full min-w910 gx-0 height400 alignItemsCenter"
        }
      >
        <div className={"col-2"}></div>
        <div className={"col-8"}>
          <div className={"row alignItemsCenter"}>
            <div className={"col-6 text-white fontBM_MenuDetailBig"}>
              골든치즈렐라 팩1
            </div>
            <div className={"col-6"}>
              <img
                src={
                  "/image/main/menu/specialDiscount/detail_big_goldencheeselella.png"
                }
                style={{ width: "440px", height: "330px" }}
              />
            </div>
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
      {/* 메인 이미지와 글자 크게 보여주는 란 - END*/}
      {/*  메뉴목록으로 돌아가기, 원산지,영양성분,알레르기 유발성분 - START*/}
      <div
        className={
          "row background_menuDetail_under w-full min-w910 gx-0 height88 alignItemsCenter"
        }
      >
        <div className={"col-2"}></div>
        <div className={"col-8"}>
          <div className={"row alignItemsCenter"}>
            <div className={"col-6"}>
              <Link
                to="/SpecialDiscount"
                className={"textDecorationNone colorWhite fontBM_menuDetail"}
              >
                <span>{"<"}&nbsp;&nbsp;메뉴 목록으로 돌아가기</span>
              </Link>
            </div>
            <div className={"col-6"}>
              <button
                className={"mgl45 background_white"}
                id={"btn_background_menuDetail_under"}
                name={"btn_background_menuDetail_under"}
                style={{ borderRadius: "12px" }}
                onClick={() => {
                  NutritionalContentsModalRef.current.onOpen();
                }}
              >
                <div className={"fontBM_btn_menuDetail displayFlex"}>
                  <div>원산지, 영양성분, 알레르기 유발성분&nbsp;</div>
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    style={{ marginTop: "4px" }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
      {/*  메뉴목록으로 돌아가기, 원산지,영양성분,알레르기 유발성분 - END*/}
      {/*  메뉴 디테일 메인 페이지*/}
      <div className={"row w-full min-w910 gx-0"}>
        <div className={"col-12 textAlignCenter mgt100 mgb100"}>
          <img
            src={
              "/image/main/menu/specialDiscount/detail_big_goldencheeselella.png"
            }
            style={{ width: "258px", height: "194px" }}
          />
          <p className={"fontBM_detail_menuOne_big mgt30"}>골든치즈렐라 팩1</p>
          <span className={"fontBM_menuDetail"}>
            골든치즈렐라와퍼+골든치즈렐라치킨버거+크리미모짜볼5조각+너겟킹4조각+콜라R2
          </span>
        </div>
      </div>
      <MenuCarousel />
    </React.Fragment>
  );
};

export default ShowDetail;
