import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeStateFooter, changeStateHeader } from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import EventNavBar from "../../components/main/Event/EventNavBar";
import { Nav } from "react-bootstrap";
import EventNavBarOnlyTitle from "../../components/main/Event/EventNavBarOnlyTitle";
import { Link } from "react-router-dom";
import ShowMore from "react-show-more-list";
import { faCaretDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = () => {
  const [value, setValue] = useState(0);

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
    HOME: "/Home",
    이벤트: "/Event",
    전체: false,
  });

  const [mainData, setMainData] = useState([
    {
      url: "/image/main/event/event_1.png",
      date: "2022.10.17~2022.11.27",
    },
    {
      url: "/image/main/event/event_2.png",
      date: "2022.10.17~2022.10.30",
    },
    {
      url: "/image/main/event/event_3.png",
      date: "2022.10.17~2022.10.23",
    },
    {
      url: "/image/main/event/event_4.png",
      date: "2022.10.17~2022.10.23",
    },
    {
      url: "/image/main/event/event_5.png",
      date: "2022.10.10~2022.11.16",
    },
    {
      url: "/image/main/event/event_6.png",
      date: "2022.10.10~2022.11.16",
    },
    {
      url: "/image/main/event/event_7.png",
      date: "2022.10.04~2022.11.10",
    },
    {
      url: "/image/main/event/event_8.png",
      date: "2022.09.19~2022.11.27",
    },
    {
      url: "/image/main/event/event_9.png",
      date: "2022.08.08~",
    },
    {
      url: "/image/main/event/event_10.png",
      date: "2022.04.04~",
    },
    {
      url: "/image/main/event/event_11.png",
      date: "2020.07.10~",
    },
  ]);

  const [newShopData, setNewShopData] = useState([
    {
      url: "/image/main/event/newShop_1.png",
      date: "2022.09.22~",
    },
    {
      url: "/image/main/event/newShop_2.png",
      date: "2022.09.16~",
    },
    {
      url: "/image/main/event/newShop_3.png",
      date: "2022.09.15~",
    },
    {
      url: "/image/main/event/newShop_4.png",
      date: "2022.09.07~",
    },
    {
      url: "/image/main/event/newShop_5.png",
      date: "2022.07.29~",
    },
    {
      url: "/image/main/event/newShop_6.png",
      date: "2022.07.26~",
    },
    {
      url: "/image/main/event/newShop_7.png",
      date: "2022.06.30~",
    },
    {
      url: "/image/main/event/newShop_8.png",
      date: "2022.06.28~",
    },
    {
      url: "/image/main/event/newShop_9.png",
      date: "2022.05.31~",
    },
    {
      url: "/image/main/event/newShop_10.png",
      date: "2022.05.26~",
    },
    {
      url: "/image/main/event/newShop_11.png",
      date: "2022.05.17~",
    },
    {
      url: "/image/main/event/newShop_12.png",
      date: "2022.05.06~",
    },
    {
      url: "/image/main/event/newShop_13.png",
      date: "2022.05.03~",
    },
    {
      url: "/image/main/event/newShop_14.png",
      date: "2022.04.28~",
    },
    {
      url: "/image/main/event/newShop_15.png",
      date: "2022.04.07~",
    },
    {
      url: "/image/main/event/newShop_16.png",
      date: "2022.03.31~",
    },
    {
      url: "/image/main/event/newShop_17.png",
      date: "2022.03.24~",
    },
    {
      url: "/image/main/event/newShop_18.png",
      date: "2022.03.10~",
    },
    {
      url: "/image/main/event/newShop_19.png",
      date: "2022.03.08~",
    },
    {
      url: "/image/main/event/newShop_20.png",
      date: "2022.02.24~",
    },
    {
      url: "/image/main/event/newShop_21.png",
      date: "2022.02.17~",
    },
    {
      url: "/image/main/event/newShop_22.png",
      date: "2022.02.04~",
    },
    {
      url: "/image/main/event/newShop_23.png",
      date: "2021.12.31~",
    },
    {
      url: "/image/main/event/newShop_24.png",
      date: "2021.12.30~",
    },
    {
      url: "/image/main/event/newShop_25.png",
      date: "2021.12.31~",
    },
    {
      url: "/image/main/event/newShop_26.png",
      date: "2021.12.23~",
    },
    {
      url: "/image/main/event/newShop_27.png",
      date: "2021.12.24~",
    },
    {
      url: "/image/main/event/newShop_28.png",
      date: "2021.12.23~",
    },
    {
      url: "/image/main/event/newShop_29.png",
      date: "2021.12.21~",
    },
    {
      url: "/image/main/event/newShop_30.png",
      date: "2021.12.15~",
    },
  ]);

  /**
   * ComponentDidmount와 같은 동작을 하는 Hooks
   * 리덕스의 changeState함수를 호출하여 인자로 true,false를 전달한다.
   * true인 경우 Header와 Footer가 존재, 반대의 경우 Main페이지만 나타난다.
   */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(changeStateHeader(true));
    dispatch(changeStateFooter(true));
  }, []);

  function getChangedEventNavBar(data) {
    if (data == "All") {
      setWidthNavBarData({
        HOME: "/Home",
        이벤트: "/Event",
        전체: false,
      });
      setMainData([
        {
          url: "/image/main/event/event_1.png",
          date: "2022.10.17~2022.11.27",
        },
        {
          url: "/image/main/event/event_2.png",
          date: "2022.10.17~2022.10.30",
        },
        {
          url: "/image/main/event/event_3.png",
          date: "2022.10.17~2022.10.23",
        },
        {
          url: "/image/main/event/event_4.png",
          date: "2022.10.17~2022.10.23",
        },
        {
          url: "/image/main/event/event_5.png",
          date: "2022.10.10~2022.11.16",
        },
        {
          url: "/image/main/event/event_6.png",
          date: "2022.10.10~2022.11.16",
        },
        {
          url: "/image/main/event/event_7.png",
          date: "2022.10.04~2022.11.10",
        },
        {
          url: "/image/main/event/event_8.png",
          date: "2022.09.19~2022.11.27",
        },
        {
          url: "/image/main/event/event_9.png",
          date: "2022.08.08~",
        },
        {
          url: "/image/main/event/event_10.png",
          date: "2022.04.04~",
        },
        {
          url: "/image/main/event/event_11.png",
          date: "2020.07.10~",
        },
      ]);
    } else if (data == "Ing") {
      setWidthNavBarData({
        HOME: "/Home",
        이벤트: "/Event",
        진행중: false,
      });
      setMainData([
        {
          url: "/image/main/event/event_1.png",
          date: "2022.10.17~2022.11.27",
        },
        {
          url: "/image/main/event/event_2.png",
          date: "2022.10.17~2022.10.30",
        },
        {
          url: "/image/main/event/event_3.png",
          date: "2022.10.17~2022.10.23",
        },
        {
          url: "/image/main/event/event_4.png",
          date: "2022.10.17~2022.10.23",
        },
        {
          url: "/image/main/event/event_8.png",
          date: "2022.09.19~2022.11.27",
        },
        {
          url: "/image/main/event/event_9.png",
          date: "2022.08.08~",
        },
        {
          url: "/image/main/event/event_10.png",
          date: "2022.04.04~",
        },
        {
          url: "/image/main/event/event_11.png",
          date: "2020.07.10~",
        },
      ]);
    } else {
      setWidthNavBarData({
        HOME: "/Home",
        이벤트: "/Event",
        종료: false,
      });
      setMainData([
        {
          url: "/image/main/event/event_5.png",
          date: "2022.10.10~2022.11.16",
        },
        {
          url: "/image/main/event/event_6.png",
          date: "2022.10.10~2022.11.16",
        },
        {
          url: "/image/main/event/event_7.png",
          date: "2022.10.04~2022.11.10",
        },
      ]);
    }
  }

  const EventTabContent = useCallback(() => {
    if (value === 0) {
      return (
        <>
          <div className={"row w-full min-w910 gx-0"}>
            {mainData.map((item) => {
              return (
                <div
                  className={
                    "col-6 mgt30 justify-content-center textAlignCenter fontBM_btn_menuDetail"
                  }
                >
                  <div>
                    <Link to="/eventDetail" className={"textDecorationNone"}>
                      <img src={item.url} />
                    </Link>
                  </div>
                  <div className={"mgt10"}>{item.date}</div>
                </div>
              );
            })}
          </div>
        </>
      );
    } else if (value === 1) {
      return (
        <>
          <ShowMore
            items={newShopData}
            by={5}
            onEnd={() => {
              console.log("end of the list");
            }}
          >
            {({ current, onMore }) => (
              <div className={"row w-full min-w910 gx-0"}>
                {/*반복문 - START*/}
                {current.map((item) => {
                  return (
                    <div
                      className={
                        "col-6 mgt30 justify-content-center textAlignCenter fontBM_btn_menuDetail"
                      }
                    >
                      <div>
                        <Link
                          to="/eventDetail"
                          className={"textDecorationNone"}
                        >
                          <img src={item.url} />
                        </Link>
                      </div>
                      <div className={"mgt10"}>{item.date}</div>
                    </div>
                  );
                })}
                {/*반복문 - END*/}
                <div className={"row w-full min-w910 gx-0"}>
                  <div className={"col-5"}></div>
                  <div className={"col-2"}>
                    <button
                      className={
                        "fontBM_Event_noBold colorWhite background_brown borderRadius15"
                      }
                      style={{ width: "100%", height: "70px" }}
                      disabled={!onMore}
                      onClick={() => {
                        if (!!onMore) onMore();
                      }}
                    >
                      <div className={"justify-content-center displayFlex"}>
                        <span>더보기&nbsp;&nbsp;</span>
                        <span style={{ marginTop: "2px" }}>
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ fontWeight: "bold" }}
                          />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className={"col-5"}></div>
                </div>
              </div>
            )}
          </ShowMore>
        </>
      );
    }
  }, [value, mainData]);

  return (
    <React.Fragment>
      <WidthNavBar WidthNavBarData={widthNavBarData} />
      {value == 0 ? (
        <EventNavBar getChangedEventNavBar={getChangedEventNavBar} />
      ) : (
        <EventNavBarOnlyTitle />
      )}

      {/*메인 화면 구성 - START*/}
      <div className={"mgt30 mgb30"}>
        <div className={"row w-full min-w910 gx-0"}>
          <div className={"col-2"}></div>
          <div className={"col-8"}>
            <Nav
              id={"EventNav"}
              fill
              justify
              className="justify-content-center fontBM_Event_noBold"
              variant="tabs"
              defaultActiveKey="link-0"
              style={{ border: "none" }}
            >
              <Nav.Item>
                <Nav.Link
                  id={"nav0"}
                  eventKey="link-0"
                  className={
                    value == 0
                      ? "border2pxSolidBlack"
                      : "border2pxSolidBlackBottom"
                  }
                  onClick={() => {
                    setValue(0);
                  }}
                >
                  <span className={value == 0 ? "colorBlack" : "colorGray"}>
                    이벤트
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  id={"nav1"}
                  eventKey="link-1"
                  className={
                    value == 1
                      ? "border2pxSolidBlack"
                      : "border2pxSolidBlackBottom"
                  }
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  <span className={value == 1 ? "colorBlack" : "colorGray"}>
                    신규매장
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <EventTabContent />
          </div>
          <div className={"col-2"}></div>
        </div>
      </div>
      {/*메인 화면 구성 - END*/}
    </React.Fragment>
  );
};

export default Shop;
