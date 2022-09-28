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

const SideMenu = () => {
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
    dispatch(changeState(true));
    dispatch(
      changeMenuCarouselData([
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/angryNurgetKing8.png",
          linkNM: "사이드",
          title: "앵그리 너겟킹 8조각(행사)",
          description: "",
          imageURL: "/image/main/menu/sideMenu/angryNurgetKing8.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/angryNurgetKing8.png",
              title: "앵그리 너겟킹 8조각",
              description: "(행사)",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/angryNurgetKing4.png",
          linkNM: "사이드",
          title: "앵그리 너겟킹",
          description: "바삭한 너겟킹에 청양고추가 콕콕!",
          imageURL: "/image/main/menu/sideMenu/angryNurgetKing4.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/angryNurgetKing10.png",
              title: "앵그리 너겟킹 10조각",
              description: "",
            },
            {
              imageURL: "/image/main/menu/sideMenu/angryNurgetKing6.png",
              title: "앵그리 너겟킹 6조각",
              description: "",
            },
            {
              imageURL: "/image/main/menu/sideMenu/angryNurgetKing4.png",
              title: "앵그리 너겟킹 4조각",
              description: "",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/nurgetKing8.png",
          linkNM: "사이드",
          title: "너겟킹8조각(행사)",
          description: "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
          imageURL: "/image/main/menu/sideMenu/nurgetKing8.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/nurgetKing8.png",
              title: "너겟킹8조각(행사)",
              description: "",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/nurgetKing4.png",
          linkNM: "사이드",
          title: "너겟킹",
          description: "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
          imageURL: "/image/main/menu/sideMenu/nurgetKing4.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/nurgetKing10.png",
              title: "너겟킹(10조각)",
              description: "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
            },
            {
              imageURL: "/image/main/menu/sideMenu/nurgetKing6.png",
              title: "너겟킹(6조각)",
              description: "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
            },
            {
              imageURL: "/image/main/menu/sideMenu/nurgetKing4.png",
              title: "너겟킹(4조각)",
              description: "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/21CheeseStick.png",
          linkNM: "사이드",
          title: "21치즈스틱",
          description:
            "21cm의 역대급 사이즈! 진하고 고소한 자연 모짜렐라가 가득한 21치즈스틱",
          imageURL: "/image/main/menu/sideMenu/21CheeseStick.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/21CheeseStick.png",
              title: "21치즈스틱",
              description:
                "21cm의 역대급 사이즈! 진하고 고소한 자연 모짜렐라가 가득한 21치즈스틱",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/onionRing.png",
          linkNM: "사이드",
          title: "어니언링",
          description: "크기도 UP! 맛도 UP!",
          imageURL: "/image/main/menu/sideMenu/onionRing.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/onionRing.png",
              title: "어니언링",
              description: "",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/basakKing2.png",
          linkNM: "사이드",
          title: "바삭킹",
          description: "매콤하게! 바삭하게 튀긴 치킨윙",
          imageURL: "/image/main/menu/sideMenu/basakKing2.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/basakKing4.png",
              title: "바삭킹4조각",
              description: "",
            },
            {
              imageURL: "/image/main/menu/sideMenu/basakKing2.png",
              title: "바삭킹2조각",
              description: "",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/basakKing8Plus3Source.png",
          linkNM: "사이드",
          title: "바삭킹8조각+소스",
          description: "매콤하게! 바삭하게 튀긴 치킨윙",
          imageURL: "/image/main/menu/sideMenu/basakKing8Plus3Source.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/basakKing8PlusDiablo.png",
              title: "바삭킹8조각+디아블로소스",
              description: "바삭킹8조각+디아블로소스",
            },
            {
              imageURL: "/image/main/menu/sideMenu/basakKing8PlusCheese.png",
              title: "바삭킹8조각+까망베르치즈소스",
              description: "바삭킹8조각+까망베르치즈소스",
            },
            {
              imageURL: "/image/main/menu/sideMenu/basakKing8PlusChilli.png",
              title: "바삭킹8조각+스위트칠리소스",
              description: "바삭킹8조각+스위트칠리소스",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/shakingFry.png",
          linkNM: "사이드",
          title: "쉐이킹프라이",
          description: "깊은 풍미가 느껴지는 시즈닝으로 취향 저격!",
          imageURL: "/image/main/menu/sideMenu/shakingFry.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/shakingFryGalic.png",
              title: "쉐이킹프라이 구운갈릭",
              description: "",
            },
            {
              imageURL: "/image/main/menu/sideMenu/shakingFryOnion.png",
              title: "쉐이킹프라이 스윗어니언",
              description: "",
            },
            {
              imageURL: "/image/main/menu/sideMenu/shakingFryCheese.png",
              title: "쉐이킹프라이 매콤치즈",
              description: "",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/creamyMozza5.png",
          linkNM: "사이드",
          title: "크리미모짜볼",
          description:
            "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!",
          imageURL: "/image/main/menu/sideMenu/creamyMozza5.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/creamyMozza10.png",
              title: "크리미모짜볼(10조각)",
              description:
                "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!",
            },
            {
              imageURL: "/image/main/menu/sideMenu/creamyMozza5.png",
              title: "크리미모짜볼(5조각)",
              description:
                "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/coconutShrimpSweetChilli3.png",
          linkNM: "사이드",
          title: "코코넛쉬림프+스위트칠리소스",
          description:
            "바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스",
          imageURL: "/image/main/menu/sideMenu/coconutShrimpSweetChilli3.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/sideMenu/coconutShrimpSweetChilli9.png",
              title: "코코넛쉬림프(9조각)+스위트칠리소스",
              description: "코코넛쉬림프(9조각)+스위트칠리소스",
            },
            {
              imageURL:
                "/image/main/menu/sideMenu/coconutShrimpSweetChilli6.png",
              title: "코코넛쉬림프(6조각)+스위트칠리소스",
              description: "코코넛쉬림프(6조각)+스위트칠리소스",
            },
            {
              imageURL:
                "/image/main/menu/sideMenu/coconutShrimpSweetChilli3.png",
              title: "코코넛쉬림프(3조각)+스위트칠리소스",
              description: "코코넛쉬림프(3조각)+스위트칠리소스",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/cheeseFry.png",
          linkNM: "사이드",
          title: "치즈프라이",
          description: "바삭한 프렌치프라이에 고소한 치즈가 듬뿍!",
          imageURL: "/image/main/menu/sideMenu/cheeseFry.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/cheeseFry.png",
              title: "치즈프라이",
              description: "바삭한 프렌치프라이에 고소한 치즈가 듬뿍!",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/friedPotatos.png",
          linkNM: "사이드",
          title: "프렌치프라이",
          description:
            "세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!",
          imageURL: "/image/main/menu/sideMenu/friedPotatos.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/friedPotatoL.png",
              title: "프렌치프라이(L)",
              description: "프렌치프라이(L)",
            },
            {
              imageURL: "/image/main/menu/sideMenu/friedPotatoR.png",
              title: "프렌치프라이(R)",
              description: "프렌치프라이(R)",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/coleslaw.png",
          linkNM: "사이드",
          title: "코울슬로",
          description: "아삭아삭한 양배추와 상큼한 드레싱의 코울슬로",
          imageURL: "/image/main/menu/sideMenu/coleslaw.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/coleslaw.png",
              title: "코울슬로",
              description: "아삭아삭한 양배추와 상큼한 드레싱의 코울슬로",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/conSalada.png",
          linkNM: "사이드",
          title: "콘샐러드",
          description: "달콤한 옥수수와 싱싱한 야채의 어울림",
          imageURL: "/image/main/menu/sideMenu/conSalada.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/conSalada.png",
              title: "콘샐러드",
              description: "달콤한 옥수수와 싱싱한 야채의 어울림",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/sideSource.png",
          linkNM: "사이드",
          title: "사이드소스",
          description: "바삭킹, 너겟, 프렌치프라이 등 사이드를 더 맛있게!",
          imageURL: "/image/main/menu/sideMenu/sideSource.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/diablo.png",
              title: "디아블로소스",
              description: "계속 끌리는 매콤한 맛!",
            },
            {
              imageURL: "/image/main/menu/sideMenu/cheese.png",
              title: "까망베르치즈소스",
              description: "치즈의 깊은 풍미!",
            },
            {
              imageURL: "/image/main/menu/sideMenu/chilli.png",
              title: "스위트칠리소스",
              description: "새콤 달콤한 맛!",
            },
          ],
          returnLink: "/SideMenu",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/sideMenu/seasoning.png",
          linkNM: "사이드",
          title: "시즈닝",
          description: "",
          imageURL: "/image/main/menu/sideMenu/seasoning.png",
          detail: [
            {
              imageURL: "/image/main/menu/sideMenu/seasoningGalic.png",
              title: "구운갈릭 시즈닝",
              description: "",
            },
            {
              imageURL: "/image/main/menu/sideMenu/seasoningOnion.png",
              title: "스윗어니언 시즈닝",
              description: "",
            },
            {
              imageURL: "/image/main/menu/sideMenu/seasoningCheese.png",
              title: "매콤치즈 시즈닝",
              description: "",
            },
          ],
          returnLink: "/SideMenu",
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
                        linkNM: "사이드",
                        title: "앵그리 너겟킹 8조각(행사)",
                        description: "",
                        imageURL:
                          "/image/main/menu/sideMenu/angryNurgetKing8.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/angryNurgetKing8.png",
                            title: "앵그리 너겟킹 8조각(행사)",
                            description: "",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/angryNurgetKing8.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>앵그리 너겟킹 8조각(행사)</p>
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
                        linkNM: "사이드",
                        title: "앵그리 너겟킹",
                        description: "바삭한 너겟킹에 청양고추가 콕콕!",
                        imageURL:
                          "/image/main/menu/sideMenu/angryNurgetKing4.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/angryNurgetKing10.png",
                            title: "앵그리 너겟킹 10조각",
                            description: "",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/angryNurgetKing6.png",
                            title: "앵그리 너겟킹 6조각",
                            description: "",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/angryNurgetKing4.png",
                            title: "앵그리 너겟킹 4조각",
                            description: "",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/angryNurgetKing4.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>앵그리 너겟킹</p>
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
                        linkNM: "사이드",
                        title: "너겟킹8조각(행사)",
                        description: "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
                        imageURL: "/image/main/menu/sideMenu/nurgetKing8.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/nurgetKing8.png",
                            title: "너겟킹8조각(행사)",
                            description: "",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/nurgetKing8.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>너겟킹8조각(행사)</p>
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
                        linkNM: "사이드",
                        title: "너겟킹",
                        description: "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
                        imageURL: "/image/main/menu/sideMenu/nurgetKing4.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/nurgetKing10.png",
                            title: "너겟킹(10조각)",
                            description:
                              "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/nurgetKing6.png",
                            title: "너겟킹(6조각)",
                            description:
                              "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/nurgetKing4.png",
                            title: "너겟킹(4조각)",
                            description:
                              "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹!",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/nurgetKing4.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>너겟킹</p>
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
                        linkNM: "사이드",
                        title: "21치즈스틱",
                        description:
                          "21cm의 역대급 사이즈! 진하고 고소한 자연 모짜렐라가 가득한 21치즈스틱",
                        imageURL: "/image/main/menu/sideMenu/21CheeseStick.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/21CheeseStick.png",
                            title: "21치즈스틱",
                            description:
                              "21cm의 역대급 사이즈! 진하고 고소한 자연 모짜렐라가 가득한 21치즈스틱",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/21CheeseStick.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>21치즈스틱</p>
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
                        linkNM: "사이드",
                        title: "어니언링",
                        description: "크기도 UP! 맛도 UP!",
                        imageURL: "/image/main/menu/sideMenu/onionRing.png",
                        detail: [
                          {
                            imageURL: "/image/main/menu/sideMenu/onionRing.png",
                            title: "어니언링",
                            description: "",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/onionRing.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>어니언링</p>
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
                        linkNM: "사이드",
                        title: "바삭킹",
                        description: "매콤하게! 바삭하게 튀긴 치킨윙",
                        imageURL: "/image/main/menu/sideMenu/basakKing2.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/basakKing4.png",
                            title: "바삭킹4조각",
                            description: "",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/basakKing2.png",
                            title: "바삭킹2조각",
                            description: "",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/basakKing2.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>바삭킹</p>
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
                        linkNM: "사이드",
                        title: "바삭킹8조각+소스",
                        description: "매콤하게! 바삭하게 튀긴 치킨윙",
                        imageURL:
                          "/image/main/menu/sideMenu/basakKing8Plus3Source.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/basakKing8PlusDiablo.png",
                            title: "바삭킹8조각+디아블로소스",
                            description: "바삭킹8조각+디아블로소스",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/basakKing8PlusCheese.png",
                            title: "바삭킹8조각+까망베르치즈소스",
                            description: "바삭킹8조각+까망베르치즈소스",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/basakKing8PlusChilli.png",
                            title: "바삭킹8조각+스위트칠리소스",
                            description: "바삭킹8조각+스위트칠리소스",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/basakKing8Plus3Source.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>바삭킹8조각+소스</p>
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
                        linkNM: "사이드",
                        title: "쉐이킹프라이",
                        description:
                          "깊은 풍미가 느껴지는 시즈닝으로 취향 저격!",
                        imageURL: "/image/main/menu/sideMenu/shakingFry.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/shakingFryGalic.png",
                            title: "쉐이킹프라이 구운갈릭",
                            description: "",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/shakingFryOnion.png",
                            title: "쉐이킹프라이 스윗어니언",
                            description: "",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/shakingFryCheese.png",
                            title: "쉐이킹프라이 매콤치즈",
                            description: "",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/shakingFry.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>쉐이킹프라이</p>
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
                        linkNM: "사이드",
                        title: "크리미모짜볼",
                        description:
                          "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!",
                        imageURL: "/image/main/menu/sideMenu/creamyMozza5.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/creamyMozza10.png",
                            title: "크리미모짜볼(10조각)",
                            description:
                              "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/creamyMozza5.png",
                            title: "크리미모짜볼(5조각)",
                            description:
                              "겉은 바삭~ 속은 부드러운 크림치즈가 쏘옥, 크리미모짜볼!",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/creamyMozza5.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>크리미모짜볼</p>
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
                        linkNM: "사이드",
                        title: "코코넛쉬림프+스위트칠리소스",
                        description:
                          "바삭한 코코넛 옷을 입은 탱글한 통새우와 새콤달콤 칠리소스",
                        imageURL:
                          "/image/main/menu/sideMenu/coconutShrimpSweetChilli3.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/coconutShrimpSweetChilli9.png",
                            title: "코코넛쉬림프(9조각)+스위트칠리소스",
                            description: "코코넛쉬림프(9조각)+스위트칠리소스",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/coconutShrimpSweetChilli6.png",
                            title: "코코넛쉬림프(6조각)+스위트칠리소스",
                            description: "코코넛쉬림프(6조각)+스위트칠리소스",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/coconutShrimpSweetChilli3.png",
                            title: "코코넛쉬림프(3조각)+스위트칠리소스",
                            description: "코코넛쉬림프(3조각)+스위트칠리소스",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/coconutShrimpSweetChilli3.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>코코넛쉬림프+스위트칠리소스</p>
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
                        linkNM: "사이드",
                        title: "치즈프라이",
                        description:
                          "바삭한 프렌치프라이에 고소한 치즈가 듬뿍!",
                        imageURL: "/image/main/menu/sideMenu/cheeseFry.png",
                        detail: [
                          {
                            imageURL: "/image/main/menu/sideMenu/cheeseFry.png",
                            title: "치즈프라이",
                            description:
                              "바삭한 프렌치프라이에 고소한 치즈가 듬뿍!",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/cheeseFry.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>치즈프라이</p>
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
                        linkNM: "사이드",
                        title: "프렌치프라이",
                        description:
                          "세계최고의 감자만 엄선해서 버거킹만의 비법으로 바삭하게!",
                        imageURL: "/image/main/menu/sideMenu/friedPotatos.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/friedPotatoL.png",
                            title: "프렌치프라이(L)",
                            description: "프렌치프라이(L)",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/friedPotatoR.png",
                            title: "프렌치프라이(R)",
                            description: "프렌치프라이(R)",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/friedPotatos.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>프렌치프라이</p>
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
                        linkNM: "사이드",
                        title: "코울슬로",
                        description:
                          "아삭아삭한 양배추와 상큼한 드레싱의 코울슬로",
                        imageURL: "/image/main/menu/sideMenu/coleslaw.png",
                        detail: [
                          {
                            imageURL: "/image/main/menu/sideMenu/coleslaw.png",
                            title: "코울슬로",
                            description:
                              "아삭아삭한 양배추와 상큼한 드레싱의 코울슬로",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/coleslaw.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>코울슬로</p>
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
                        linkNM: "사이드",
                        title: "콘샐러드",
                        description: "달콤한 옥수수와 싱싱한 야채의 어울림",
                        imageURL: "/image/main/menu/sideMenu/conSalada.png",
                        detail: [
                          {
                            imageURL: "/image/main/menu/sideMenu/conSalada.png",
                            title: "콘샐러드",
                            description: "달콤한 옥수수와 싱싱한 야채의 어울림",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/conSalada.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>콘샐러드</p>
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
                        linkNM: "사이드",
                        title: "사이드소스",
                        description:
                          "바삭킹, 너겟, 프렌치프라이 등 사이드를 더 맛있게!",
                        imageURL: "/image/main/menu/sideMenu/sideSource.png",
                        detail: [
                          {
                            imageURL: "/image/main/menu/sideMenu/diablo.png",
                            title: "디아블로소스",
                            description: "계속 끌리는 매콤한 맛!",
                          },
                          {
                            imageURL: "/image/main/menu/sideMenu/cheese.png",
                            title: "까망베르치즈소스",
                            description: "치즈의 깊은 풍미!",
                          },
                          {
                            imageURL: "/image/main/menu/sideMenu/chilli.png",
                            title: "스위트칠리소스",
                            description: "새콤 달콤한 맛!",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/sideSource.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>사이드소스</p>
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
                        linkNM: "사이드",
                        title: "시즈닝",
                        description: "",
                        imageURL: "/image/main/menu/sideMenu/seasoning.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/seasoningGalic.png",
                            title: "구운갈릭 시즈닝",
                            description: "",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/seasoningOnion.png",
                            title: "스윗어니언 시즈닝",
                            description: "",
                          },
                          {
                            imageURL:
                              "/image/main/menu/sideMenu/seasoningCheese.png",
                            title: "매콤치즈 시즈닝",
                            description: "",
                          },
                        ],
                        returnLink: "/SideMenu",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        사이드: "/SideMenu",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/sideMenu/seasoning.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>시즈닝</p>
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
export default SideMenu;
