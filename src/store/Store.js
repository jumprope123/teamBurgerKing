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

export let { changeState } = useDefaultHeaderFooter.actions;
export let { changeShowDetailDataState } = showDetailData.actions;

export default configureStore({
  reducer: {
    useDefaultHeaderFooter: useDefaultHeaderFooter.reducer,
    showDetailData: showDetailData.reducer,
  },
});
