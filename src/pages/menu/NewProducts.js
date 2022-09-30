import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeMenuCarouselData,
  changeShowDetailDataState,
  changeState,
  changeStateFooter,
  changeStateHeader,
  changeWidthNavBarData,
} from "../../store/Store";
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(changeStateHeader(true));
    dispatch(changeStateFooter(true));
    dispatch(
      changeMenuCarouselData([
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/newProducts/goldencheeselellaWhopper.png",
          // imageNM: "골든치즈렐라와퍼",
          linkNM: "신제품(NEW)",
          title: "골든치즈렐라와퍼",
          description:
            "황금빛 치즈가 통째로! 모짜렐라 치즈와 체다 치즈가 만나 풍미 작렬!",
          imageURL: "/image/main/menu/newProducts/goldencheeselellaWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/newProducts/goldencheeselellaWhopperLargeSet.png",
              title: "골든치즈렐라와퍼라지세트",
              description: "골든치즈렐라와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/newProducts/goldencheeselellaWhopperSet.png",
              title: "골든치즈렐라와퍼세트",
              description: "골든치즈렐라와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL:
                "/image/main/menu/newProducts/goldencheeselellaWhopper.png",
              title: "골든치즈렐라와퍼",
              description: "단품",
            },
          ],
          returnLink: "/NewProducts",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/newProducts/goldencheeselellaChicken.png",
          // imageNM: "골든치즈렐라치킨버거",
          linkNM: "신제품(NEW)",
          title: "골든치즈렐라치킨버거",
          description:
            "황금빛 치즈가 통째로! 모짜렐라 치즈와 체다 치즈가 만나 풍미 작렬!",
          imageURL: "/image/main/menu/newProducts/goldencheeselellaChicken.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/newProducts/goldencheeselellaWhopperLargeSet.png",
              title: "골든치즈렐라치킨버거라지세트",
              description: "골든치즈렐라치킨버거+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/newProducts/goldencheeselellaWhopperSet.png",
              title: "골든치즈렐라치킨버거세트",
              description: "골든치즈렐라치킨버거+프렌치프라이R+콜라R",
            },
            {
              imageURL:
                "/image/main/menu/newProducts/goldencheeselellaWhopper.png",
              title: "골든치즈렐라치킨버거",
              description: "단품",
            },
          ],
          returnLink: "/NewProducts",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/newProducts/tabascoMonster.png",
          // imageNM: "타바스코몬스터",
          linkNM: "신제품(NEW)",
          title: "타바스코몬스터",
          description:
            "화끈한 타바스코에 직화구이 순쇠고기, 그리고 바삭한 치킨패티까지! 타바스코 몬스터",
          imageURL: "/image/main/menu/newProducts/tabascoMonster.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/newProducts/tabascoMonsterLargeSet.png",
              title: "타바스코 몬스터 라지세트",
              description: "타바스코 몬스터 + 프렌치프라이L + 콜라L",
            },
            {
              imageURL: "/image/main/menu/newProducts/tabascoMonsterSet.png",
              title: "타바스코 몬스터 세트",
              description: "타바스코 몬스터 + 프렌치프라이R + 콜라R",
            },
            {
              imageURL: "/image/main/menu/newProducts/tabascoMonster.png",
              title: "타바스코 몬스터",
              description: "단품",
            },
          ],
          returnLink: "/NewProducts",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/newProducts/tabascoDoubleBeef.png",
          // imageNM: "타바스코더블비프",
          linkNM: "신제품(NEW)",
          title: "타바스코더블비프",
          description:
            "시그니처 불맛가득 순쇠고기 패티의 풍부한 풍미! 타바스코 더블비프",
          imageURL: "/image/main/menu/newProducts/tabascoDoubleBeef.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/newProducts/tabascoDoubleBeefLargeSet.png",
              title: "타바스코 더블비프 라지세트",
              description: "타바스코 더블비프 + 프렌치프라이L + 콜라L",
            },
            {
              imageURL: "/image/main/menu/newProducts/tabascoDoubleBeefSet.png",
              title: "타바스코 더블비프 세트",
              description: "타바스코 더블비프 + 프렌치프라이R + 콜라R",
            },
            {
              imageURL: "/image/main/menu/newProducts/tabascoDoubleBeef.png",
              title: "타바스코 더블비프",
              description: "단품",
            },
          ],
          returnLink: "/NewProducts",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/newProducts/tabascoShrimp.png",
          // imageNM: "타바스코슈림프",
          linkNM: "신제품(NEW)",
          title: "타바스코슈림프",
          description:
            "화끈한 타바스코에 탱글한 새우패티까지 더해졌다! 타바스코 슈림프",
          imageURL: "/image/main/menu/newProducts/tabascoShrimp.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/newProducts/tabascoShrimpLargeSet.png",
              title: "타바스코 슈림프 라지세트",
              description: "타바스코 슈림프 + 프렌치프라이L + 콜라L",
            },
            {
              imageURL: "/image/main/menu/newProducts/tabascoShrimpSet.png",
              title: "타바스코 슈림프 세트",
              description: "타바스코 슈림프 + 프렌치프라이R + 콜라R",
            },
            {
              imageURL: "/image/main/menu/newProducts/tabascoShrimp.png",
              title: "타바스코 슈림프",
              description: "단품",
            },
          ],
          returnLink: "/NewProducts",
        },
      ])
    );
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
                        linkNM: "신제품(NEW)",
                        title: "골든치즈렐라와퍼",
                        description:
                          "황금빛 치즈가 통째로! 모짜렐라 치즈와 체다 치즈가 만나 풍미 작렬!",
                        imageURL:
                          "/image/main/menu/newProducts/goldencheeselellaWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/newProducts/goldencheeselellaWhopperLargeSet.png",
                            title: "골든치즈렐라와퍼라지세트",
                            description: "골든치즈렐라와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/goldencheeselellaWhopperSet.png",
                            title: "골든치즈렐라와퍼세트",
                            description: "골든치즈렐라와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/goldencheeselellaWhopper.png",
                            title: "골든치즈렐라와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/NewProducts",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "신제품(NEW)": "/NewProducts",
                        상세보기: false,
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
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "신제품(NEW)",
                        title: "골든치즈렐라치킨버거",
                        description:
                          "황금빛 치즈가 통째로! 모짜렐라 치즈와 체다 치즈가 만나 풍미 작렬!",
                        imageURL:
                          "/image/main/menu/newProducts/goldencheeselellaChicken.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/newProducts/goldencheeselellaWhopperLargeSet.png",
                            title: "골든치즈렐라치킨버거라지세트",
                            description:
                              "골든치즈렐라치킨버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/goldencheeselellaWhopperSet.png",
                            title: "골든치즈렐라치킨버거세트",
                            description:
                              "골든치즈렐라치킨버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/goldencheeselellaWhopper.png",
                            title: "골든치즈렐라치킨버거",
                            description: "단품",
                          },
                        ],
                        returnLink: "/NewProducts",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "신제품(NEW)": "/NewProducts",
                        상세보기: false,
                      })
                    );
                  }}
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
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "신제품(NEW)",
                        title: "타바스코몬스터",
                        description: `화끈한 타바스코에 직화구이 순쇠고기, 그리고 바삭한 치킨패티까지! 타바스코 몬스터`,
                        imageURL:
                          "/image/main/menu/newProducts/tabascoMonster.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoMonsterLargeSet.png",
                            title: "타바스코 몬스터 라지세트",
                            description:
                              "타바스코 몬스터 + 프렌치프라이L + 콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoMonsterSet.png",
                            title: "타바스코 몬스터 세트",
                            description:
                              "타바스코 몬스터 + 프렌치프라이R + 콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoMonster.png",
                            title: "타바스코 몬스터",
                            description: "단품",
                          },
                        ],
                        returnLink: "/NewProducts",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "신제품(NEW)": "/NewProducts",
                        상세보기: false,
                      })
                    );
                  }}
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
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "신제품(NEW)",
                        title: "타바스코더블비프",
                        description:
                          "시그니처 불맛가득 순쇠고기 패티의 풍부한 풍미! 타바스코 더블비프",
                        imageURL:
                          "/image/main/menu/newProducts/tabascoDoubleBeef.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoDoubleBeefLargeSet.png",
                            title: "타바스코 더블비프 라지세트",
                            description:
                              "타바스코 더블비프 + 프렌치프라이L + 콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoDoubleBeefSet.png",
                            title: "타바스코 더블비프 세트",
                            description:
                              "타바스코 더블비프 + 프렌치프라이R + 콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoDoubleBeef.png",
                            title: "타바스코 더블비프",
                            description: "단품",
                          },
                        ],
                        returnLink: "/NewProducts",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "신제품(NEW)": "/NewProducts",
                        상세보기: false,
                      })
                    );
                  }}
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
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "신제품(NEW)",
                        title: "타바스코슈림프",
                        description:
                          "화끈한 타바스코에 탱글한 새우패티까지 더해졌다! 타바스코 슈림프",
                        imageURL:
                          "/image/main/menu/newProducts/tabascoShrimp.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoShrimpLargeSet.png",
                            title: "타바스코 슈림프 라지세트",
                            description:
                              "타바스코 슈림프 + 프렌치프라이L + 콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoShrimpSet.png",
                            title: "타바스코 슈림프 세트",
                            description:
                              "타바스코 슈림프 + 프렌치프라이R + 콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/newProducts/tabascoShrimp.png",
                            title: "타바스코 슈림프",
                            description: "단품",
                          },
                        ],
                        returnLink: "/NewProducts",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "신제품(NEW)": "/NewProducts",
                        상세보기: false,
                      })
                    );
                  }}
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
