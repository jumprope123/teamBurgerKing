import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MenuCarousel = (props) => {
  const [carouselItems, setCarouselItems] = useState();

  useEffect(() => {
    let items = [
      {
        linkTo: "/showDetail",
        imageSrc: "/image/main/menu/specialDiscount/goldencheesepack1.png",
        imageNM: "골든치즈렐라 팩1",
      },
      {
        linkTo: "/showDetail",
        imageSrc: "/image/main/menu/specialDiscount/goldencheesepack2.png",
        imageNM: "골든치즈렐라 팩2",
      },
      {
        linkTo: "/showDetail",
        imageSrc: "/image/main/menu/specialDiscount/goldencheesepack3.png",
        imageNM: "골든치즈렐라 팩3",
      },
      {
        linkTo: "/showDetail",
        imageSrc: "/image/main/menu/specialDiscount/goldencheesepack4.png",
        imageNM: "골든치즈렐라 팩4",
      },
    ];
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
    console.log(data);
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
          >
            <div>
              <img
                src={items[j].imageSrc}
                style={{ width: "180px", height: "150px" }}
              />
              <p className={"mgt10"}>{items[j].imageNM}</p>
            </div>
          </Link>
        </div>
      );
    }
    console.log(data);
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
            스페셜&할인팩의 다른 메뉴
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
