import ShoppingCart from "../components/ShoppingCart";
import { useState, useEffect, useRef } from "react";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

export default function HomePageBackground({ isCartOpen }) {
  const imagesArr = [
    "https://www.allbirds.com/cdn/shop/files/25Q4_Waterproof_Site_Homepage_ColorGrid-ALT01-01_Desktop-Mobile_1x1_bc3a6cb2-47b7-403a-ad81-a8f3796c49d7.jpg?v=1758839464&width=1024",
    "./images/waterprooftopright.webp",
    "./images/waterproofmiddle.jpg",
    "./images/waterproofmiddleright.webp",
    "https://www.allbirds.com/cdn/shop/files/25Q4_Waterproof_Site_Homepage_ColorGrid-ALT01-05_Desktop-Mobile_1x1_510de0d5-863a-472e-8015-e7563182553f.jpg?v=1758839464&width=1024",
    "https://www.allbirds.com/cdn/shop/files/preview_images/1374bab800f44ef7ad7f52f973d8f340.thumbnail.0000000000.jpg?v=1758838612&width=1024",
  ];

  const [isVisible, setIsVisible] = useState(
    new Array(imagesArr.length).fill(false)
  );
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = imgRefs.current.indexOf(entry.target);
        if (index !== -1) {
          setIsVisible((prev) => {
            const updated = [...prev];
            updated[index] = entry.isIntersecting;
            return updated;
          });
        }
      });
    });
    imgRefs.current.forEach((img) => img && observer.observe(img));
    return () => observer.disconnect();
  });
  return (
    <>
      <div className="HomePageContainer">
        <img
          src="./images/homePageImage.png"
          alt="Not found"
          style={{ width: "100%" }}
        ></img>
        ;
        <div className="homePageBackgroundButtons">
          <button className="bg-btn">SHOP MEN</button>
          <button className="bg-btn">SHOP WOMEN</button>
        </div>
      </div>
      <div className="tripleImagesContainer">
        <div className="miniTripleImagesContainer">
          <div className="tripleText">
            <span className="tripleShoeName ">Wool Runner Go </span>
            <div>Sublimely Soft, Everyday Elevated</div>
          </div>
          <img
            src="./images/image1.png"
            alt="not found"
            className="triples"
          ></img>
        </div>
        <div className="miniTripleImagesContainer">
          <div className="tripleText">
            <span className="tripleShoeName">Wool Runner Mizzle</span>
            <div> Weather-ready, Everyday Sneaker</div>
          </div>
          <video autoPlay loop muted playsInline className="triples">
            <source src="./images/walkingBy.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="miniTripleImagesContainer">
          <div className="tripleText">
            <span className="tripleShoeName">Tree Dasher 2</span>
            <div> Bouncy, Lightweight, Active Shoe</div>
          </div>
          <img
            src="./images/image3.png"
            alt="not found"
            className="triples"
          ></img>
        </div>
      </div>
      <Slider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "6vh",
          fontWeight: "200",
        }}
      >
        <div>OUR FIRST-EVER FULLY WATERPROOF COLLECTION</div>
        <div className="grid-container">
          {isVisible ? (
            <>
              {imagesArr.map((src, i) => (
                <img
                  key={i}
                  ref={(el) => (imgRefs.current[i] = el)}
                  src={isVisible[i] ? src : ""}
                  alt="loading"
                  className={`grid-item item--${i + 1} ${
                    isVisible[i] ? "grid-loaded" : "grid-loading"
                  } `}
                />
              ))}
            </>
          ) : (
            <>
              <div className="placeholder-for-grid-item item--1">
                <span className="cross">X</span>
              </div>
              <div className="placeholder-for-grid-item item--2">
                <span className="cross">X</span>
              </div>
              <div className="placeholder-for-grid-item item--3">
                <span className="cross">X</span>
              </div>
              <div className="placeholder-for-grid-item item--4">
                <span className="cross">X</span>
              </div>
              <div className="placeholder-for-grid-item item--5">
                <span className="cross">X</span>
              </div>
              <div className="placeholder-for-grid-item item--6">
                <span className="cross">X</span>
              </div>
              <div className="placeholder-for-grid-item item--7">
                <span className="cross">X</span>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1%",
          height: "25vh",
          fontWeight: "220",
          paddingTop: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10%",
            backgroundColor: "white",
            borderRadius: "5%",
            padding: "2%",
          }}
        >
          <p style={{ fontSize: "0.9rem" }}>Wear All Day Comfort</p>
          <p style={{ fontSize: "0.7rem" }}>
            Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any
            outing feel effortless. Slip in, lace up, or slide them on and enjoy
            the comfy support.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10%",
            backgroundColor: "white",
            borderRadius: "5%",
            padding: "2%",
          }}
        >
          <p style={{ fontSize: "0.9rem" }}>Sustainability In Every Step</p>
          <p style={{ fontSize: "0.7rem" }}>
            From materials to transport, we’re working to reduce our carbon
            footprint to near zero. Holding ourselves accountable and striving
            for climate goals isn’t a 30-year goal—it’s now.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10%",
            backgroundColor: "white",
            borderRadius: "5%",
            padding: "2%",
          }}
        >
          <p style={{ fontSize: "0.9rem" }}>Materials From The Earth</p>
          <p style={{ fontSize: "0.7rem" }}>
            We replace petroleum-based synthetics with natural alternatives
            wherever we can. Like using wool, tree fiber, and sugarcane. They’re
            soft, breathable, and better for the planet—win, win, win.
          </p>
        </div>
      </div>
      <div style={{ paddingTop: "2%" }}>
        <Footer />
      </div>
    </>
  );
}
