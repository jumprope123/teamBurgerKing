import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeShowDetailDataState } from "../../../store/Store";

const MenuCarousel = (props) => {
  const [carouselItems, setCarouselItems] = useState();
  const [linkNM, setLinkNM] = useState();

  /**
   * 리덕스에서 carousel 값을 가져오기 위한 변수선언
   */
  let reduxMenuCarouselData = useSelector((state) => {
    return state;
  });

  /**
   * 리덕스의 리듀서를 사용하기 위한 변수선언
   */
  let dispatch = useDispatch();

  useEffect(() => {
    let items = reduxMenuCarouselData.menuCarouselData;
    setLinkNM(items[0]["linkNM"]);
    setCarouselItems(makeCarouselData(items));
  }, []);

  function makeCarouselData(items) {
    let data = [];
    if (!(items == null || items == "" || items == undefined)) {
      let cnt = items.length;
      let repeatCnt = Math.floor(cnt / 4) + 1;
      let remainder = cnt % 4;
      if (remainder == 0) {
        repeatCnt -= 1;
      }
      for (let i = 0; i < repeatCnt; i++) {
        data.push(
          <Paper>
            <div
              className={
                "row fontBM_MenuName min-w910 background_menuDetail_anotherMenu"
              }
            >
              {makeInnerData(i, items)}
            </div>
          </Paper>
        );
      }
    }
    return data;
  }

  function makeInnerData(i, items) {
    let data = [];
    let startPoint = i * 4;
    let endPoint = i * 4 + 3;
    if (items.length - 1 < endPoint) {
      endPoint = items.length - 1;
    }
    for (let j = startPoint; j <= endPoint; j++) {
      data.push(
        <div className={"col-3 textAlignCenter mgt30"}>
          <Link
            to={items[j].linkTo}
            className={"textDecorationNone colorBlack"}
            onClick={() => {
              dispatch(changeShowDetailDataState(items[j]));
            }}
          >
            <div>
              <img
                src={items[j].imageSrc}
                style={{ width: "180px", height: "150px" }}
              />
              <p className={"mgt10"}>{items[j].title}</p>
            </div>
          </Link>
        </div>
      );
    }
    return data;
  }

  return (
    <div
      className={
        "row background_menuDetail_anotherMenu w-full min-w910 gx-0 height400 alignItemsCenter"
      }
    >
      <div className={"col-2"}></div>
      <div className={"col-8"}>
        <div className={"row"}>
          <div className={"fontBM_detail_menuOne_big textAlignCenter min-w910"}>
            {linkNM}의 다른 메뉴
          </div>
          <div className={"col-12 min-w910"}>
            <Carousel autoPlay={false} animation={"slide"}>
              {carouselItems}
            </Carousel>
          </div>
        </div>
      </div>
      <div className={"col-2"}></div>
    </div>
  );
};

export default MenuCarousel;
