import React from "react";
import { useEffect } from "react";

const SliderItem = ({ sliderData, currentItem, className }) => {
  return (
    <div className={`slider-item ${className}`}>
      <img src={`../images/${sliderData[currentItem]?.image}.png`} />
      <div style={{ fontSize: "5vh" }}>{sliderData[currentItem]?.title}</div>
      <div style={{ fontWeight: "300", fontSize: "2vh" }}>
        {sliderData[currentItem]?.description} - $
        {sliderData[currentItem]?.price}
      </div>
    </div>
  );
};

export default SliderItem;
