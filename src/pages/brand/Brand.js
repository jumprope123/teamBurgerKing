import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeStateFooter, changeStateHeader } from "../../store/Store";
import WidthNavBar from "../../components/main/menu/WidthNavBar";
import BrandNavBar from "../../components/main/brand/BrandNavBar";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Brand = () => {
  const [value, setValue] = useState(0);
  const [whooperValue, setWhooperValue] = useState(0);
  const [brandNavBarData, setBrandNavBarData] = useState("BRAND");

  const location = useLocation();

  useEffect(() => {
    if (location.state == null) {
      location.state = {
        navData: "BRAND",
      };
    }
    if (location.state.navData == "BRAND") {
      setBrandNavBarData("BRAND");
      setWidthNavBarData({
        HOME: "/Home",
        브랜드스토리: "/Brand",
        BRAND: false,
      });
    } else if (location.state.navData == "WHOPPER") {
      setBrandNavBarData("WHOPPER");
      setWidthNavBarData({
        HOME: "/Home",
        브랜드스토리: "/Brand",
        WHOPPER: false,
      });
    } else if (location.state.navData == "COMM") {
      setBrandNavBarData("COMM");
      setWidthNavBarData({
        HOME: "/Home",
        브랜드스토리: "/Brand",
        COMM: false,
      });
    }
  }, [location]);

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
    브랜드스토리: "/Brand",
    BRAND: false,
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
  }, []);

  useEffect(() => {
    if (brandNavBarData == "BRAND") {
      setWidthNavBarData({
        HOME: "/Home",
        브랜드스토리: "/Brand",
        BRAND: false,
      });
    } else if (brandNavBarData === "WHOPPER") {
      setWidthNavBarData({
        HOME: "/Home",
        브랜드스토리: "/Brand",
        WHOPPER: false,
      });
    }
  }, [brandNavBarData]);

  function getChangedBrandNavBar(data) {
    setBrandNavBarData(data);
    if (data == "BRAND") {
      setValue(0);
    } else if (data == "WHOPPER") {
      setWhooperValue(0);
    }
  }

  const BRANDTabContent = useCallback(() => {
    if (value === 0) {
      return (
        <>
          <div className={"row w-full min-w910 gx-0"}>
            <div
              className={"col-12 mgt30 justify-content-center textAlignCenter"}
            >
              <img src={"/image/main/brand/BRAND_1.png"} />
              <div className={"justify-content-center displayFlex mgt30"}>
                <p
                  className={"textAlignLeft fontBM_MenuName"}
                  style={{ width: "1144px" }}
                >
                  세계 최대 QSR(Quick Service Restaurant) 브랜드 중 하나인
                  버거킹은 1954년 미국 마이애미에서 James W.McLamore와 David
                  Edgerton에 의해 설립되었습니다. 버거킹은 현재 100개 이상의
                  국가에서 15,000개 이상의 매장을 운영하고 있습니다. 고기를 팬에
                  굽는 일반 QSR과는 달리, 버거킹은 고기를 직접 불에 구워
                  조리하는 직화 방식 (Flame-Broiling)으로 담백하고 풍부한 맛과
                  향, 그리고 정통 햄버거의 풍미를 선보이고 있습니다. 버거킹의
                  대표 제품인 와퍼(Whopper)는 100% 순 쇠고기 패티와 함께 양상추,
                  토마토, 양파, 피클 등 4가지 신선한 야채가 어우러진 풍부한
                  맛으로 전세계 고객에게 사랑 받고 있습니다.
                </p>
              </div>
            </div>
            <div
              className={"col-12 mgt100 justify-content-center textAlignCenter"}
            >
              <img src={"/image/main/brand/BRAND_2.png"} />
              <div className={"justify-content-center displayFlex mgt30"}>
                <p
                  className={"textAlignLeft fontBM_MenuName"}
                  style={{ width: "1144px" }}
                >
                  <div className={"displayFlex"}>
                    <div className={"fontBM_BRAND"} style={{ width: "30%" }}>
                      버거킹 KOREA
                    </div>
                    <div style={{ width: "70%" }}>
                      버거킹은 지난 1984년 종로점을 오픈하며 한국에 진출한 이래,
                      차별화된 제품과 개성 있는 매장 인테리어로 지난 38년간 한국
                      소비자의 사랑을 받아오고 있습니다. “가장 맛있는 햄버거를
                      제공하는 프리미엄 QSR 브랜드”로 자리매김한 버거킹은 현재
                      전국 440개(2021년 12월 기준) 매장을 운영하고 있습니다.
                      좋은 품질의 제품(Quality)과 친절한 서비스 (Service) 그리고
                      청결한 매장(Cleanliness)은 고객 여러분께 더 큰 만족을
                      드리고자 노력하는 버거킹의 약속이자 가치입니다. 더욱
                      풍성하고 맛있는 제품과 정성을 다하는 고객 서비스로
                      여러분께 더욱 가까이 다가가도록 하겠습니다.
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    } else if (value === 1) {
      return (
        <>
          <div className={"row w-full min-w910 gx-0"}>
            {/*최상단 - START*/}
            <div
              className={"col-12 mgt30 justify-content-center textAlignCenter"}
            >
              <div className={"justify-content-center displayFlex mgt30"}>
                <p
                  className={"textAlignLeft fontBM_MenuName"}
                  style={{ width: "1144px" }}
                >
                  프리미엄 QSR 브랜드 버거킹은 [가장 스마트한 QSR(Smartest QSR)
                  브랜드]를 목표로 주문과 결제, 멤버십 프로그램 등 다양한 고객
                  혜택 제공을 위한 디지털 채널 경쟁력을 바탕으로 현재 한국에서
                  가장 빠르게 성장하고 있습니다.
                </p>
              </div>
            </div>
            {/*최상단 - END*/}
            {/*APP 유투브 - START*/}
            <div
              className={"col-12 mgt50 justify-content-center textAlignCenter"}
            >
              <p className={"textAlignCenter fontBM_BRAND"}>APP</p>
              <iframe
                width="760"
                height="426"
                src="https://www.youtube.com/embed/WGrYm1jb09k"
                title="[버거킹] 200% 즐길 수 있는 버거킹 멤버십 OPEN!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/*APP 유투브 - END*/}
            {/*APP 유투브설명 - START*/}
            <div
              className={"col-12 mgt30 justify-content-center textAlignCenter"}
            >
              <div className={"justify-content-center displayFlex mgt30"}>
                <p
                  className={"textAlignLeft fontBM_MenuName"}
                  style={{ width: "1144px" }}
                >
                  편리한 배달 메뉴의 주문과 결제 서비스인 [딜리버리], 매장 방문
                  전 주문이 가능한 [킹오더]와 멤버십 프로그램을 통하여 최상의
                  고객 경험을 제공하고 있습니다. 누적 다운로드 수 약
                  750만명(2021년 12월 기준)을 달성하였으며, 월간 앱 활성이용자수
                  140만명(2021년 12월 기준)을 기록하는 등 동종QSR업계에서
                  압도적으로 높은 수준을 유지하고 있습니다.
                </p>
              </div>
            </div>
            {/*APP 유투브설명 - END*/}
            {/*멤버십 - START*/}
            <div
              className={"col-12 mgt50 justify-content-center textAlignCenter"}
            >
              <p className={"textAlignCenter fontBM_BRAND"}>MEMBERSHIP</p>
              <img src={"/image/main/brand/membership.png"} />
              <div className={"justify-content-center displayFlex mgt30"}>
                <p
                  className={"textAlignLeft fontBM_MenuName"}
                  style={{ width: "1144px" }}
                >
                  2021년 맞춤화된 고객 혜택 제공을 목표로 [버거킹 멤버십]을
                  런칭하였습니다. 약 240만 명(2021년 12월 기준)의 버거킹 회원을
                  모두 만족시킬 수 있도록 고객 편의성과 혜택, 맞춤형 정보 제공
                  서비스를 제공하고 있습니다.
                </p>
              </div>
            </div>
            {/*멤버십 - END*/}
            {/*키오스크 - START*/}
            <div
              className={"col-12 mgt50 justify-content-center textAlignCenter"}
            >
              <p className={"textAlignCenter fontBM_BRAND"}>KIOSK</p>
              <img src={"/image/main/brand/kiosk.png"} />
              <div className={"justify-content-center displayFlex mgt30"}>
                <p
                  className={"textAlignLeft fontBM_MenuName"}
                  style={{ width: "1144px" }}
                >
                  2016년 처음 무인 단말 시스템인 키오스크를 도입 하였으며,
                  현재는 전국 버거킹 매장의 95%가 키오스크를 보유하고 있습니다
                  이는 전세계 버거킹 진출국 중에서도 최상위 수준에 해당하는
                  수준으로 길었던 매장 주문 대기 시간을 대폭 단축시켰습니다.
                  많은 고객들이 더욱 빠르고 편리하게 버거킹의 프리미엄 가치를
                  경험할 수 있도록 키오스크는 지속적으로 업데이트 되고 있습니다.
                </p>
              </div>
            </div>
            {/*키오스크 - END*/}
          </div>
        </>
      );
    }
  }, [value]);

  const WhopperTabContent = useCallback(() => {
    if (whooperValue === 0) {
      return (
        <>
          <div className={"row w-full min-w910 gx-0"}>
            <div
              className={"col-12 mgt30 justify-content-center textAlignCenter"}
            >
              <img src={"/image/main/brand/ReaWhopper_1.png"} />
              <img
                className={"mgt10"}
                src={"/image/main/brand/ReaWhopper_2.png"}
              />
              <div className={"justify-content-center displayFlex mgt30"}>
                <p
                  className={"textAlignLeft fontBM_BRAND"}
                  style={{ width: "1144px" }}
                >
                  <span>
                    버거킹은 지난 5년간 끊임없이
                    <br />더 건강하고 믿을 수 있는 와퍼를 만들기 위해
                    노력했습니다!
                    <br />
                    와퍼의 모든 재료에 대해 지난 5년간
                    <br />
                    향료, 색소, 보존제, 첨가제 등의 제품 성분 개선 활동을 통해
                    <br />
                    더욱 믿을 수 있고, 더욱 맛있는 리얼 와퍼가 탄생하였습니다!
                    <br />
                    직화로 구운 불맛 100% 순쇠고기 패티에 보다 신선한 채소와
                    <br />
                    믿을 수 있는 재료, 성분들로 완성된 버거킹의 대표 메뉴 와퍼의
                    변신!
                    <br />
                    지금 버거킹에서 리얼와퍼를 만나보세요!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    } else if (whooperValue === 1) {
      return (
        <>
          <div className={"row w-full min-w910 gx-0"}>
            <div
              className={"col-12 mgt30 justify-content-center textAlignCenter"}
            >
              <img src={"/image/main/brand/flame_1.png"} />
              <img
                className={"mgt50"}
                style={{ marginBottom: "-30px" }}
                src={"/image/main/brand/flame_2.png"}
              />
            </div>
          </div>
        </>
      );
    } else if (whooperValue === 2) {
      return (
        <>
          <div className={"row w-full min-w910 gx-0"}>
            <div
              className={"col-12 mgt30 justify-content-center textAlignCenter"}
            >
              <img src={"/image/main/brand/fresh_1.png"} />
              <img
                className={"mgt50"}
                style={{ marginBottom: "-30px" }}
                src={"/image/main/brand/fresh_2.png"}
              />
            </div>
          </div>
        </>
      );
    } else if (whooperValue === 3) {
      return (
        <>
          <div className={"row w-full min-w910 gx-0 mgt50"}>
            <div
              className={"col-12 mgt30 justify-content-center textAlignCenter"}
            >
              <img src={"/image/main/brand/trust_1.png"} />
            </div>
          </div>
        </>
      );
    }
  }, [whooperValue]);

  return (
    <React.Fragment>
      <WidthNavBar WidthNavBarData={widthNavBarData} />
      <BrandNavBar
        getChangedBrandNavBar={getChangedBrandNavBar}
        brandNavBarData={brandNavBarData}
      />
      {/*메인 화면 구성 - START*/}
      {brandNavBarData == "BRAND" && (
        // BRAND 메인화면 - START
        <div className={"mgt30 mgb30"}>
          <div className={"row w-full min-w910 gx-0"}>
            <div className={"col-2"}></div>
            <div className={"col-8"}>
              <Nav
                id={"BRAND_nav"}
                fill
                justify
                className="justify-content-center fontBM_Event_noBold"
                variant="tabs"
                defaultActiveKey="link-0"
                style={{ border: "none" }}
              >
                <Nav.Item>
                  <Nav.Link
                    id={"BRAND_nav0"}
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
                      BRAND philosophy
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    id={"BRAND_nav1"}
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
                      SMART QSR
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <BRANDTabContent />
            </div>
            <div className={"col-2"}></div>
          </div>
        </div>
        // BRAND 메인화면 - END
      )}
      {brandNavBarData == "WHOPPER" && (
        // WHOPPER 메인화면 - START
        <div className={"mgt30 mgb30"}>
          <div className={"row w-full min-w910 gx-0"}>
            <div className={"col-2"}></div>
            <div className={"col-8"}>
              <Nav
                id={"WHOPPER_nav"}
                fill
                justify
                className="justify-content-center fontBM_Event_noBold"
                variant="tabs"
                defaultActiveKey="link-0"
                style={{ border: "none" }}
              >
                <Nav.Item>
                  <Nav.Link
                    id={"WHOPPER_nav0"}
                    eventKey="link-0"
                    className={
                      whooperValue == 0
                        ? "border2pxSolidBlack"
                        : "border2pxSolidBlackBottom"
                    }
                    onClick={() => {
                      setWhooperValue(0);
                    }}
                  >
                    <span
                      className={whooperValue == 0 ? "colorBlack" : "colorGray"}
                    >
                      Real Whopper
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    id={"WHOPPER_nav1"}
                    eventKey="link-1"
                    className={
                      whooperValue == 1
                        ? "border2pxSolidBlack"
                        : "border2pxSolidBlackBottom"
                    }
                    onClick={() => {
                      setWhooperValue(1);
                    }}
                  >
                    <span
                      className={whooperValue == 1 ? "colorBlack" : "colorGray"}
                    >
                      FLAME GRILLED
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    id={"WHOPPER_nav2"}
                    eventKey="link-2"
                    className={
                      whooperValue == 2
                        ? "border2pxSolidBlack"
                        : "border2pxSolidBlackBottom"
                    }
                    onClick={() => {
                      setWhooperValue(2);
                    }}
                  >
                    <span
                      className={whooperValue == 2 ? "colorBlack" : "colorGray"}
                    >
                      신선한 재료
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    id={"WHOPPER_nav3"}
                    eventKey="link-3"
                    className={
                      whooperValue == 3
                        ? "border2pxSolidBlack"
                        : "border2pxSolidBlackBottom"
                    }
                    onClick={() => {
                      setWhooperValue(3);
                    }}
                  >
                    <span
                      className={whooperValue == 3 ? "colorBlack" : "colorGray"}
                    >
                      Trust in Taste
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <WhopperTabContent />
            </div>
            <div className={"col-2"}></div>
          </div>
        </div>
        // WHOPPER 메인화면 - END
      )}
      {/*메인 화면 구성 - END*/}
    </React.Fragment>
  );
};

export default Brand;
