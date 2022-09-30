import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param props json형식으로 데이터를 받는다. key:노출, value:주소. value값이 false이면 일반Text처럼 동작.
 * @returns {JSX.Element}
 * @constructor
 */
const WidthNavBar = (props) => {
  const [widthNavBarData, setWidthNavBarData] = useState(0);
  useEffect(() => {
    setWidthNavBarData(props.WidthNavBarData);
  }, []);

  /**
   * 페이지별 가로 네비게이션바를 만들어주는 함수
   * @returns {*[]}
   */
  const makeDiv = () => {
    let dataArray = [];
    for (const key of Object.keys(props.WidthNavBarData)) {
      let data = (
        <>
          {props.WidthNavBarData[key] != false ? (
            <Link
              to={props.WidthNavBarData[key]}
              className={"textDecorationNone colorWhite pt10pb10"}
              style={{ paddingTop: "15px", paddingBottom: "15px" }}
            >
              {key}
            </Link>
          ) : (
            <span
              className={"textDecorationNone colorWhite"}
              style={{ paddingTop: "15px", paddingBottom: "15px" }}
            >
              {key}
            </span>
          )}
          {props.WidthNavBarData[key] != false ? (
            <span
              className={"textDecorationNone colorWhite"}
              style={{ paddingTop: "15px", paddingBottom: "15px" }}
            >
              &nbsp;&nbsp;>&nbsp;&nbsp;
            </span>
          ) : (
            <span></span>
          )}
        </>
      );
      dataArray.push(data);
    }
    return dataArray;
  };

  return (
    <React.Fragment>
      <div
        id={"navDiv"}
        className={"row background_footer w-full min-w910 gx-0"}
      >
        <div className={"col-2"}></div>
        <div className={"col-8"}>
          <div className={"mg0 min-w910 displayFlex fontBM_footer_small"}>
            {makeDiv()}
          </div>
        </div>
        <div className={"col-2"}></div>
      </div>
    </React.Fragment>
  );
};

export default WidthNavBar;
