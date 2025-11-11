import React from "react";
import { useEffect, useState } from "react";
import SliderItem from "./SliderItem";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [currentSliderItem, setCurrentSliderItem] = useState(0);
  const prev = () => {
    if (currentSliderItem === 0) {
      setCurrentSliderItem(sliderData.length - 1);
      return;
    }
    setCurrentSliderItem((prev) => prev - 1);
  };

  const next = () => {
    if (currentSliderItem === sliderData.length - 1) {
      setCurrentSliderItem(0);
      return;
    }
    setCurrentSliderItem((prev) => prev + 1);
  };
  useEffect(() => {
    async function fetchSliderProducts() {
      try {
        const res = await fetch(
          "https://671797aeb910c6a6e029066e.mockapi.io/api/ecommerce/slider"
        );
        console.log(res);
        const data = await res.json();
        if (!res.ok) {
          throw new Error("couldn't get the products");
        }
        setSliderData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching your images", error);
      }
    }
    fetchSliderProducts();
  }, []);
  return (
    <div className="slider-container">
      <button
        style={{
          fontSize: "5vh",
          border: "1px solid black",
          backgroundColor: "transparent",
          borderRadius: "50%",
          height: "15vh",
          width: "7vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(2px)",
        }}
        onClick={prev}
      >
        &larr;
      </button>
      <div className="slider-track">
        <SliderItem
          sliderData={sliderData}
          currentItem={
            currentSliderItem === 0
              ? currentSliderItem + (sliderData.length - 1)
              : currentSliderItem - 1
          }
          className={"slider-itemL"}
        />
        <SliderItem sliderData={sliderData} currentItem={currentSliderItem} />
        <SliderItem
          sliderData={sliderData}
          currentItem={
            currentSliderItem === sliderData.length - 1
              ? currentSliderItem - (sliderData.length - 1)
              : currentSliderItem + 1
          }
          className={"slider-itemR"}
        />
      </div>
      <button
        style={{
          fontSize: "5vh",
          border: "1px solid black",
          backgroundColor: "transparent",
          borderRadius: "50%",
          height: "15vh",
          width: "7vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(2px)",
        }}
        onClick={next}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Slider;
