import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeMenuCarouselData,
  changeShowDetailDataState,
  changeState,
  changeWidthNavBarData,
} from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import MenuNavBar from "../../components/main/menu/MenuNavBar";
import { Link } from "react-router-dom";

const WhopperJunior = () => {
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
    dispatch(
      changeMenuCarouselData([
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/whopper.png",
          title: "와퍼",
          description:
            "불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!",
          imageURL: "/image/main/menu/whopperJunior/whopper.png",
          detail: [
            {
              imageURL: "/image/main/menu/whopperJunior/whopperLargeSet.png",
              title: "와퍼 라지세트",
              description: "와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/whopperSet.png",
              title: "와퍼 세트",
              description: "와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/whopper.png",
              title: "와퍼",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/cheeseWhopper.png",
          title: "치즈와퍼",
          description:
            "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!",
          imageURL: "/image/main/menu/whopperJunior/cheeseWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/cheeseWhopperLargeSet.png",
              title: "치즈와퍼 라지세트",
              description: "치즈와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/cheeseWhopperSet.png",
              title: "치즈와퍼 세트",
              description: "치즈와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/cheeseWhopper.png",
              title: "치즈와퍼",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/bulgogiWhopper.png",
          title: "불고기와퍼",
          description:
            "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!",
          imageURL: "/image/main/menu/whopperJunior/bulgogiWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/bulgogiWhopperLargeSet.png",
              title: "불고기와퍼 라지세트",
              description: "불고기와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/bulgogiWhopperSet.png",
              title: "불고기와퍼 세트",
              description: "불고기와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/bulgogiWhopper.png",
              title: "불고기와퍼",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/stacker2Whopper.png",
          title: "스태커2와퍼",
          description: "믿고 먹을수 있는 와퍼, 더 크게 도전하세요!",
          imageURL: "/image/main/menu/whopperJunior/stacker2Whopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/stacker2WhopperLargeSet.png",
              title: "스태커2와퍼 라지세트",
              description: "스태커2와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/stacker2WhopperSet.png",
              title: "스태커2와퍼 세트",
              description: "스태커2와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/stacker2Whopper.png",
              title: "스태커2와퍼",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/stacker3Whopper.png",
          title: "스태커3와퍼",
          description: "믿고 먹을수 있는 와퍼, 더 크게 도전하세요!",
          imageURL: "/image/main/menu/whopperJunior/stacker3Whopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/stacker3WhopperLargeSet.png",
              title: "스태커3와퍼 라지세트",
              description: "스태커3와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/stacker3WhopperSet.png",
              title: "스태커3와퍼 세트",
              description: "스태커3와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/stacker3Whopper.png",
              title: "스태커3와퍼",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/galicBulgogiWhopper.png",
          title: "갈릭불고기와퍼",
          description: "",
          imageURL: "/image/main/menu/whopperJunior/galicBulgogiWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/galicBulgogiWhopperLargeSet.png",
              title: "갈릭불고기와퍼 라지세트",
              description: "갈릭불고기와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/galicBulgogiWhopperSet.png",
              title: "갈릭불고기와퍼 세트",
              description: "갈릭불고기와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/galicBulgogiWhopper.png",
              title: "갈릭불고기와퍼",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/baconCheeseWhopper.png",
          title: "베이컨치즈와퍼",
          description: "풍미 가득한 아메리칸 클래식의 완벽한 조화!",
          imageURL: "/image/main/menu/whopperJunior/baconCheeseWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/baconCheeseWhopperLargeSet.png",
              title: "베이컨치즈와퍼 라지세트",
              description: "베이컨치즈와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/baconCheeseWhopperSet.png",
              title: "베이컨치즈와퍼 세트",
              description: "베이컨치즈와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/baconCheeseWhopper.png",
              title: "베이컨치즈와퍼",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/jalapenoWhopper.png",
          title: "할리피뇨와퍼",
          description: "",
          imageURL: "/image/main/menu/whopperJunior/jalapenoWhopper.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/jalapenoWhopperLargeSet.png",
              title: "할리피뇨와퍼 라지세트",
              description: "할리피뇨와퍼+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/jalapenoWhopperSet.png",
              title: "할리피뇨와퍼 세트",
              description: "할리피뇨와퍼+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/jalapenoWhopper.png",
              title: "할리피뇨와퍼",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/shrimpWhopperJunior.png",
          title: "통새우와퍼주니어",
          description:
            "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거",
          imageURL: "/image/main/menu/whopperJunior/shrimpWhopperJunior.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/shrimpWhopperJuniorLargeSet.png",
              title: "통새우와퍼주니어 라지세트",
              description: "통새우와퍼주니어+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/shrimpWhopperJuniorSet.png",
              title: "통새우와퍼주니어 세트",
              description: "통새우와퍼주니어+프렌치프라이R+콜라R",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/shrimpWhopperJunior.png",
              title: "통새우와퍼주니어",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc:
            "/image/main/menu/whopperJunior/quattroCheeseWhopperJunior.png",
          title: "콰트로치즈와퍼주니어",
          description:
            "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!",
          imageURL:
            "/image/main/menu/whopperJunior/quattroCheeseWhopperJunior.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/quattroCheeseWhopperJuniorLargeSet.png",
              title: "콰트로치즈와퍼주니어 라지세트",
              description: "콰트로치즈와퍼주니어+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/quattroCheeseWhopperJuniorSet.png",
              title: "콰트로치즈와퍼주니어 세트",
              description: "콰트로치즈와퍼주니어+프렌치프라이R+콜라R",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/quattroCheeseWhopperJunior.png",
              title: "콰트로치즈와퍼주니어",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/cheeseWhopperJunior.png",
          title: "치즈와퍼주니어",
          description:
            "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼주니어에 고소한 치즈 추가!",
          imageURL: "/image/main/menu/whopperJunior/cheeseWhopperJunior.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/cheeseWhopperJuniorLargeSet.png",
              title: "치즈와퍼주니어 라지세트",
              description: "치즈와퍼주니어+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/cheeseWhopperJuniorSet.png",
              title: "치즈와퍼주니어 세트",
              description: "치즈와퍼주니어+프렌치프라이R+콜라R",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/cheeseWhopperJunior.png",
              title: "치즈와퍼주니어",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/whopperJunior.png",
          title: "와퍼주니어",
          description:
            "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼의 주니어 버전~ 작지만 꽉 찼다!",
          imageURL: "/image/main/menu/whopperJunior/whopperJunior.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/whopperJuniorLargeSet.png",
              title: "와퍼주니어 라지세트",
              description: "와퍼주니어+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/whopperJuniorSet.png",
              title: "와퍼주니어 세트",
              description: "와퍼주니어+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/whopperJunior/whopperJunior.png",
              title: "와퍼주니어",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
        },
        {
          linkTo: "/showDetail",
          imageSrc: "/image/main/menu/whopperJunior/bulgogiWhopperJunior.png",
          title: "불고기와퍼주니어",
          description:
            "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼주니어에 달콤한 불고기 소스까지!",
          imageURL: "/image/main/menu/whopperJunior/bulgogiWhopperJunior.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/whopperJunior/bulgogiWhopperJuniorLargeSet.png",
              title: "불고기와퍼주니어 라지세트",
              description: "불고기와퍼주니어+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/bulgogiWhopperJuniorSet.png",
              title: "불고기와퍼주니어 세트",
              description: "불고기와퍼주니어+프렌치프라이R+콜라R",
            },
            {
              imageURL:
                "/image/main/menu/whopperJunior/bulgogiWhopperJunior.png",
              title: "불고기와퍼주니어",
              description: "단품",
            },
          ],
          returnLink: "/WhopperJunior",
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
                        title: "와퍼",
                        description:
                          "불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!",
                        imageURL: "/image/main/menu/whopperJunior/whopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/whopperLargeSet.png",
                            title: "와퍼 라지세트",
                            description: "와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/whopperSet.png",
                            title: "와퍼 세트",
                            description: "와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/whopper.png",
                            title: "와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/whopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>와퍼</p>
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
                        title: "치즈와퍼",
                        description:
                          "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!",
                        imageURL:
                          "/image/main/menu/whopperJunior/cheeseWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/cheeseWhopperLargeSet.png",
                            title: "치즈와퍼 라지세트",
                            description: "치즈와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/cheeseWhopperSet.png",
                            title: "치즈와퍼 세트",
                            description: "치즈와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/cheeseWhopper.png",
                            title: "치즈와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/cheeseWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>치즈와퍼</p>
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
                        title: "불고기와퍼",
                        description:
                          "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!",
                        imageURL:
                          "/image/main/menu/whopperJunior/bulgogiWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/bulgogiWhopperLargeSet.png",
                            title: "불고기와퍼 라지세트",
                            description: "불고기와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/bulgogiWhopperSet.png",
                            title: "불고기와퍼 세트",
                            description: "불고기와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/bulgogiWhopper.png",
                            title: "불고기와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/bulgogiWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>불고기와퍼</p>
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
                        title: "스태커2와퍼",
                        description:
                          "믿고 먹을수 있는 와퍼, 더 크게 도전하세요!",
                        imageURL:
                          "/image/main/menu/whopperJunior/stacker2Whopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/stacker2WhopperLargeSet.png",
                            title: "스태커2와퍼 라지세트",
                            description: "스태커2와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/stacker2WhopperSet.png",
                            title: "스태커2와퍼 세트",
                            description: "스태커2와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/stacker2Whopper.png",
                            title: "스태커2와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/stacker2Whopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>스태커2와퍼</p>
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
                        title: "스태커3와퍼",
                        description:
                          "믿고 먹을수 있는 와퍼, 더 크게 도전하세요!",
                        imageURL:
                          "/image/main/menu/whopperJunior/stacker3Whopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/stacker3WhopperLargeSet.png",
                            title: "스태커3와퍼 라지세트",
                            description: "스태커3와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/stacker3WhopperSet.png",
                            title: "스태커3와퍼 세트",
                            description: "스태커3와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/stacker3Whopper.png",
                            title: "스태커3와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/stacker3Whopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>스태커3와퍼</p>
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
                        title: "갈릭불고기와퍼",
                        description: "",
                        imageURL:
                          "/image/main/menu/whopperJunior/galicBulgogiWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/galicBulgogiWhopperLargeSet.png",
                            title: "갈릭불고기와퍼 라지세트",
                            description: "갈릭불고기와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/galicBulgogiWhopperSet.png",
                            title: "갈릭불고기와퍼 세트",
                            description: "갈릭불고기와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/galicBulgogiWhopper.png",
                            title: "갈릭불고기와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/galicBulgogiWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>갈릭불고기버거</p>
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
                        title: "베이컨치즈와퍼",
                        description:
                          "풍미 가득한 아메리칸 클래식의 완벽한 조화!",
                        imageURL:
                          "/image/main/menu/whopperJunior/baconCheeseWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/baconCheeseWhopperLargeSet.png",
                            title: "베이컨치즈와퍼 라지세트",
                            description: "베이컨치즈와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/baconCheeseWhopperSet.png",
                            title: "베이컨치즈와퍼 세트",
                            description: "베이컨치즈와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/baconCheeseWhopper.png",
                            title: "베이컨치즈와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/baconCheeseWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>베이컨치즈와퍼</p>
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
                        title: "할리피뇨와퍼",
                        description: "",
                        imageURL:
                          "/image/main/menu/whopperJunior/jalapenoWhopper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/jalapenoWhopperLargeSet.png",
                            title: "할리피뇨와퍼 라지세트",
                            description: "할리피뇨와퍼+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/jalapenoWhopperSet.png",
                            title: "할리피뇨와퍼 세트",
                            description: "할리피뇨와퍼+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/jalapenoWhopper.png",
                            title: "할리피뇨와퍼",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/jalapenoWhopper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>할라피뇨와퍼</p>
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
                        title: "통새우와퍼주니어",
                        description:
                          "불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거",
                        imageURL:
                          "/image/main/menu/whopperJunior/shrimpWhopperJunior.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/shrimpWhopperJuniorLargeSet.png",
                            title: "통새우와퍼주니어 라지세트",
                            description: "통새우와퍼주니어+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/shrimpWhopperJuniorSet.png",
                            title: "통새우와퍼주니어 세트",
                            description: "통새우와퍼주니어+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/shrimpWhopperJunior.png",
                            title: "통새우와퍼주니어",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/shrimpWhopperJunior.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>통새우와퍼주니어</p>
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
                        title: "콰트로치즈와퍼주니어",
                        description:
                          "진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!",
                        imageURL:
                          "/image/main/menu/whopperJunior/quattroCheeseWhopperJunior.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/quattroCheeseWhopperJuniorLargeSet.png",
                            title: "콰트로치즈와퍼주니어 라지세트",
                            description:
                              "콰트로치즈와퍼주니어+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/quattroCheeseWhopperJuniorSet.png",
                            title: "콰트로치즈와퍼주니어 세트",
                            description:
                              "콰트로치즈와퍼주니어+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/quattroCheeseWhopperJunior.png",
                            title: "콰트로치즈와퍼주니어",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/quattroCheeseWhopperJunior.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>콰트로치즈와퍼주니어</p>
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
                        title: "치즈와퍼주니어",
                        description:
                          "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼주니어에 고소한 치즈 추가!",
                        imageURL:
                          "/image/main/menu/whopperJunior/cheeseWhopperJunior.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/cheeseWhopperJuniorLargeSet.png",
                            title: "치즈와퍼주니어 라지세트",
                            description: "치즈와퍼주니어+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/cheeseWhopperJuniorSet.png",
                            title: "치즈와퍼주니어 세트",
                            description: "치즈와퍼주니어+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/cheeseWhopperJunior.png",
                            title: "치즈와퍼주니어",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/cheeseWhopperJunior.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>치즈와퍼주니어</p>
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
                        title: "와퍼주니어",
                        description:
                          "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼의 주니어 버전~ 작지만 꽉 찼다!",
                        imageURL:
                          "/image/main/menu/whopperJunior/whopperJunior.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/whopperJuniorLargeSet.png",
                            title: "와퍼주니어 라지세트",
                            description: "와퍼주니어+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/whopperJuniorSet.png",
                            title: "와퍼주니어 세트",
                            description: "와퍼주니어+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/whopperJunior.png",
                            title: "와퍼주니어",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/whopperJunior.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>와퍼주니어</p>
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
                        title: "불고기와퍼주니어",
                        description:
                          "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼주니어에 달콤한 불고기 소스까지!",
                        imageURL:
                          "/image/main/menu/whopperJunior/bulgogiWhopperJunior.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/bulgogiWhopperJuniorLargeSet.png",
                            title: "불고기와퍼주니어 라지세트",
                            description: "불고기와퍼주니어+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/bulgogiWhopperJuniorSet.png",
                            title: "불고기와퍼주니어 세트",
                            description: "불고기와퍼주니어+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/whopperJunior/bulgogiWhopperJunior.png",
                            title: "불고기와퍼주니어",
                            description: "단품",
                          },
                        ],
                        returnLink: "/WhopperJunior",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "와퍼&주니어": "/WhopperJunior",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/whopperJunior/bulgogiWhopperJunior.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>불고기와퍼주니어</p>
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

export default WhopperJunior;
