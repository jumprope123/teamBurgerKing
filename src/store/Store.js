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

export let { changeState } = useDefaultHeaderFooter.actions;

export default configureStore({
  reducer: {
    useDefaultHeaderFooter: useDefaultHeaderFooter.reducer,
  },
});
