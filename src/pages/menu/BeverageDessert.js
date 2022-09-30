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

const BeverageDessert = () => {
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
          imageSrc: "/image/main/menu/beverageDessert/popingCandySundae.png",
          linkNM: "음료&디저트",
          title: "팝핑캔디 선데",
          description: "알록달록 팝핑캔디가 입안에서 팡팡!",
          imageURL: "/image/main/menu/beverageDessert/popingCandySundae.png",
          detail: [
            {
              imageURL:
                "/image/main/menu/beverageDessert/popingCandySundae.png",
              title: "팝핑캔디 선데",
              description: "알록달록 팝핑캔디가 입안에서 팡팡!",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/sundae.png",
          linkNM: "음료&디저트",
          title: "선데",
          description:
            "천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림!",
          imageURL: "/image/main/menu/beverageDessert/sundae.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/sundaeBanilla.png",
              title: "선데 바닐라",
              description: "향긋한 바닐라 향 때문에 더 맛있다!",
            },
            {
              imageURL: "/image/main/menu/beverageDessert/sundaeChoco.png",
              title: "선데 초코",
              description: "달콤하고 진한 초코의 맛!",
            },
            {
              imageURL: "/image/main/menu/beverageDessert/sundaeStrawberry.png",
              title: "선데 딸기",
              description: "딸기맛의 상큼함이 살아있어요!",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/americanos.png",
          linkNM: "음료&디저트",
          title: "아메리카노",
          description: "자연을 담은 버거킹 RA인증커피",
          imageURL: "/image/main/menu/beverageDessert/americanos.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/americano.png",
              title: "아메리카노",
              description: "자연을 담은 버거킹 RA인증커피",
            },
            {
              imageURL: "/image/main/menu/beverageDessert/iceAmericano.png",
              title: "아이스아메리카노",
              description: "자연을 담은 버거킹 RA인증커피",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/hotChoco.png",
          linkNM: "음료&디저트",
          title: "핫초코",
          description: "달콤한 초코, 따뜻하게 즐기세요!",
          imageURL: "/image/main/menu/beverageDessert/hotChoco.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/hotChoco.png",
              title: "핫초코",
              description: "달콤한 초코, 따뜻하게 즐기세요!",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/iceChoco.png",
          linkNM: "음료&디저트",
          title: "아이스초코",
          description: "달콤한 초코, 시원하게 즐기세요!",
          imageURL: "/image/main/menu/beverageDessert/iceChoco.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/iceChoco.png",
              title: "아이스초코",
              description: "달콤한 초코, 시원하게 즐기세요!",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/cupIceCream.png",
          linkNM: "음료&디저트",
          title: "컵 아이스크림",
          description:
            "천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림",
          imageURL: "/image/main/menu/beverageDessert/cupIceCream.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/cupIceCream.png",
              title: "컵 아이스크림",
              description:
                "천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/colaL.png",
          linkNM: "음료&디저트",
          title: "코카콜라",
          description: "코카-콜라로 더 짜릿하게!",
          imageURL: "/image/main/menu/beverageDessert/colaL.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/colaL.png",
              title: "코카콜라(L)",
              description: "코카-콜라로 더 짜릿하게!",
            },
            {
              imageURL: "/image/main/menu/beverageDessert/colaR.png",
              title: "코카콜라(R)",
              description: "코카-콜라로 더 짜릿하게!",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/colaZeroL.png",
          linkNM: "음료&디저트",
          title: "코카콜라 제로",
          description: "100% 짜릿함, 칼로리는 제로!",
          imageURL: "/image/main/menu/beverageDessert/colaZeroL.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/colaZeroL.png",
              title: "코카콜라 제로(L)",
              description: "100% 짜릿함, 칼로리는 제로!",
            },
            {
              imageURL: "/image/main/menu/beverageDessert/colaR.png",
              title: "코카콜라 제로(R)",
              description: "100% 짜릿함, 칼로리는 제로!",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/spriteL.png",
          linkNM: "음료&디저트",
          title: "스프라이트",
          description: "나를 깨우는 상쾌함!",
          imageURL: "/image/main/menu/beverageDessert/spriteL.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/spriteL.png",
              title: "스프라이트(L)",
              description: "나를 깨우는 상쾌함!",
            },
            {
              imageURL: "/image/main/menu/beverageDessert/spriteR.png",
              title: "스프라이트(L)",
              description: "나를 깨우는 상쾌함!",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/seaGramR.png",
          linkNM: "음료&디저트",
          title: "씨그램",
          description: "",
          imageURL: "/image/main/menu/beverageDessert/seaGramR.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/seaGramL.png",
              title: "씨그램(L)",
              description: "",
            },
            {
              imageURL: "/image/main/menu/beverageDessert/seaGramR.png",
              title: "씨그램(L)",
              description: "",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/orange.png",
          linkNM: "음료&디저트",
          title: "미닛메이드 오렌지",
          description: "",
          imageURL: "/image/main/menu/beverageDessert/orange.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/orange.png",
              title: "미닛메이드 오렌지",
              description: "오렌지의 신선함이 가득~",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/water.png",
          linkNM: "음료&디저트",
          title: "순수(미네랄워터)",
          description: "깨끗하고 순수한 물",
          imageURL: "/image/main/menu/beverageDessert/water.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/water.png",
              title: "순수(미네랄워터)",
              description: "깨끗하고 순수한 물",
            },
          ],
          returnLink: "/BeverageDessert",
        },
        {
          linkTo: "/ShowDetail",
          imageSrc: "/image/main/menu/beverageDessert/realDogpper.png",
          linkNM: "음료&디저트",
          title: "리얼 독퍼",
          description: "반려견에게 Real Dogpper를 선물하세요!",
          imageURL: "/image/main/menu/beverageDessert/realDogpper.png",
          detail: [
            {
              imageURL: "/image/main/menu/beverageDessert/realDogpper.png",
              title: "리얼 독퍼",
              description: "반려견에게 Real Dogpper를 선물하세요!",
            },
          ],
          returnLink: "/BeverageDessert",
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
                        linkNM: "음료&디저트",
                        title: "팝핑캔디 선데",
                        description: "알록달록 팝핑캔디가 입안에서 팡팡!",
                        imageURL:
                          "/image/main/menu/beverageDessert/popingCandySundae.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/popingCandySundae.png",
                            title: "팝핑캔디 선데",
                            description: "알록달록 팝핑캔디가 입안에서 팡팡!",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/popingCandySundae.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>팝핑캔디 선데</p>
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
                        linkNM: "음료&디저트",
                        title: "선데",
                        description:
                          "천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림!",
                        imageURL: "/image/main/menu/beverageDessert/sundae.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/sundaeBanilla.png",
                            title: "선데 바닐라",
                            description: "향긋한 바닐라 향 때문에 더 맛있다!",
                          },
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/sundaeChoco.png",
                            title: "선데 초코",
                            description: "달콤하고 진한 초코의 맛!",
                          },
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/sundaeStrawberry.png",
                            title: "선데 딸기",
                            description: "딸기맛의 상큼함이 살아있어요!",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/sundae.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>선데</p>
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
                        linkNM: "음료&디저트",
                        title: "아메리카노",
                        description: "자연을 담은 버거킹 RA인증커피",
                        imageURL:
                          "/image/main/menu/beverageDessert/americanos.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/americano.png",
                            title: "아메리카노",
                            description: "자연을 담은 버거킹 RA인증커피",
                          },
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/iceAmericano.png",
                            title: "아이스아메리카노",
                            description: "자연을 담은 버거킹 RA인증커피",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/americanos.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>아메리카노</p>
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
                        linkNM: "음료&디저트",
                        title: "핫초코",
                        description: "달콤한 초코, 따뜻하게 즐기세요!",
                        imageURL:
                          "/image/main/menu/beverageDessert/hotChoco.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/hotChoco.png",
                            title: "핫초코",
                            description: "달콤한 초코, 따뜻하게 즐기세요!",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/hotChoco.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>핫초코</p>
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
                        linkNM: "음료&디저트",
                        title: "아이스초코",
                        description: "달콤한 초코, 시원하게 즐기세요!",
                        imageURL:
                          "/image/main/menu/beverageDessert/iceChoco.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/iceChoco.png",
                            title: "아이스초코",
                            description: "달콤한 초코, 시원하게 즐기세요!",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/iceChoco.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>아이스초코</p>
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
                        linkNM: "음료&디저트",
                        title: "컵 아이스크림",
                        description:
                          "천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림",
                        imageURL:
                          "/image/main/menu/beverageDessert/cupIceCream.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/cupIceCream.png",
                            title: "컵 아이스크림",
                            description:
                              "천연바닐라빈과 퓨어버터 첨가로 더욱 고급스러운 프리미엄 밀크 아이스크림",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/cupIceCream.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>컵 아이스크림</p>
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
                        linkNM: "음료&디저트",
                        title: "코카콜라",
                        description: "코카-콜라로 더 짜릿하게!",
                        imageURL: "/image/main/menu/beverageDessert/colaL.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/colaL.png",
                            title: "코카콜라(L)",
                            description: "코카-콜라로 더 짜릿하게!",
                          },
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/colaR.png",
                            title: "코카콜라(R)",
                            description: "코카-콜라로 더 짜릿하게!",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/colaL.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>코카콜라</p>
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
                        linkNM: "음료&디저트",
                        title: "코카콜라 제로",
                        description: "100% 짜릿함, 칼로리는 제로!",
                        imageURL:
                          "/image/main/menu/beverageDessert/colaZeroL.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/colaZeroL.png",
                            title: "코카콜라 제로(L)",
                            description: "100% 짜릿함, 칼로리는 제로!",
                          },
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/colaR.png",
                            title: "코카콜라 제로(R)",
                            description: "100% 짜릿함, 칼로리는 제로!",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/colaR.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>코카콜라 제로</p>
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
                        linkNM: "음료&디저트",
                        title: "스프라이트",
                        description: "나를 깨우는 상쾌함!",
                        imageURL:
                          "/image/main/menu/beverageDessert/spriteL.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/spriteL.png",
                            title: "스프라이트(L)",
                            description: "나를 깨우는 상쾌함!",
                          },
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/spriteR.png",
                            title: "스프라이트(L)",
                            description: "나를 깨우는 상쾌함!",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/spriteR.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>스프라이트</p>
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
                        linkNM: "음료&디저트",
                        title: "씨그램",
                        description: "",
                        imageURL:
                          "/image/main/menu/beverageDessert/seaGramR.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/seaGramL.png",
                            title: "씨그램(L)",
                            description: "",
                          },
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/seaGramR.png",
                            title: "씨그램(L)",
                            description: "",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/seaGramR.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>씨그램</p>
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
                        linkNM: "음료&디저트",
                        title: "미닛메이드 오렌지",
                        description: "",
                        imageURL: "/image/main/menu/beverageDessert/orange.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/orange.png",
                            title: "미닛메이드 오렌지",
                            description: "오렌지의 신선함이 가득~",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/orange.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>미닛메이드 오렌지</p>
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
                        linkNM: "음료&디저트",
                        title: "순수(미네랄워터)",
                        description: "깨끗하고 순수한 물",
                        imageURL: "/image/main/menu/beverageDessert/water.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/water.png",
                            title: "순수(미네랄워터)",
                            description: "깨끗하고 순수한 물",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/water.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>순수(미네랄워터)</p>
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
                        linkNM: "음료&디저트",
                        title: "리얼 독퍼",
                        description: "반려견에게 Real Dogpper를 선물하세요!",
                        imageURL:
                          "/image/main/menu/beverageDessert/realDogpper.png",
                        detail: [
                          {
                            imageURL:
                              "/image/main/menu/beverageDessert/realDogpper.png",
                            title: "리얼 독퍼",
                            description:
                              "반려견에게 Real Dogpper를 선물하세요!",
                          },
                        ],
                        returnLink: "/BeverageDessert",
                      })
                    );
                    dispatch(
                      changeWidthNavBarData({
                        HOME: "/home",
                        "음료&디저트": "/BeverageDessert",
                        상세보기: false,
                      })
                    );
                  }}
                >
                  <div>
                    <img
                      src="/image/main/menu/beverageDessert/realDogpper.png"
                      style={{ width: "180px", height: "150px" }}
                    />
                    <p className={"mgt10"}>리얼 독퍼</p>
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

export default BeverageDessert;
