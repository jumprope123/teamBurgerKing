import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventNavBar = (props) => {
  return (
    <React.Fragment>
      <div className={"mgt30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            <div className={"row mg0 min-w910 fontBM_MenuNavBar_big"}>
              <div className={"col-3"}>신규매장</div>
              <div
                className={
                  "col-9 fontBM_MenuNavBar_small displayFlex justify-content-end textAlignRight"
                }
              ></div>
            </div>
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
    </React.Fragment>
  );
};

export default EventNavBar;
