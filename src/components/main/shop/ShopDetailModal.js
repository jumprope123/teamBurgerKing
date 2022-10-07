import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "@mui/material";
import {
  faCaretDown,
  faShieldHalved,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShopDetailModalRef = forwardRef((props, ref) => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [tel, setTel] = useState();
  const [icon, setIcon] = useState();

  useImperativeHandle(ref, () => ({
    onOpen,
  }));

  function onOpen(data) {
    setOpenModal(true);
    setName(data["name"]);
    setAddress(data["address"]);
    setTel(data["tel"]);
    setIcon(data["icon"]);
  }

  function handleClose() {
    setOpenModal(false);
  }

  function makeIcon(data) {
    if (data["icon"] != undefined) {
      let result = [];
      data["icon"].map((item) => {
        let iconText = "";
        switch (item) {
          case "/image/main/shop/24Hours.png":
            iconText = "24시간";
            break;
          case "/image/main/shop/delivery.png":
            iconText = "딜리버리";
            break;
          case "/image/main/shop/drive.png":
            iconText = "드라이브스루";
            break;
          case "/image/main/shop/kingOrder.png":
            iconText = "킹오더";
            break;
          case "/image/main/shop/morningMenu.png":
            iconText = "모닝메뉴";
            break;
          case "/image/main/shop/parking.png":
            iconText = "주차";
            break;
        }
        result.push(
          <div className={"mgt30"}>
            <img src={item} />
            <span className={"fontBM_menuDetail mgl10"}>
              {iconText}&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        );
      });
      return result;
    }
  }

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        className={
          "displayFlex justify-content-center alignItemsCenter textAlignCenter w-full h-full"
        }
      >
        <div>
          {/*모달창 상단 타이틀 - START */}
          <div
            className={"background_white displayFlex"}
            style={{ width: "560px", height: "100px" }}
          >
            <div
              className={"displayFlex alignItemsCenter mgl20"}
              style={{ width: "85%" }}
            >
              <div className={"fontBM_MenuModal mgt10"}>{name}</div>
            </div>
            <div
              id={"modalClose"}
              className={
                "displayFlex justify-content-center alignItemsCenter textAlignCenter"
              }
              style={{ width: "15%" }}
              onClick={() => {
                setOpenModal(false);
              }}
              onMouseOver={() => {
                window.document.getElementById("modalClose").style.cursor =
                  "pointer";
              }}
              onMouseLeave={() => {
                window.document.getElementById("modalClose").style.cursor =
                  "default";
              }}
            >
              <FontAwesomeIcon icon={faXmark} className={"ft40"} />
            </div>
          </div>
          {/*모달창 상단 타이틀 - END */}
          {/*모달창 하단 타이틀 - START */}
          <div
            className={
              "background_whitePink displayFlex justify-content-center textAlignCenter overFlowYScroll"
            }
            style={{ width: "560px", height: "400px" }}
          >
            <div className={"displayBlock"}>
              <div
                className={"background_white mgt15 borderRadius15"}
                style={{ width: "500px", height: "370px" }}
              >
                <div className={"displayFlex mgl25 mgr25"}>
                  {makeIcon({ icon })}
                </div>
                <div
                  className={"mgt30 mgb30 mgl25 mgr25"}
                  style={{ borderBottom: "1px dashed #E0E0E0" }}
                ></div>
                <div className={"textAlignLeft"}>
                  <div className={"row"}>
                    <div className={"col-1"}></div>
                    <div className={"col-3 fontBM_shopDetailModal"}>주소</div>
                    <div className={"col-8 fontBM_menuDetail"}>{address}</div>
                  </div>
                  <div className={"row mgt25"}>
                    <div className={"col-1"}></div>
                    <div className={"col-3 fontBM_shopDetailModal"}>연락처</div>
                    <div className={"col-8 fontBM_menuDetail"}>{tel}</div>
                  </div>
                  <div className={"row mgt25"}>
                    <div className={"col-1"}></div>
                    <div className={"col-3 fontBM_shopDetailModal"}>
                      이용시간
                    </div>
                    <div className={"col-8 fontBM_menuDetail"}>
                      <div className={"row gx-0"}>
                        매장: 연중무휴(09:00~24:00)
                      </div>
                      <div className={"row gx-0"}>딜리버리: 09:00 - 23:59</div>
                      <div className={"row gx-0"}>킹오더: 09:00 - 23:45</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*모달창 하단 타이틀 - END */}
          {/* 저장버튼 - START */}
          <div
            id={"OkButton"}
            className={
              "background_red displayFlex justify-content-center alignItemsCenter colorWhite fontBM_header"
            }
            onClick={() => {
              setOpenModal(false);
            }}
            onMouseOver={() => {
              window.document.getElementById("OkButton").style.cursor =
                "pointer";
            }}
            onMouseLeave={() => {
              window.document.getElementById("OkButton").style.cursor =
                "default";
            }}
            style={{ width: "560px", height: "100px" }}
          >
            확인
          </div>
          {/* 저장버튼 - END */}
        </div>
      </div>
    </Modal>
  );
});

export default ShopDetailModalRef;
