import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  changeState,
  changeStateFooter,
  changeStateHeader,
} from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import { Link } from "react-router-dom";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuCarousel from "../../components/main/menu/MenuCarousel";
import NutritionalContentsModal from "../../components/main/menu/NutritionalContentsModal";

const ShowDetail = () => {
  const NutritionalContentsModalRef = useRef({});

  /**
   * 리덕스의 리듀서를 사용하기 위한 변수선언
   */
  let dispatch = useDispatch();

  /**
   * 서비스없이 UI만 있을때 showDetail의 데이터를 보여주기 위한 리덕스 state
   */
  let reduxShowDetailData = useSelector((state) => {
    return state;
  });

  /**
   * 검은색 네비게이션 바를 만들기 위한 리덕스 state
   */
  let reduxWidthNavBarData = useSelector((state) => {
    return state;
  });

  const [ShowDetailData, setShowDetailData] = useState(
    reduxShowDetailData.showDetailData
  );

  /**
   * 스크롤 맨 처음으로 이동 + 리덕스 변경시 내용 변경기능 추가
   */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setShowDetailData(reduxShowDetailData.showDetailData);
  }, [reduxShowDetailData]);

  /**
   * 페이지별 가로네비게이션을 선언하기 위한 Hooks
   * key값이 보여지는값, value값이 클릭시 이동할 Link주소
   * value값이 false선언시 클릭불가능한 text로 나타난다.
   */
  const [widthNavBarData, setWidthNavBarData] = useState(
    reduxWidthNavBarData.widthNavBarData
  );
  useEffect(() => {
    setWidthNavBarData(reduxWidthNavBarData.widthNavBarData);
  }, [widthNavBarData]);

  /**
   * ComponentDidmount와 같은 동작을 하는 Hooks
   * 리덕스의 changeState함수를 호출하여 인자로 true,false를 전달한다.
   * true인 경우 Header와 Footer가 존재, 반대의 경우 Main페이지만 나타난다.
   */
  useEffect(() => {
    dispatch(changeStateHeader(true));
    dispatch(changeStateFooter(true));
    setShowDetailData(reduxShowDetailData.showDetailData);
    makeDetailDiv();
  }, []);

  /**
   * 리덕스로부터 보여줄 데이터값을 받아와서 그대로 보여주는 함수
   */
  function makeDetailDiv() {
    let repeatCnt = reduxShowDetailData.showDetailData.detail.length;
    let repeatData = reduxShowDetailData.showDetailData.detail;
    let data = [];
    switch (repeatCnt) {
      case 1:
        repeatData.map((item) => {
          data.push(
            <div className={"col-12"}>
              <img
                src={item.imageURL}
                style={{ width: "258px", height: "194px" }}
              />
              <p className={"fontBM_detail_menuOne_big mgt30"}>{item.title}</p>
              <span className={"fontBM_menuDetail"}>{item.description}</span>
            </div>
          );
        });
        break;
      case 2:
        data.push(<div className={"col-2"}></div>);
        repeatData.map((item) => {
          data.push(
            <div className={"col-4"}>
              <img
                src={item.imageURL}
                style={{ width: "258px", height: "194px" }}
              />
              <p className={"fontBM_detail_menuOne_big mgt30"}>{item.title}</p>
              <span className={"fontBM_menuDetail"}>{item.description}</span>
            </div>
          );
        });
        data.push(<div className={"col-2"}></div>);
        break;
      case 3:
        repeatData.map((item) => {
          data.push(
            <div className={"col-4"}>
              <img
                src={item.imageURL}
                style={{ width: "258px", height: "194px" }}
              />
              <p className={"fontBM_detail_menuOne_big mgt30"}>{item.title}</p>
              <span className={"fontBM_menuDetail"}>{item.description}</span>
            </div>
          );
        });
        break;
      default:
        repeatData.map((item) => {
          data.push(
            <div className={"col-3"}>
              <img
                src={item.imageURL}
                style={{ width: "258px", height: "194px" }}
              />
              <p className={"fontBM_detail_menuOne_big mgt30"}>{item.title}</p>
              <span className={"fontBM_menuDetail"}>{item.description}</span>
            </div>
          );
        });
        break;
    }
    return data;
  }

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
            <div
              className={"col-6 text-white fontBM_MenuDetailBig"}
              style={{ lineHeight: "100%" }}
            >
              {ShowDetailData.title}
              <p
                className={"fontBM_MenuDetailSmall"}
                style={{ lineHeight: "120%" }}
              >
                {ShowDetailData.description}
              </p>
            </div>
            <div className={"col-6"}>
              <img
                src={ShowDetailData.imageURL}
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
                to={ShowDetailData.returnLink}
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
        <div className={"col-2 textAlignCenter mgt100 mgb100"}></div>
        <div className={"col-8 textAlignCenter mgt100 mgb100"}>
          <div className={"row"}>{makeDetailDiv()}</div>
        </div>
      </div>
      <div className={"col-2 textAlignCenter mgt100 mgb100"}></div>
      <MenuCarousel />
    </React.Fragment>
  );
};

export default ShowDetail;
