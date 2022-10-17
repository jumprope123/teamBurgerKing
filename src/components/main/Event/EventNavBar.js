import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventNavBar = (props) => {
  const [currenPage, setCurrenPage] = useState("All");

  return (
    <React.Fragment>
      <div className={"mgt30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            <div className={"row mg0 min-w910 fontBM_MenuNavBar_big"}>
              <div className={"col-3"}>이벤트</div>
              <div
                className={
                  "col-9 fontBM_MenuNavBar_small displayFlex justify-content-end textAlignRight"
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
                      props.getChangedEventNavBar("All");
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
                    전체
                  </span>
                </div>
                <div className={"mgl25 mgt30"}>
                  <span
                    id={"Ing"}
                    className={
                      currenPage == "Ing"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("Ing");
                      props.getChangedEventNavBar("Ing");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("Ing").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("Ing").style.cursor =
                        "default";
                    }}
                  >
                    진행중
                  </span>
                </div>
                <div className={"mgl25 mgt30"}>
                  <span
                    id={"End"}
                    className={
                      currenPage == "End"
                        ? "color_MenuNavBarActivate"
                        : "textDecorationNone color_MenuNavBar"
                    }
                    onClick={() => {
                      setCurrenPage("End");
                      props.getChangedEventNavBar("End");
                    }}
                    onMouseOver={() => {
                      window.document.getElementById("End").style.cursor =
                        "pointer";
                    }}
                    onMouseLeave={() => {
                      window.document.getElementById("End").style.cursor =
                        "default";
                    }}
                  >
                    종료
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

export default EventNavBar;
