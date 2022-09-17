import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={"row background_footer w-full"}>
        <div className={"col-2"}></div>
        <div className={"col-8"}>
          <div className={"mg0 min-w910 displayFlex fontBM_footer_small"}>
            <div style={{ width: "20%" }}>
              <ul className={"listStyleNone mgt30"}>
                <li className={"fontBM_footer_big mgb20"}>메뉴</li>
                <li className={"mgb5"}>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone color_footer"}
                  >
                    스페셜&할인팩
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone color_footer"}
                  >
                    신제품(NEW)
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone color_footer"}
                  >
                    프리미엄
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone color_footer"}
                  >
                    와퍼&주니어
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone color_footer"}
                  >
                    치킨&슈림프버거
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone color_footer"}
                  >
                    올데이킹
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone color_footer"}
                  >
                    사이드
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone color_footer"}
                  >
                    음료&디저트
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ width: "20%" }}>
              <ul className={"listStyleNone mgt30"}>
                <li className={"fontBM_footer_big mgb20"}>매장</li>
                <li className={"mgb5"}>
                  <Link
                    to="/Shop"
                    className={"textDecorationNone color_footer"}
                  >
                    매장찾기
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ width: "20%" }}>
              <ul className={"listStyleNone mgt30"}>
                <li className={"fontBM_footer_big mgb20"}>이벤트</li>
                <li className={"mgb5"}>
                  <Link
                    to="/Event"
                    className={"textDecorationNone color_footer"}
                  >
                    이벤트
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ width: "20%" }}>
              <ul className={"listStyleNone mgt30"}>
                <li className={"fontBM_footer_big mgb20"}>브랜드 스토리</li>
                <li className={"mgb5"}>
                  <Link
                    to="/BRAND"
                    className={"textDecorationNone color_footer"}
                  >
                    BRAND
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/BRAND"
                    className={"textDecorationNone color_footer"}
                  >
                    WHOPPER
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/BRAND"
                    className={"textDecorationNone color_footer"}
                  >
                    COMM.
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ width: "20%" }}>
              <ul className={"listStyleNone mgt30"}>
                <li className={"fontBM_footer_big mgb20"}>고객센터</li>
                <li className={"mgb5"}>
                  <Link
                    to="/Center"
                    className={"textDecorationNone color_footer"}
                  >
                    공지사항
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Center"
                    className={"textDecorationNone color_footer"}
                  >
                    버거킹앱이용안내
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Center"
                    className={"textDecorationNone color_footer"}
                  >
                    FAQ
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Center"
                    className={"textDecorationNone color_footer"}
                  >
                    문의
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Center"
                    className={"textDecorationNone color_footer"}
                  >
                    가맹점모집
                  </Link>
                </li>
                <li className={"mgb5"}>
                  <Link
                    to="/Center"
                    className={"textDecorationNone color_footer"}
                  >
                    인재채용
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ borderBottom: "solid 2px white" }}></div>
        </div>
        <div className={"col-2"}></div>
      </div>

      <div className={"row background_footer w-full"}>
        <div className={"col-2"}></div>
        <div className={"col-8 fontBM_footer_small"}>
          <div className={"fontBM_footer_big"}>BURGER KING</div>
          <div style={{ float: "right" }}>d</div>
        </div>
        <div className={"col-2"}></div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
