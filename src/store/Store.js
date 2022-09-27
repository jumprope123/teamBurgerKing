import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * 기본적인 헤더와 푸터를 사용할지를 결정하는 변수
 */
let useDefaultHeaderFooter = createSlice({
  name: "useDefaultHeaderFooter",
  initialState: true,
  reducers: {
    changeState(oldState, newState) {
      return newState.payload;
    },
  },
});

/**
 * showDetail.js파일이 열릴때 보내줄 title, imageURL, description, 메뉴목록으로돌아가기 link
 */
let showDetailData = createSlice({
  name: "showDetailData",
  initialState: {
    title: "골든치즈렐라 팩1",
    description: "",
    imageURL:
      "/image/main/menu/specialDiscount/detail_big_goldencheeselella.png",
    detail: [
      {
        imageURL:
          "/image/main/menu/specialDiscount/detail_big_goldencheeselella.png",
        title: "골든치즈렐라 팩1",
        description:
          "골든치즈렐라와퍼+골든치즈렐라치킨버거+크리미모짜볼5조각+너겟킹4조각+콜라R2",
      },
    ],
    returnLink: "/SpecialDiscount",
  },
  reducers: {
    changeShowDetailDataState(oldState, newState) {
      return newState.payload;
    },
  },
});

let menuCarouselData = createSlice({
  name: "menuCarouselData",
  initialState: [
    {
      linkTo: "/ShowDetail",
      imageSrc: "/image/main/menu/specialDiscount/goldencheesepack1.png",
      // imageNM: "골든치즈렐라 팩1",
      title: "골든치즈렐라 팩1",
      description: "",
      imageURL:
        "/image/main/menu/specialDiscount/detail_big_goldencheeselella.png",
      detail: [
        {
          imageURL:
            "/image/main/menu/specialDiscount/detail_big_goldencheeselella.png",
          title: "골든치즈렐라 팩1",
          description:
            "골든치즈렐라와퍼+골든치즈렐라치킨버거+크리미모짜볼5조각+너겟킹4조각+콜라R2",
        },
      ],
      returnLink: "/SpecialDiscount",
    },
    {
      linkTo: "/ShowDetail",
      imageSrc: "/image/main/menu/specialDiscount/goldencheesepack2.png",
      // imageNM: "골든치즈렐라 팩2",
      title: "골든치즈렐라 팩2",
      description: "",
      imageURL: "/image/main/menu/specialDiscount/goldencheesepack2.png",
      detail: [
        {
          imageURL: "/image/main/menu/specialDiscount/goldencheesepack2.png",
          title: "골든치즈렐라 팩2",
          description:
            "골든치즈렐라와퍼+치즈와퍼+ 크리미모짜볼5조각+너겟킹4조각+콜라R2",
        },
      ],

      returnLink: "/SpecialDiscount",
    },
    {
      linkTo: "/ShowDetail",
      imageSrc: "/image/main/menu/specialDiscount/goldencheesepack3.png",
      // imageNM: "골든치즈렐라 팩3",
      title: "골든치즈렐라 팩3",
      description: "",
      imageURL: "/image/main/menu/specialDiscount/goldencheesepack3.png",
      detail: [
        {
          imageURL: "/image/main/menu/specialDiscount/goldencheesepack3.png",
          title: "골든치즈렐라 팩3",
          description:
            "골든치즈렐라와퍼+갈릭불고기와퍼+ 크리미모짜볼5조각+너겟킹4조각+콜라R2",
        },
      ],
      returnLink: "/SpecialDiscount",
    },
    {
      linkTo: "/ShowDetail",
      imageSrc: "/image/main/menu/specialDiscount/goldencheesepack4.png",
      // imageNM: "골든치즈렐라 팩4",
      title: "골든치즈렐라 팩4",
      description: "",
      imageURL: "/image/main/menu/specialDiscount/goldencheesepack4.png",
      detail: [
        {
          imageURL: "/image/main/menu/specialDiscount/goldencheesepack4.png",
          title: "골든치즈렐라 팩4",
          description:
            "골든치즈렐라치킨버거+콰트로치즈와퍼+ 크리미모짜볼5조각+너겟킹4조각+콜라R2",
        },
      ],

      returnLink: "/SpecialDiscount",
    },
  ],
  reducers: {
    changeMenuCarouselData(oldState, newState) {
      return newState.payload;
    },
  },
});

let widthNavBarData = createSlice({
  name: "widthNavBarData",
  initialState: {
    HOME: "/home",
    메뉴소개: false,
  },
  reducers: {
    changeWidthNavBarData(oldState, newState) {
      return newState.payload;
    },
  },
});

export let { changeState } = useDefaultHeaderFooter.actions;
export let { changeShowDetailDataState } = showDetailData.actions;
export let { changeMenuCarouselData } = menuCarouselData.actions;
export let { changeWidthNavBarData } = widthNavBarData.actions;

export default configureStore({
  reducer: {
    useDefaultHeaderFooter: useDefaultHeaderFooter.reducer,
    showDetailData: showDetailData.reducer,
    menuCarouselData: menuCarouselData.reducer,
    widthNavBarData: widthNavBarData.reducer,
  },
});
