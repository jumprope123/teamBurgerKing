import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeShowDetailDataState, changeState } from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import MenuNavBar from "../../components/main/menu/MenuNavBar";
import { Link } from "react-router-dom";

const NewProducts = () => {
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
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/showDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        title: "골든치즈렐라와퍼",
                        imageURL:
                          "/image/main/menu/newProducts/goldencheeselellaWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/specialDiscount/goldencheesepack4.png",
                            title: "골든치즈렐라 팩4",
                            description:
                              "골든치즈렐라와퍼+골든치즈렐라치킨버거+크리미모짜볼5조각+너겟킹4조각+콜라R2",
                          },
                        ],
                        returnLink: "/NewProducts",
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/newProducts/goldencheeselellaWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>골든치즈렐라와퍼</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/showDetail"
                  className={"textDecorationNone colorBlack"}
                >
                  <div>
                    <img
                      src="/image/main/menu/newProducts/goldencheeselellaChicken.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>골든치즈렐라치킨버거</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/showDetail"
                  className={"textDecorationNone colorBlack"}
                >
                  <div>
                    <img
                      src="/image/main/menu/newProducts/tabascoMonster.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>타바스코몬스터</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/showDetail"
                  className={"textDecorationNone colorBlack"}
                >
                  <div>
                    <img
                      src="/image/main/menu/newProducts/tabascoDoubleBeef.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>타바스코더블비프</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/showDetail"
                  className={"textDecorationNone colorBlack"}
                >
                  <div>
                    <img
                      src="/image/main/menu/newProducts/tabascoShrimp.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>타바스코슈림프</p>
                  </div>
                </Link>
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

export default NewProducts;
