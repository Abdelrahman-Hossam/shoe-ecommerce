import { useState, useEffect } from "react";

export default function Banner() {
  const [index, setIndex] = useState(0);

  function autoNextBanner() {
    setTimeout(() => {
      setIndex((current) => (current === 2 ? 0 : current + 1));
    }, 8000);
  }

  useEffect(() => {
    autoNextBanner();
  }, [index]);

  function handleNextBanner() {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  }

  return (
    <div className="banner">
      <div className={`bannerSentence`}>
        {index === 0 && (
          <div>
            Our Newest Neutrals Are Here: Stony Vibes To Ground Any Look.{" "}
            <a href="#">Shop Men</a> | <a href="#">Shop Women</a>
          </div>
        )}
        {index === 1 && (
          <div>Free Shipping On Orders Over 75$.Easy Returns.</div>
        )}
        {index === 2 && (
          <div>
            Brand New Shoe Drop:Elevate Your Look With The Lounger Lift.{" "}
            <a href="#">Shop Now</a>
          </div>
        )}
      </div>
      <button onClick={handleNextBanner} className="bannerRightArrow">
        &rarr;
      </button>
    </div>
  );
}
