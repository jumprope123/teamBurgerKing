import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [extendsDiv, setExtendsDiv] = useState(false);

  const ExtendsDiv = () => {
    setExtendsDiv(true);
  };

  const CloseDiv = () => {
    setExtendsDiv(false);
  };

  return (
    <React.Fragment>
      <div className={"row background_white w-full gx-0"}>
        <div className={"col-2"}></div>
        <div className={"col-8"}>
          <div className={"row mg0 min-w910"}>
            <div className={"col-2"}>
              <img
                src="/image/header/logo.png"
                style={{ width: "90px", height: "100px" }}
              />
            </div>
            <div
              className={"col-2 pt40 min-w150"}
              onMouseOver={ExtendsDiv}
              onMouseLeave={CloseDiv}
            >
              <span className={"fontBM_header"}>메뉴소개&nbsp;</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div
              className={"col-2 pt40 min-w150"}
              onMouseOver={ExtendsDiv}
              onMouseLeave={CloseDiv}
            >
              <span className={"fontBM_header"}>매장소개&nbsp;</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div
              className={"col-2 pt40 min-w150"}
              onMouseOver={ExtendsDiv}
              onMouseLeave={CloseDiv}
            >
              <span className={"fontBM_header"}>이벤트&nbsp;</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div
              className={"col-2 pt40 min-w150"}
              onMouseOver={ExtendsDiv}
              onMouseLeave={CloseDiv}
            >
              <span className={"fontBM_header"}>브랜드스토리&nbsp;</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div className={"col-2"}>
              <img
                src="/image/header/deliveryOrder.png"
                style={{
                  width: "185px",
                  height: "56px",
                  marginTop: "30px",
                  marginLeft: "15px",
                }}
              />
            </div>
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
      <div
        className={"row background_white w-full fontBM_NavBar gx-0"}
        hidden={!extendsDiv}
        style={{ position: "absolute", zIndex: "9" }}
        onMouseLeave={CloseDiv}
      >
        <div className={"col-2"}></div>
        <div className={"col-8"}>
          <div className={"row mg0 min-w910"}>
            <div className={"col-2 min-w150"}></div>
            <div className={"col-2 min-w150"} onMouseOver={ExtendsDiv}>
              <ul className={"listStyleNone"}>
                <li>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    스페셜&할인팩
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    신제품(NEW)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    프리미엄
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    와퍼&주니어
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    치킨&슈림프버거
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    올데이킹
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    사이드
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Menu"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    음료&디저트
                  </Link>
                </li>
              </ul>
            </div>
            <div className={"col-2 min-w150"} onMouseOver={ExtendsDiv}>
              <ul className={"listStyleNone"}>
                <li>
                  <Link
                    to="/Shop"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    매장찾기
                  </Link>
                </li>
              </ul>
            </div>
            <div className={"col-2 min-w150"} onMouseOver={ExtendsDiv}>
              <ul className={"listStyleNone"}>
                <li>
                  <Link
                    to="/Event"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    이벤트
                  </Link>
                </li>
              </ul>
            </div>
            <div className={"col-2 min-w150"} onMouseOver={ExtendsDiv}>
              <ul className={"listStyleNone"}>
                <li>
                  <Link
                    to="/Brand"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    BRAND
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Brand"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    WHOPPER
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Brand"
                    className={"textDecorationNone colorBlack"}
                    onClick={CloseDiv}
                  >
                    COMM.
                  </Link>
                </li>
              </ul>
            </div>
            <div className={"col-2"}></div>
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
    </React.Fragment>
  );
};

export default Header;
