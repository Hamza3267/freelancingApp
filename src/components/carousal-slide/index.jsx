import React, { useState } from "react";
import Style from "./carousal.module.scss";
import pic1 from '../../assets/images/carosal1.webp'
import pic2 from '../../assets/images/carosal2.webp'
import pic3 from '../../assets/images/carosal3.webp'

const slides = [
  { image: pic1 },
  { image: pic2 },
  { image: pic3 },
  { image: pic3 },
];

const CardSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={Style.carousel}>
      <div className={Style.carouselItems}>
        {slides.map((e, index) => (
          <div key={index} className={`${Style.icon} ${index === activeSlide ? Style.active : ''}`}>
            <img src={e.image} alt="" className={Style.img} />
          </div>
        ))}
      </div>

      <div className={Style.dotSlider}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${Style.dot} ${index === activeSlide ? Style.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
