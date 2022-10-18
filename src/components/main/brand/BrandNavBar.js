import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandNavBar = (props) => {
  const [currenPage, setCurrenPage] = useState("BRAND");

  useEffect(() => {
    setCurrenPage(props.brandNavBarData);
  });

  return (
    <React.Fragment>
      <div className={"mgt30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            <div className={"row mg0 min-w910 fontBM_MenuNavBar_big"}>
              <div className={"col-3"}>브랜드스토리</div>
              <div
                className={
                  "col-9 fontBM_MenuNavBar_small displayFlex justify-content-end textAlignRight"
                }
              >
                <div className={"mgt30"}>
                  <span
                    id="BRAND"
                    className={
                      currenPage == "BRAND"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("BRAND");
                      props.getChangedBrandNavBar("BRAND");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("BRAND").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("BRAND").style.cursor =
                        "default";
                    }}
                  >
                    BRAND
                  </span>
                </div>
                <div className={"mgl25 mgt30"}>
                  <span
                    id={"WHOPPER"}
                    className={
                      currenPage == "WHOPPER"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("WHOPPER");
                      props.getChangedBrandNavBar("WHOPPER");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("WHOPPER").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("WHOPPER").style.cursor =
                        "default";
                    }}
                  >
                    WHOPPER
                  </span>
                </div>
                <div className={"mgl25 mgt30"}>
                  <span
                    id={"COMM"}
                    className={
                      currenPage == "COMM"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("COMM");
                      props.getChangedBrandNavBar("COMM");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("COMM").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("COMM").style.cursor =
                        "default";
                    }}
                  >
                    COMM.
                  </span>
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

export default BrandNavBar;
