import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { changeState } from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import MenuNavBar from "../../components/main/menu/MenuNavBar";

const SpecialDiscount = () => {
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
    HOME: "home",
    메뉴소개: false,
  });

  /**
   * ComponentDidmount와 같은 동작을 하는 Hooks
   * 리덕스의 changeState함수를 호출하여 인자로 true,false를 전달한다.
   * true인 경우 Header와 Footer가 존재, 반대의 경우 Main페이지만 나타난다.
   */
  useEffect(() => {
    dispatch(changeState(true));
  }, []);

  return (
    <React.Fragment>
      <WidthNavBar WidthNavBarData={widthNavBarData} />
      <MenuNavBar />
      {/*메인 화면 구성 - START*/}
      <div className={"mgt30 mgb30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            <div className={"row fontBM_MenuName"}>
              <div className={"col-3 textAlignCenter"}>
                <img
                  src="/image/main/menu/specialDiscount/goldencheesepack1.png"
                  style={{ width: "180px", height: "150px" }}
                />
                <p className={"mgt10"}>골든치즈렐라 팩1</p>
              </div>
              <div className={"col-3 textAlignCenter"}>
                <img
                  src="/image/main/menu/specialDiscount/goldencheesepack2.png"
                  style={{ width: "180px", height: "150px" }}
                />
                <p className={"mgt10"}>골든치즈렐라 팩2</p>
              </div>
              <div className={"col-3 textAlignCenter"}>
                <img
                  src="/image/main/menu/specialDiscount/goldencheesepack3.png"
                  style={{ width: "180px", height: "150px" }}
                />
                <p className={"mgt10"}>골든치즈렐라 팩3</p>
              </div>
              <div className={"col-3 textAlignCenter"}>
                <img
                  src="/image/main/menu/specialDiscount/goldencheesepack4.png"
                  style={{ width: "180px", height: "150px" }}
                />
                <p className={"mgt10"}>골든치즈렐라 팩4</p>
              </div>
            </div>
          </div>
          <div className={"col-2"}></div>
        </div>
      </div>
      {/*메인 화면 구성 - END*/}
    </React.Fragment>
  );
};

export default SpecialDiscount;
