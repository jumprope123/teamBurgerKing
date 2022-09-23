import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuNavBar = () => {
  const [url, setUrl] = useState(window.location.href);
  const [currenPage, setCurrenPage] = useState("");

  useState(() => {
    setUrl(window.location.href);
    let tempUrl = url.split("/")[url.split("/").length - 1];
    setCurrenPage(tempUrl);
  }, []);

  return (
    <React.Fragment>
      <div className={"mgt30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            <div className={"row mg0 min-w910 fontBM_MenuNavBar_big"}>
              <div className={"col-3"}>메뉴소개</div>
              <div className={"col-9 fontBM_MenuNavBar_small displayFlex"}>
                <div className={"mgt30"}>
                  <Link
                    to="/SpecialDiscount"
                    className={
                      currenPage == "SpecialDiscount"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                  >
                    스페셜&할인팩
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to="/NewProducts"
                    className={
                      currenPage == "NewProducts"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                  >
                    신제품(NEW)
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to="/Premium"
                    className={
                      currenPage == "Premium"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                  >
                    프리미엄
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to="/WhopperJunior"
                    className={
                      currenPage == "WhopperJunior"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                  >
                    와퍼&주니어
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to="/ChickenShrimp"
                    className={
                      currenPage == "ChickenShrimp"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                  >
                    치킨&슈림프버거
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to="/AllDayKing"
                    className={
                      currenPage == "AllDayKing"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                  >
                    올데이킹
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to="/SideMenu"
                    className={
                      currenPage == "SideMenu"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                  >
                    사이드
                  </Link>
                </div>
                <div className={"mgl25 mgt30"}>
                  <Link
                    to="/BeverageDessert"
                    className={
                      currenPage == "BeverageDessert"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                  >
                    음료&디저트
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
    </React.Fragment>
  );
};

export default MenuNavBar;
