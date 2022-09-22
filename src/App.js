import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Brand from "./pages/Brand";
import Shop from "./pages/Shop";
import Center from "./pages/Center";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import SpecialDiscount from "./pages/menu/SpecialDiscount";
import NewProducts from "./pages/menu/NewProducts";
import Premium from "./pages/menu/Premium";
import WhopperJunior from "./pages/menu/WhopperJunior";
import ChickenShrimp from "./pages/menu/ChickenShrimp";
import AllDayKing from "./pages/menu/AllDayKing";
import SideMenu from "./pages/menu/SideMenu";
import BeverageDessert from "./pages/menu/BeverageDessert";
const App = () => {
  /**
   *리덕스에서 state를 가지고 와서 보여주는 변수
   */
  let reduxState = useSelector((state) => {
    return state;
  });

  /**
   * useDefaultHeaderFooter라는 state는 true,false값이다.
   * true일 경우 Header와 Footer가 존재하며, false일 경우 존재하지 않는다.
   */
  const [useDefaultHeaderFooter, setUseDefaultHeaderFooter] = useState(
    reduxState.useDefaultHeaderFooter
  );

  /**
   * componentDidMount와 componentDidUpdate와 동일한 Hooks
   * 리덕스 state의 변화를 감지해서 해당 페이지의 state값을 수정한다.
   */
  useEffect(() => {
    setUseDefaultHeaderFooter(reduxState.useDefaultHeaderFooter);
  });
  return (
    <div className="App">
      <BrowserRouter>
        {useDefaultHeaderFooter == true ? <Header /> : <></>}
        <Routes>
          {/*메뉴소개 - 스페셜&할인팩, 신제품(NEW), 프리미엄, 와퍼&주니어, 치킨&슈림프버거, 올데이킹, 사이드, 음료&디저트*/}
          <Route path="/SpecialDiscount" element={<SpecialDiscount />}></Route>
          <Route path="/NewProducts" element={<NewProducts />}></Route>
          <Route path="/Premium" element={<Premium />}></Route>
          <Route path="/WhopperJunior" element={<WhopperJunior />}></Route>
          <Route path="/ChickenShrimp" element={<ChickenShrimp />}></Route>
          <Route path="/AllDayKing" element={<AllDayKing />}></Route>
          <Route path="/SideMenu" element={<SideMenu />}></Route>
          <Route path="/BeverageDessert" element={<BeverageDessert />}></Route>

          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Brand" element={<Brand />}></Route>
          <Route path="/Center" element={<Center />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {useDefaultHeaderFooter == true ? <Footer /> : <></>}
      </BrowserRouter>
    </div>
  );
};

export default App;
