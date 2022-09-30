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

const AllDayKing = () => {
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
    HOME: "/home",
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
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/allDayKing/bulgogiMonsterSet.png",
          linkNM: "올데이킹",
          title: "불고기몬스터 세트",
          description: "",
          imageURL: "/image/main/menu/allDayKing/bulgogiMonsterSet.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/allDayKing/bulgogiMonsterLargeSet.png",
              title: "불고기몬스터 라지세트",
              description: "불고기몬스터+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/allDayKing/bulgogiMonsterSet.png",
              title: "불고기몬스터 세트",
              description: "불고기몬스터+프렌치프라이R+콜라R",
            },
          ],
          returnLink: "/AllDayKing",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/allDayKing/doubleOriginalCheeseSet.png",
          linkNM: "올데이킹",
          title: "더블오리지널치즈버거 세트",
          description: "",
          imageURL: "/image/main/menu/allDayKing/doubleOriginalCheeseSet.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/allDayKing/doubleOriginalCheeseLargeSet.png",
              title: "더블오리지널치즈버거 라지세트",
              description: "더블오리지널치즈버거+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/allDayKing/doubleOriginalCheeseSet.png",
              title: "더블오리지널치즈버거 세트",
              description: "더블오리지널치즈버거+프렌치프라이R+콜라R",
            },
          ],
          returnLink: "/AllDayKing",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/allDayKing/fireBeefBulgogi.png",
          linkNM: "올데이킹",
          title: "직화소불고기버거",
          description: "",
          imageURL: "/image/main/menu/allDayKing/fireBeefBulgogi.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/allDayKing/fireBeefBulgogiLargeSet.png",
              title: "직화소불고기버거 라지세트",
              description: "직화소불고기버거+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/allDayKing/fireBeefBulgogiSet.png",
              title: "직화소불고기버거 세트",
              description: "직화소불고기버거+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/allDayKing/fireBeefBulgogi.png",
              title: "직화소불고기버거",
              description: "단품",
            },
          ],
          returnLink: "/AllDayKing",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/allDayKing/allDayFireBeefBulgogiSet.png",
          linkNM: "올데이킹",
          title: "직화소불고기버거 세트",
          description: "",
          imageURL: "/image/main/menu/allDayKing/allDayFireBeefBulgogiSet.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/allDayKing/allDayFireBeefBulgogiLargeSet.png",
              title: "직화소불고기버거 라지세트",
              description: "직화소불고기버거+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/allDayKing/allDayFireBeefBulgogiSet.png",
              title: "직화소불고기버거 세트",
              description: "직화소불고기버거+프렌치프라이R+콜라R",
            },
          ],
          returnLink: "/AllDayKing",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/allDayKing/fireMushroomBeefBulgogi.png",
          linkNM: "올데이킹",
          title: "직화버섯소불고기버거",
          description: "패티까지! 진짜 불고기!",
          imageURL: "/image/main/menu/allDayKing/fireMushroomBeefBulgogi.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/allDayKing/fireMushroomBeefBulgogiLargeSet.png",
              title: "직화버섯소불고기버거 라지세트",
              description: "직화버섯소불고기버거+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/allDayKing/fireMushroomBeefBulgogiSet.png",
              title: "직화버섯소불고기버거 세트",
              description: "직화버섯소불고기버거+프렌치프라이R+콜라R",
            },
          ],
          returnLink: "/AllDayKing",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/allDayKing/shrimpWopperJuniorSet.png",
          linkNM: "올데이킹",
          title: "통새우와퍼주니어 세트",
          description:
            "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거",
          imageURL: "/image/main/menu/allDayKing/shrimpWopperJuniorSet.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/allDayKing/shrimpWopperJuniorLargeSet.png",
              title: "통새우와퍼주니어 라지세트",
              description: "통새우와퍼주니어+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/allDayKing/shrimpWopperJuniorSet.png",
              title: "통새우와퍼주니어 세트",
              description: "통새우와퍼주니어+프렌치프라이R+콜라R",
            },
          ],
          returnLink: "/AllDayKing",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc:
            "/image/main/menu/allDayKing/quattroCheeseWhopperJuniorSet.png",
          linkNM: "올데이킹",
          title: "콰트로치즈와퍼주니어 세트",
          description:
            "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!",
          imageURL:
            "/image/main/menu/allDayKing/quattroCheeseWhopperJuniorSet.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/allDayKing/quattroCheeseWhopperJuniorLargeSet.png",
              title: "콰트로치즈와퍼주니어 라지세트",
              description: "콰트로치즈와퍼주니어+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/allDayKing/quattroCheeseWhopperJuniorSet.png",
              title: "콰트로치즈와퍼주니어 세트",
              description: "콰트로치즈와퍼주니어+프렌치프라이R+콜라R",
            },
          ],
          returnLink: "/AllDayKing",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/allDayKing/bulgogiLongChickenSet.png",
          linkNM: "올데이킹",
          title: "불고기롱치킨버거 세트",
          description: "",
          imageURL: "/image/main/menu/allDayKing/bulgogiLongChickenSet.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/allDayKing/bulgogiLongChickenLargeSet.png",
              title: "불고기롱치킨버거 라지세트",
              description: "불고기롱치킨버거+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/allDayKing/bulgogiLongChickenSet.png",
              title: "불고기롱치킨버거 세트",
              description: "불고기롱치킨버거+프렌치프라이R+콜라R",
            },
          ],
          returnLink: "/AllDayKing",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/allDayKing/cheese.png",
          linkNM: "올데이킹",
          title: "치즈버거",
          description:
            "불에 구운 쇠고기 패티와 사르르 치즈까지, 작지만 알차다!",
          imageURL: "/image/main/menu/allDayKing/cheese.png",
          detail: [
            {
              imageURL: "/image/main/menu/allDayKing/cheeseLargeSet.png",
              title: "치즈버거 라지세트",
              description: "치즈버거+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/allDayKing/cheeseSet.png",
              title: "치즈버거 세트",
              description: "치즈버거+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/allDayKing/cheese.png",
              title: "치즈버거 세트",
              description: "단품",
            },
          ],
          returnLink: "/AllDayKing",
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
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "불고기몬스터 세트",
                        description: "",
                        imageURL:
                          "/image/main/menu/allDayKing/bulgogiMonsterSet.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/bulgogiMonsterLargeSet.png",
                            title: "불고기몬스터 라지세트",
                            description: "불고기몬스터+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/bulgogiMonsterSet.png",
                            title: "불고기몬스터 세트",
                            description: "불고기몬스터+프렌치프라이R+콜라R",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/bulgogiMonsterSet.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>불고기몬스터 세트</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "더블오리지널치즈버거 세트",
                        description: "",
                        imageURL:
                          "/image/main/menu/allDayKing/doubleOriginalCheeseSet.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/doubleOriginalCheeseLargeSet.png",
                            title: "더블오리지널치즈버거 라지세트",
                            description:
                              "더블오리지널치즈버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/doubleOriginalCheeseSet.png",
                            title: "더블오리지널치즈버거 세트",
                            description:
                              "더블오리지널치즈버거+프렌치프라이R+콜라R",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/doubleOriginalCheeseSet.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>더블오리지널치즈버거 세트</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "직화소불고기버거",
                        description: "",
                        imageURL:
                          "/image/main/menu/allDayKing/fireBeefBulgogi.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/fireBeefBulgogiLargeSet.png",
                            title: "직화소불고기버거 라지세트",
                            description: "직화소불고기버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/fireBeefBulgogiSet.png",
                            title: "직화소불고기버거 세트",
                            description: "직화소불고기버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/fireBeefBulgogi.png",
                            title: "직화소불고기버거",
                            description: "단품",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/fireBeefBulgogi.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>직화소불고기버거</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "직화소불고기버거 세트",
                        description: "",
                        imageURL:
                          "/image/main/menu/allDayKing/allDayFireBeefBulgogiSet.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/allDayFireBeefBulgogiLargeSet.png",
                            title: "직화소불고기버거 라지세트",
                            description: "직화소불고기버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/allDayFireBeefBulgogiSet.png",
                            title: "직화소불고기버거 세트",
                            description: "직화소불고기버거+프렌치프라이R+콜라R",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/allDayFireBeefBulgogiSet.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>직화소불고기버거 세트</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "직화버섯소불고기버거",
                        description: "패티까지! 진짜 불고기!",
                        imageURL:
                          "/image/main/menu/allDayKing/fireMushroomBeefBulgogi.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/fireMushroomBeefBulgogiLargeSet.png",
                            title: "직화버섯소불고기버거 라지세트",
                            description:
                              "직화버섯소불고기버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/fireMushroomBeefBulgogiSet.png",
                            title: "직화버섯소불고기버거 세트",
                            description:
                              "직화버섯소불고기버거+프렌치프라이R+콜라R",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/fireMushroomBeefBulgogiSet.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>직화버섯소불고기버거</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "통새우와퍼주니어 세트",
                        description:
                          "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거",
                        imageURL:
                          "/image/main/menu/allDayKing/shrimpWopperJuniorSet.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/shrimpWopperJuniorLargeSet.png",
                            title: "통새우와퍼주니어 라지세트",
                            description: "통새우와퍼주니어+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/shrimpWopperJuniorSet.png",
                            title: "통새우와퍼주니어 세트",
                            description: "통새우와퍼주니어+프렌치프라이R+콜라R",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/shrimpWopperJuniorSet.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>통새우와퍼주니어 세트</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "콰트로치즈와퍼주니어 세트",
                        description:
                          "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!",
                        imageURL:
                          "/image/main/menu/allDayKing/quattroCheeseWhopperJuniorSet.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/quattroCheeseWhopperJuniorLargeSet.png",
                            title: "콰트로치즈와퍼주니어 라지세트",
                            description:
                              "콰트로치즈와퍼주니어+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/quattroCheeseWhopperJuniorSet.png",
                            title: "콰트로치즈와퍼주니어 세트",
                            description:
                              "콰트로치즈와퍼주니어+프렌치프라이R+콜라R",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/quattroCheeseWhopperJuniorSet.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>콰트로치즈와퍼주니어 세트</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "불고기롱치킨버거 세트",
                        description: "",
                        imageURL:
                          "/image/main/menu/allDayKing/bulgogiLongChickenSet.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/bulgogiLongChickenLargeSet.png",
                            title: "불고기롱치킨버거 라지세트",
                            description: "불고기롱치킨버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/bulgogiLongChickenSet.png",
                            title: "불고기롱치킨버거 세트",
                            description: "불고기롱치킨버거+프렌치프라이R+콜라R",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/bulgogiLongChickenSet.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>불고기롱치킨버거 세트</p>
                  </div>
                </Link>
              </div>
              <div className={"col-3 textAlignCenter mgt30"}>
                <Link
                  to="/ShowDetail"
                  className={"textDecorationNone colorBlack"}
                  onClick={() => {
                    dispatch(
                      changeShowDetailDataState({
                        linkNM: "올데이킹",
                        title: "치즈버거",
                        description:
                          "불에 구운 쇠고기 패티와 사르르 치즈까지, 작지만 알차다!",
                        imageURL: "/image/main/menu/allDayKing/cheese.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/cheeseLargeSet.png",
                            title: "치즈버거 라지세트",
                            description: "치즈버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/allDayKing/cheeseSet.png",
                            title: "치즈버거 세트",
                            description: "치즈버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL: "/image/main/menu/allDayKing/cheese.png",
                            title: "치즈버거 세트",
                            description: "단품",
                          },
                        ],
                        returnLink: "/AllDayKing",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        올데이킹: "/AllDayKing",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/allDayKing/cheese.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>치즈버거</p>
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

export default AllDayKing;
