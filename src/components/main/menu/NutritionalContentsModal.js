import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "@mui/material";
import {
  faCaretDown,
  faShieldHalved,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NutritionalContentsModal = forwardRef((props, ref) => {
  const [openModal, setOpenModal] = useState(false);

  useImperativeHandle(ref, () => ({
    onOpen,
  }));

  function onOpen() {
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
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
            style={{ width: "760px", height: "100px" }}
          >
            <div
              className={"displayFlex alignItemsCenter mgl20"}
              style={{ width: "85%" }}
            >
              <div className={"fontBM_MenuModal mgt10"}>
                원산지,영양성분,알레르기 유발성분
              </div>
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
            style={{ width: "760px", height: "670px" }}
          >
            <div className={"displayBlock"}>
              <div
                className={"background_white mgt10 borderRadius15"}
                style={{ width: "660px", height: "500px" }}
              >
                <img
                  className={"mgt10"}
                  src={"/image/main/menu/menuDetailModal/scroll_image_1.png"}
                />
              </div>
              <div
                className={"background_white mgt10 borderRadius15"}
                style={{ width: "660px", height: "400px" }}
              >
                <img
                  className={"mgt10"}
                  src={"/image/main/menu/menuDetailModal/scroll_image_2.png"}
                />
              </div>
              <div
                className={"background_white mgt10 borderRadius15"}
                style={{ width: "660px", height: "420px" }}
              >
                <img
                  className={"mgt10"}
                  src={"/image/main/menu/menuDetailModal/scroll_image_3.png"}
                />
              </div>
              <div
                className={"background_white mgt10 borderRadius15"}
                style={{ width: "660px", height: "270px" }}
              >
                <img
                  className={"mgt10"}
                  src={"/image/main/menu/menuDetailModal/scroll_image_4.png"}
                />
              </div>
              {/*하단 마진을 위한 div*/}
              <div style={{ height: "20px" }}></div>
            </div>
          </div>
          {/*모달창 하단 타이틀 - END */}
        </div>
      </div>
    </Modal>
  );
});

export default NutritionalContentsModal;
