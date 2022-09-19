import React, { useState } from "react";
import WidthNavBar from "../../components/WidthNavBar";

const SpecialDiscount = () => {
  const [widthNavBarData, setWidthNavBarData] = useState({
    HOME: "home",
    메뉴소개: false,
  });

  return (
    <React.Fragment>
      <WidthNavBar WidthNavBarData={widthNavBarData} />
      dd
    </React.Fragment>
  );
};

export default SpecialDiscount;
