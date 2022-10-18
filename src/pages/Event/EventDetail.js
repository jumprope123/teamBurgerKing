import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { changeStateFooter, changeStateHeader } from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import EventNavBar from "../../components/main/Event/EventNavBar";
import EventNavBarOnlyTitle from "../../components/main/Event/EventNavBarOnlyTitle";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const EventDetail = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(location.state.value == 0 ? "이벤트" : "신규매장");
  });
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
    HOME: "/Home",
    이벤트: "/Event",
    상세: false,
  });

  /**
   * ComponentDidmount와 같은 동작을 하는 Hooks
   * 리덕스의 changeState함수를 호출하여 인자로 true,false를 전달한다.
   * true인 경우 Header와 Footer가 존재, 반대의 경우 Main페이지만 나타난다.
   */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(changeStateHeader(true));
    dispatch(changeStateFooter(true));
  }, []);

  return (
    <React.Fragment>
      <WidthNavBar WidthNavBarData={widthNavBarData} />

      {/*메인 화면 구성 - START*/}
      <div className={"mgt30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            {/*이벤트/신규매장 - START*/}
            <div className={"row mg0 min-w910 fontBM_MenuNavBar_big"}>
              <div className={"col-3"}>{title}</div>
              <div className={"col-9"}></div>
            </div>
            {/*이벤트/신규매장 - END*/}
            {/* 메인페이지 상단 타이틀 및 기간 - START*/}
            <div
              className={"row mgt25 alignItemsCenter"}
              style={{
                borderTop: "2px solid black",
                background: "#FAFAFA",
                height: "135px",
                borderBottom: "2px solid gray",
              }}
            >
              <p className={"fontBM_Event_noBold mgt15"}>
                이벤트 상세 타이틀 부분
              </p>
              <p
                className={"mgb30 fontBM_MenuDetailSmall"}
                style={{ color: "gray" }}
              >
                {location.state.item.date}
              </p>
            </div>
            {/* 메인페이지 상단 타이틀 및 기간 - END */}
            {/* 메인 사진부분 - START */}
            <div className={"row mg0 min-w910"}>
              <div className={"col-12 displayFlex justify-content-center"}>
                <img
                  className={"mgt30 mgb30"}
                  src={location.state.item.url}
                  style={{
                    width: "auto",
                  }}
                />
              </div>
              <div
                className={
                  "col-12 displayFlex justify-content-center mgb30 fontBM_NavBar"
                }
              >
                메인 내용 입력 부분 블라블라
              </div>
            </div>
            {/* 메인 사진부분 - END */}
            {/* 경계선 - START*/}
            <div
              className={"mgb30"}
              style={{ borderTop: "2px solid black" }}
            ></div>
            {/* 경계선 - END*/}
            {/* 목록보기 버튼 - START */}
            <div className={"row w-full min-w910 gx-0 mgb30"}>
              <div className={"col-5"}></div>
              <div className={"col-2"}>
                <Link to="/Event">
                  <button
                    className={
                      "fontBM_Event_noBold colorWhite background_brown borderRadius15"
                    }
                    style={{ width: "100%", height: "70px" }}
                  >
                    <div className={"justify-content-center displayFlex"}>
                      <span>목록보기</span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            {/* 목록보기 버튼 - END */}
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
      {/*메인 화면 구성 - END*/}
    </React.Fragment>
  );
};

export default EventDetail;
