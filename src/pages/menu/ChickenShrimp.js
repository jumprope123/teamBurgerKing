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

const ChickenShrimp = () => {
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
          imageSrc: "/image/main/menu/chickenShrimp/beefShrimp.png",
          linkNM: "치킨&슈림프버거",
          title: "비프&슈림프버거",
          description: "불맛가득 순쇠고기 패티에 새콤달콤 루피 특제소스 듬뿍!",
          imageURL: "/image/main/menu/chickenShrimp/beefShrimp.png",
          detail: [
            {
              imageURL: "/image/main/menu/chickenShrimp/beefShrimpLargeSet.png",
              title: "비프&슈림프버거 라지세트",
              description: "비프&슈림프버거+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/beefShrimpSet.png",
              title: "비프&슈림프버거 세트",
              description: "비프&슈림프버거+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/beefShrimp.png",
              title: "비프&슈림프버거",
              description: "단품",
            },
          ],
          returnLink: "/ChickenShrimp",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/chickenShrimp/shrimpShrimp.png",
          linkNM: "치킨&슈림프버거",
          title: "통새우슈림프버거",
          description:
            "통통한 통새우에 새콤달콤 루피 특제소스 듬뿍! 통새우 슈림프 버거",
          imageURL: "/image/main/menu/chickenShrimp/shrimpShrimp.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/chickenShrimp/shrimpShrimpLargeSet.png",
              title: "통새우슈림프버거 라지세트",
              description: "통새우슈림프버거+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/shrimpShrimpSet.png",
              title: "통새우슈림프버거 세트",
              description: "통새우슈림프버거+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/shrimpShrimp.png",
              title: "통새우슈림프버거",
              description: "단품",
            },
          ],
          returnLink: "/ChickenShrimp",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/chickenShrimp/rupiShrimp.png",
          linkNM: "치킨&슈림프버거",
          title: "잔망루피슈림프버거",
          description: "탱글한 새우패티에 새콤달콤 루피 특제소스 듬뿍!",
          imageURL: "/image/main/menu/chickenShrimp/rupiShrimp.png",
          detail: [
            {
              imageURL: "/image/main/menu/chickenShrimp/rupiShrimpLargeSet.png",
              title: "잔망루피슈림프버거 라지세트",
              description: "잔망루피슈림프버거+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/rupiShrimpSet.png",
              title: "잔망루피슈림프버거 세트",
              description: "잔망루피슈림프버거+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/rupiShrimp.png",
              title: "잔망루피슈림프버거",
              description: "단품",
            },
          ],
          returnLink: "/ChickenShrimp",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/chickenShrimp/longChicken.png",
          linkNM: "치킨&슈림프버거",
          title: "롱치킨버거",
          description:
            "담백한 치킨 패티에 부드러운 마요네즈 소스와 싱싱한 야채가 듬뿍~",
          imageURL: "/image/main/menu/chickenShrimp/longChicken.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/chickenShrimp/longChickenLargeSet.png",
              title: "롱치킨버거 라지세트",
              description: "롱치킨버거+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/longChickenSet.png",
              title: "롱치킨버거 세트",
              description: "롱치킨버거+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/longChicken.png",
              title: "롱치킨버거",
              description: "단품",
            },
          ],
          returnLink: "/ChickenShrimp",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/chickenShrimp/babequKingChicken.png",
          linkNM: "치킨&슈림프버거",
          title: "바베큐킹치킨버거",
          description: "진한 바비큐 소스가 가득!",
          imageURL: "/image/main/menu/chickenShrimp/babequKingChicken.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/chickenShrimp/babequKingChickenLargeSet.png",
              title: "바베큐킹치킨버거 라지세트",
              description: "바베큐킹치킨버거+프렌치프라이L+콜라L",
            },
            {
              imageURL:
                "/image/main/menu/chickenShrimp/babequKingChickenSet.png",
              title: "바베큐킹치킨버거 세트",
              description: "바베큐킹치킨버거+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/babequKingChicken.png",
              title: "바베큐킹치킨버거",
              description: "단품",
            },
          ],
          returnLink: "/ChickenShrimp",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/chickenShrimp/kingChicken.png",
          linkNM: "치킨&슈림프버거",
          title: "킹치킨버거",
          description:
            "부드러운 에그번과 킹치킨패티의 만남! 풍부한 마요 소스로 고소하게!",
          imageURL: "/image/main/menu/chickenShrimp/kingChicken.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/chickenShrimp/kingChickenLargeSet.png",
              title: "킹치킨버거 라지세트",
              description: "킹치킨버거+프렌치프라이L+콜라L",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/kingChickenSet.png",
              title: "킹치킨버거 세트",
              description: "킹치킨버거+프렌치프라이R+콜라R",
            },
            {
              imageURL: "/image/main/menu/chickenShrimp/kingChicken.png",
              title: "킹치킨버거",
              description: "단품",
            },
          ],
          returnLink: "/ChickenShrimp",
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
                        linkNM: "치킨&슈림프버거",
                        title: "비프&슈림프버거",
                        description:
                          "불맛가득 순쇠고기 패티에 새콤달콤 루피 특제소스 듬뿍!",
                        imageURL:
                          "/image/main/menu/chickenShrimp/beefShrimp.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/beefShrimpLargeSet.png",
                            title: "비프&슈림프버거 라지세트",
                            description: "비프&슈림프버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/beefShrimpSet.png",
                            title: "비프&슈림프버거 세트",
                            description: "비프&슈림프버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/beefShrimp.png",
                            title: "비프&슈림프버거",
                            description: "단품",
                          },
                        ],
                        returnLink: "/ChickenShrimp",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "치킨&슈림프버거": "/ChickenShrimp",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/chickenShrimp/beefShrimp.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>비프&슈림프버거</p>
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
                        linkNM: "치킨&슈림프버거",
                        title: "통새우슈림프버거",
                        description:
                          "통통한 통새우에 새콤달콤 루피 특제소스 듬뿍! 통새우 슈림프 버거",
                        imageURL:
                          "/image/main/menu/chickenShrimp/shrimpShrimp.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/shrimpShrimpLargeSet.png",
                            title: "통새우슈림프버거 라지세트",
                            description: "통새우슈림프버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/shrimpShrimpSet.png",
                            title: "통새우슈림프버거 세트",
                            description: "통새우슈림프버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/shrimpShrimp.png",
                            title: "통새우슈림프버거",
                            description: "단품",
                          },
                        ],
                        returnLink: "/ChickenShrimp",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "치킨&슈림프버거": "/ChickenShrimp",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/chickenShrimp/shrimpShrimp.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>통새우슈림프버거</p>
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
                        linkNM: "치킨&슈림프버거",
                        title: "잔망루피슈림프버거",
                        description:
                          "탱글한 새우패티에 새콤달콤 루피 특제소스 듬뿍!",
                        imageURL:
                          "/image/main/menu/chickenShrimp/rupiShrimp.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/rupiShrimpLargeSet.png",
                            title: "잔망루피슈림프버거 라지세트",
                            description:
                              "잔망루피슈림프버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/rupiShrimpSet.png",
                            title: "잔망루피슈림프버거 세트",
                            description:
                              "잔망루피슈림프버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/rupiShrimp.png",
                            title: "잔망루피슈림프버거",
                            description: "단품",
                          },
                        ],
                        returnLink: "/ChickenShrimp",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "치킨&슈림프버거": "/ChickenShrimp",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/chickenShrimp/rupiShrimp.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>잔망루피슈림프버거</p>
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
                        linkNM: "치킨&슈림프버거",
                        title: "롱치킨버거",
                        description:
                          "담백한 치킨 패티에 부드러운 마요네즈 소스와 싱싱한 야채가 듬뿍~",
                        imageURL:
                          "/image/main/menu/chickenShrimp/longChicken.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/longChickenLargeSet.png",
                            title: "롱치킨버거 라지세트",
                            description: "롱치킨버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/longChickenSet.png",
                            title: "롱치킨버거 세트",
                            description: "롱치킨버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/longChicken.png",
                            title: "롱치킨버거",
                            description: "단품",
                          },
                        ],
                        returnLink: "/ChickenShrimp",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "치킨&슈림프버거": "/ChickenShrimp",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/chickenShrimp/longChicken.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>롱치킨버거</p>
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
                        linkNM: "치킨&슈림프버거",
                        title: "바베큐킹치킨버거",
                        description: "진한 바비큐 소스가 가득!",
                        imageURL:
                          "/image/main/menu/chickenShrimp/babequKingChicken.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/babequKingChickenLargeSet.png",
                            title: "바베큐킹치킨버거 라지세트",
                            description: "바베큐킹치킨버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/babequKingChickenSet.png",
                            title: "바베큐킹치킨버거 세트",
                            description: "바베큐킹치킨버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/babequKingChicken.png",
                            title: "바베큐킹치킨버거",
                            description: "단품",
                          },
                        ],
                        returnLink: "/ChickenShrimp",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "치킨&슈림프버거": "/ChickenShrimp",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/chickenShrimp/babequKingChicken.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>바비큐킹치킨버거</p>
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
                        linkNM: "치킨&슈림프버거",
                        title: "킹치킨버거",
                        description:
                          "부드러운 에그번과 킹치킨패티의 만남! 풍부한 마요 소스로 고소하게!",
                        imageURL:
                          "/image/main/menu/chickenShrimp/kingChicken.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/kingChickenLargeSet.png",
                            title: "킹치킨버거 라지세트",
                            description: "킹치킨버거+프렌치프라이L+콜라L",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/kingChickenSet.png",
                            title: "킹치킨버거 세트",
                            description: "킹치킨버거+프렌치프라이R+콜라R",
                          },
                          {
                            imageURL:
                              "/image/main/menu/chickenShrimp/kingChicken.png",
                            title: "킹치킨버거",
                            description: "단품",
                          },
                        ],
                        returnLink: "/ChickenShrimp",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "치킨&슈림프버거": "/ChickenShrimp",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/chickenShrimp/kingChicken.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>킹치킨버거</p>
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

export default ChickenShrimp;
