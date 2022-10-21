import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CommNavBar = (props) => {
  const [currenPage, setCurrenPage] = useState(props.CommNavBarData);

  return (
    <React.Fragment>
      <div className={"mgt30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-12"}>
            <div className={"row mg0 min-w910 fontBM_MenuNavBar_big"}>
              <div
                className={
                  "col-12 fontBM_MenuNavBar_small displayFlex justify-content-end textAlignRight"
                }
              >
                <div className={"mgt30"}>
                  <span
                    id="All"
                    className={
                      currenPage == "All"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("All");
                      props.getChangedCommNavBar("All");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("All").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("All").style.cursor =
                        "default";
                    }}
                  >
                    All
                  </span>
                </div>
                <div className={"mgl25 mgt30"}>
                  <span
                    id={"data2022"}
                    className={
                      currenPage == "data2022"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("data2022");
                      props.getChangedCommNavBar("data2022");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("data2022").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("data2022").style.cursor =
                        "default";
                    }}
                  >
                    2022~2020
                  </span>
                </div>
                <div className={"mgl25 mgt30"}>
                  <span
                    id={"data2019"}
                    className={
                      currenPage == "data2019"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("data2019");
                      props.getChangedCommNavBar("data2019");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("data2019").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("data2019").style.cursor =
                        "default";
                    }}
                  >
                    2019~2015
                  </span>
                </div>
                <div className={"mgl25 mgt30"}>
                  <span
                    id={"data2014"}
                    className={
                      currenPage == "data2014"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("data2014");
                      props.getChangedCommNavBar("data2014");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("data2014").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("data2014").style.cursor =
                        "default";
                    }}
                  >
                    2014~
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommNavBar;
