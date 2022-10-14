import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeStateFooter, changeStateHeader } from "../../store/Store";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
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
    HOME: "false",
    메뉴소개: false,
  });

  const [carouselItems, setCarouselItems] = useState();

  /**
   * ComponentDidmount와 같은 동작을 하는 Hooks
   * 리덕스의 changeState함수를 호출하여 인자로 true,false를 전달한다.
   * true인 경우 Header와 Footer가 존재, 반대의 경우 Main페이지만 나타난다.
   */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(changeStateHeader(true));
    dispatch(changeStateFooter(true));
    setCarouselItems(makeCarouselData());
  }, []);

  function makeCarouselData() {
    let rawData = [
      {
        title: "image_1",
        imageUrl: "/image/main/home/home_1.png",
      },
      {
        title: "image_2",
        imageUrl: "/image/main/home/home_2.png",
      },
      {
        title: "image_3",
        imageUrl: "/image/main/home/home_3.png",
      },
      {
        title: "image_4",
        imageUrl: "/image/main/home/home_4.png",
      },
      {
        title: "image_5",
        imageUrl: "/image/main/home/home_5.png",
      },
    ];
    let data = [];
    for (let i = 0; i < rawData.length; i++) {
      data.push(
        <Paper>
          <div
            className={
              "row fontBM_MenuName min-w910 background_menuDetail_anotherMenu"
            }
          >
            <img
              title={rawData[i].title}
              src={rawData[i].imageUrl}
              // style={{ width: "180px", height: "150px" }}
            />
          </div>
        </Paper>
      );
    }
    return data;
  }

  return (
    <React.Fragment>
      {/*메인 화면 구성 - START*/}
      {/*Carousel - START*/}
      <div
        className={"row w-full min-w910 gx-0 background_home alignItemsCenter"}
      >
        <div className={"col-1"}></div>
        <div className={"col-10"}>
          <div className={"row"}>
            <div className={"col-12 min-w910"}>
              <Carousel
                autoPlay={true}
                animation={"slide"}
                indicatorContainerProps={{
                  style: {
                    zIndex: 1,
                    marginTop: "-25px",
                    position: "relative",
                  },
                }}
              >
                {carouselItems}
              </Carousel>
            </div>
          </div>
        </div>
        <div className={"col-1"}></div>
      </div>
      {/*Carousel - END*/}
      {/*Youtube - START*/}
      <div
        className={"row w-full min-w910 gx-0 background_home alignItemsCenter"}
      >
        <div className={"col-1"}></div>
        <div className={"col-10"}>
          <div className={"row"}>
            <div className={"col-12 min-w910"}>
              <div style={{ marginRight: "1px" }}>
                <iframe
                  width="100%"
                  height="605"
                  src="https://www.youtube.com/embed/LcMFpQnyFTs"
                  title="[버거킹] 드디어 찾았다! 골든치즈렐라 와퍼 출시!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className={"col-1"}></div>
      </div>
      {/*Youtube - END*/}
      {/* 하단 이미지 2개 - START*/}
      <div
        className={"row w-full min-w910 gx-0 background_home alignItemsCenter"}
        style={{ marginTop: "-6px" }}
      >
        <div className={"col-1"}></div>
        <div className={"col-10"}>
          <div className={"row"}>
            <div className={"col-12 min-w910"}>
              <img
                src="/image/main/home/home_SNS.png"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className={"row min-w910 gx-0"}>
            <div className={"col-6 gx-0"}>
              <img
                id={"howToUsingBurgerKing_1"}
                src="/image/main/home/howToUsingBurgerKing_1.png"
                style={{ width: "100%" }}
                onMouseOver={() => {
                  window.document.getElementById(
                    "howToUsingBurgerKing_1"
                  ).style.cursor = "pointer";
                }}
                onMouseLeave={() => {
                  window.document.getElementById(
                    "howToUsingBurgerKing_1"
                  ).style.cursor = "default";
                }}
              />
            </div>
            <div className={"col-6 gx-0"}>
              <img
                id={"howToUsingBurgerKing_2"}
                src="/image/main/home/howToUsingBurgerKing_2.png"
                style={{ width: "100%" }}
                onMouseOver={() => {
                  window.document.getElementById(
                    "howToUsingBurgerKing_2"
                  ).style.cursor = "pointer";
                }}
                onMouseLeave={() => {
                  window.document.getElementById(
                    "howToUsingBurgerKing_2"
                  ).style.cursor = "default";
                }}
              />
            </div>
          </div>
        </div>
        <div className={"col-1"}></div>
      </div>
      {/* 하단 이미지 2개 - END*/}
      {/* 매장찾기 화면 - START */}
      <div
        className={"row w-full min-w910 gx-0 background_home alignItemsCenter"}
      >
        <div className={"col-1"}></div>
        <div className={"col-10"}>
          <div className={"row background_white gx-0 pt40"}>
            <div
              className={"col-12 min-w910 justify-content-center displayFlex"}
            >
              <span className={"fontBM_Home"}>매장찾기</span>
            </div>
            <div
              className={"col-12 min-w910 justify-content-center displayFlex"}
            >
              <span className={"fontBM_Home_noBold"}>
                고객님 주변에 있는 버거킹을 찾아보세요!
              </span>
            </div>
            <div
              className={"col-12 min-w910 justify-content-center displayFlex"}
            >
              <Link to="/Shop">
                <img src="/image/main/home/findShopHome.png" />
              </Link>
            </div>
            <div
              className={"col-12 min-w910 justify-content-center displayFlex"}
            >
              <img src="/image/main/home/homeDescription.png" width={"100%"} />
            </div>
          </div>
        </div>
        <div className={"col-1"}></div>
      </div>
      {/* 매장찾기 화면 - END */}
      {/*홈 하단 - START*/}
      <div
        className={"row w-full min-w910 gx-0 alignItemsCenter background_home"}
      >
        <div className={"col-1"}></div>
        <div className={"col-10"}>
          <div className={"row"}>
            <div
              className={"col-12 min-w910 justify-content-center displayFlex"}
            >
              <img src="/image/main/home/homeBottom.png" width={"100%"} />
            </div>
          </div>
        </div>
        <div className={"col-1"}></div>
      </div>
      {/*홈 하단 - END*/}
      {/*메인 화면 구성 - END*/}
    </React.Fragment>
  );
};

export default Home;
