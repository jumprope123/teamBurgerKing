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

const Premium = () => {
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
          imageSrc: "/image/main/menu/premium/guinnessQuattroCheeseWhopper.png",
          linkNM: "프리미엄",
          title: "기네스콰트로치즈와퍼",
          description: "콰트로치즈와퍼가 기네스를 만나다!",
          imageURL: "/image/main/menu/premium/guinnessQuattroCheeseWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/premium/guinnessQuattroCheeseWhopperLargeSet.png",
              title: "기네스콰트로치즈와퍼라지세트",
              description: "기네스콰트로치즈와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/premium/guinnessQuattroCheeseWhopperSet.png",
              title: "기네스콰트로치즈와퍼세트",
              description: "기네스콰트로치즈와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL:
                "/image/main/menu/premium/guinnessQuattroCheeseWhopper.png",
              title: "기네스콰트로치즈와퍼",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/premium/guinnessMushroomWhopper.png",
          linkNM: "프리미엄",
          title: "기네스머쉬룸와퍼",
          description: "기네스 번과 기네스 바비큐 소스의 풍미!",
          imageURL: "/image/main/menu/premium/guinnessMushroomWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/premium/guinnessMushroomWhopperLargeSet.png",
              title: "기네스머쉬룸와퍼 라지세트",
              description: "기네스머쉬룸와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/premium/guinnessMushroomWhopperSet.png",
              title: "기네스머쉬룸와퍼 세트",
              description: "기네스머쉬룸와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/premium/guinnessMushroomWhopper.png",
              title: "기네스머쉬룸와퍼",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/premium/guinnessWhopper.png",
          linkNM: "프리미엄",
          title: "기네스와퍼",
          description: "기네스 번과 기네스 바비큐 소스의 풍미!",
          imageURL: "/image/main/menu/premium/guinnessWhopper.png",
          detail: [
            {
              imageURL: "/image/main/menu/premium/guinnessWhopperLargeSet.png",
              title: "기네스와퍼 라지세트",
              description: "기네스와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/premium/guinnessWhopperSet.png",
              title: "기네스와퍼 세트",
              description: "기네스와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/premium/guinnessWhopper.png",
              title: "기네스와퍼",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/premium/monsterWhopper.png",
          linkNM: "프리미엄",
          title: "몬스터와퍼",
          description:
            "불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛",
          imageURL: "/image/main/menu/premium/monsterWhopper.png",
          detail: [
            {
              imageURL: "/image/main/menu/premium/monsterWhopperLargeSet.png",
              title: "몬스터와퍼 라지세트",
              description: "몬스터와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/premium/monsterWhopperSet.png",
              title: "몬스터와퍼 세트",
              description: "몬스터와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/premium/monsterWhopper.png",
              title: "몬스터와퍼",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/premium/monsterX.png",
          linkNM: "프리미엄",
          title: "몬스터X",
          description:
            "부드러운 호밀 브리오슈 번, 두툼한 스테이크 패티, 디아블로 소스의 압도적인 맛",
          imageURL: "/image/main/menu/premium/monsterX.png",
          detail: [
            {
              imageURL: "/image/main/menu/premium/monsterXLargeSet.png",
              title: "몬스터X 라지세트",
              description: "몬스터X+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/premium/monsterXSet.png",
              title: "몬스터X 세트",
              description: "몬스터X+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/premium/monsterX.png",
              title: "몬스터X",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/premium/quattroCheeseWhopper.png",
          linkNM: "프리미엄",
          title: "콰트로치즈와퍼",
          description:
            "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!",
          imageURL: "/image/main/menu/premium/quattroCheeseWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/premium/quattroCheeseWhopperLargeSet.png",
              title: "콰트로치즈와퍼 라지세트",
              description: "콰트로치즈와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/premium/quattroCheeseWhopperSet.png",
              title: "콰트로치즈와퍼 세트",
              description: "콰트로치즈와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/premium/quattroCheeseWhopper.png",
              title: "콰트로치즈와퍼",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/premium/quattroCheeseX.png",
          linkNM: "프리미엄",
          title: "콰트로치즈X",
          description:
            "진짜 불맛을 즐겨라, 고품격 치즈와 불에 직접 구운 스테이크 패티의 만남!",
          imageURL: "/image/main/menu/premium/quattroCheeseWhopper.png",
          detail: [
            {
              imageURL: "/image/main/menu/premium/quattroCheeseXLargeSet.png",
              title: "콰트로치즈X 라지세트",
              description: "콰트로치즈X+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/premium/quattroCheeseXSet.png",
              title: "콰트로치즈X 세트",
              description: "콰트로치즈X+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/premium/quattroCheeseX.png",
              title: "콰트로치즈X",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/premium/shrimpWhopper.png",
          linkNM: "프리미엄",
          title: "통새우와퍼",
          description:
            "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거",
          imageURL: "/image/main/menu/premium/shrimpWhopper.png",
          detail: [
            {
              imageURL: "/image/main/menu/premium/shrimpWhopperLargeSet.png",
              title: "통새우와퍼 라지세트",
              description: "통새우와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/premium/shrimpWhopperSet.png",
              title: "통새우와퍼 세트",
              description: "통새우와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/premium/shrimpWhopper.png",
              title: "통새우와퍼",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/premium/shrimpX.png",
          linkNM: "프리미엄",
          title: "통새우X",
          description:
            "갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거",
          imageURL: "/image/main/menu/premium/shrimpX.png",
          detail: [
            {
              imageURL: "/image/main/menu/premium/shrimpXLargeSet.png",
              title: "통새우X 라지세트",
              description: "통새우X+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/premium/shrimpXSet.png",
              title: "통새우X 세트",
              description: "통새우X+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/premium/shrimpX.png",
              title: "통새우X",
              description: "단품",
            },
          ],
          returnLink: "/Premium",
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
                        linkNM: "프리미엄",
                        title: "기네스콰트로치즈와퍼",
                        description: "콰트로치즈와퍼가 기네스를 만나다!",
                        imageURL:
                          "/image/main/menu/premium/guinnessQuattroCheeseWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessQuattroCheeseWhopperLargeSet.png",
                            title: "기네스콰트로치즈와퍼라지세트",
                            description:
                              "기네스콰트로치즈와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessQuattroCheeseWhopperSet.png",
                            title: "기네스콰트로치즈와퍼세트",
                            description:
                              "기네스콰트로치즈와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessQuattroCheeseWhopper.png",
                            title: "기네스콰트로치즈와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/guinnessQuattroCheeseWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>기네스콰트로치즈와퍼</p>
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
                        linkNM: "프리미엄",
                        title: "기네스머쉬룸와퍼",
                        description: "기네스 번과 기네스 바비큐 소스의 풍미!",
                        imageURL:
                          "/image/main/menu/premium/guinnessMushroomWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessMushroomWhopperLargeSet.png",
                            title: "기네스머쉬룸와퍼 라지세트",
                            description: "기네스머쉬룸와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessMushroomWhopperSet.png",
                            title: "기네스머쉬룸와퍼 세트",
                            description: "기네스머쉬룸와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessMushroomWhopper.png",
                            title: "기네스머쉬룸와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/guinnessMushroomWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>기네스머쉬룸와퍼</p>
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
                        linkNM: "프리미엄",
                        title: "기네스와퍼",
                        description: "기네스 번과 기네스 바비큐 소스의 풍미!",
                        imageURL:
                          "/image/main/menu/premium/guinnessWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessWhopperLargeSet.png",
                            title: "기네스와퍼 라지세트",
                            description: "기네스와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessWhopperSet.png",
                            title: "기네스와퍼 세트",
                            description: "기네스와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/guinnessWhopper.png",
                            title: "기네스와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/guinnessWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>기네스와퍼</p>
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
                        linkNM: "프리미엄",
                        title: "몬스터와퍼",
                        description:
                          "불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛",
                        imageURL: "/image/main/menu/premium/monsterWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/monsterWhopperLargeSet.png",
                            title: "몬스터와퍼 라지세트",
                            description: "몬스터와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/monsterWhopperSet.png",
                            title: "몬스터와퍼 세트",
                            description: "몬스터와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/monsterWhopper.png",
                            title: "몬스터와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/monsterWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>몬스터와퍼</p>
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
                        linkNM: "프리미엄",
                        title: "몬스터X",
                        description:
                          "부드러운 호밀 브리오슈 번, 두툼한 스테이크 패티, 디아블로 소스의 압도적인 맛",
                        imageURL: "/image/main/menu/premium/monsterX.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/monsterXLargeSet.png",
                            title: "몬스터X 라지세트",
                            description: "몬스터X+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/monsterXSet.png",
                            title: "몬스터X 세트",
                            description: "몬스터X+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL: "/image/main/menu/premium/monsterX.png",
                            title: "몬스터X",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/monsterX.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>몬스터X</p>
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
                        linkNM: "프리미엄",
                        title: "콰트로치즈와퍼",
                        description:
                          "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!",
                        imageURL:
                          "/image/main/menu/premium/quattroCheeseWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/quattroCheeseWhopperLargeSet.png",
                            title: "콰트로치즈와퍼 라지세트",
                            description: "콰트로치즈와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/quattroCheeseWhopperSet.png",
                            title: "콰트로치즈와퍼 세트",
                            description: "콰트로치즈와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/quattroCheeseWhopper.png",
                            title: "콰트로치즈와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/quattroCheeseWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>콰트로치즈와퍼</p>
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
                        linkNM: "프리미엄",
                        title: "콰트로치즈X",
                        description:
                          "진짜 불맛을 즐겨라, 고품격 치즈와 불에 직접 구운 스테이크 패티의 만남!",
                        imageURL:
                          "/image/main/menu/premium/quattroCheeseWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/quattroCheeseXLargeSet.png",
                            title: "콰트로치즈X 라지세트",
                            description: "콰트로치즈X+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/quattroCheeseXSet.png",
                            title: "콰트로치즈X 세트",
                            description: "콰트로치즈X+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/quattroCheeseX.png",
                            title: "콰트로치즈X",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/quattroCheeseX.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>콰트로치즈X</p>
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
                        linkNM: "프리미엄",
                        title: "통새우와퍼",
                        description:
                          "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거",
                        imageURL: "/image/main/menu/premium/shrimpWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/shrimpWhopperLargeSet.png",
                            title: "통새우와퍼 라지세트",
                            description: "통새우와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/shrimpWhopperSet.png",
                            title: "통새우와퍼 세트",
                            description: "통새우와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/premium/shrimpWhopper.png",
                            title: "통새우와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/shrimpWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>통새우와퍼</p>
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
                        linkNM: "프리미엄",
                        title: "통새우X",
                        description:
                          "갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거",
                        imageURL: "/image/main/menu/premium/shrimpX.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/premium/shrimpXLargeSet.png",
                            title: "통새우X 라지세트",
                            description: "통새우X+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL: "/image/main/menu/premium/shrimpXSet.png",
                            title: "통새우X 세트",
                            description: "통새우X+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL: "/image/main/menu/premium/shrimpX.png",
                            title: "통새우X",
                            description: "단품",
                          },
                        ],
                        returnLink: "/Premium",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        프리미엄: "/Premium",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/premium/shrimpX.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>통새우X</p>
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

export default Premium;
