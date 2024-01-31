import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./block.module.scss";
import Fruit from "../../assets/images/smile.png";
import Button from "../buttons";
import file from "../../assets/images/iconfile.png";

import location from "../../assets/images/graylocation.png";
import Image from "../img";
import star from "../../assets/images/star.png";
import grid from "../../assets/images/grid.png";
import list from "../../assets/images/list.png";
import svg from '../../assets/images/plus-icon.svg'

const slides = [
  {
    p: Fruit,
    text: "bamide",
    txt: "Uxper is the first design and hosting platform built from the ground up for the mobile age. It is the only hosted service that allows…		",
    texts: "12",
    rating: "5",
  },
  {
    p: Fruit,
    text: "Hamza",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "1",
    rating: "4",
  },
  {
    p: Fruit,
    text: "Saad",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "2",
    rating: "4",
  },
  {
    p: Fruit,
    text: "Nimra",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "3",
    rating: "3",
  },
  {
    p: Fruit,
    text: "Faizan",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "8",
    rating: "2",
  },
  {
    p: Fruit,
    text: "Ramsha",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "22",
    rating: "1",
  },
];

const CardSlider = ({
  carousalitemset,
  boxset,
  btntextflex,
  selectedValue,
  gridMode,
  flexx,
  buttons,
  carousall,
  dots,
  
 
}) => {
  const navigate = useNavigate();
  const totalSlides = slides.length;
  const [currentIndex, setIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [cardName, setCardName] = useState("");
  const isArray = Array.isArray(selectedValue);
  const filteredSlides =
    isArray && selectedValue.length > 0
      ? slides.filter((slide) => selectedValue.includes(slide.rating))
      : slides;

  const handleGrid1 = () => {
    setViewMode("grid");
  };

  const handleGrid2 = () => {
    setViewMode("flex");
  };
  const handleClick = (text) => { 
    setCardName(text);
    navigate('/infocompany', { state: { cardName: text } });
  };
  console.log(cardName);
  return (
    <>
      <div className={`${style.carousel} ${carousall}`}>
        <div className={style.companieslist}>
        
            <text className={style.textedit}>
              {" "}
              {filteredSlides.length} Companies
            </text>
  
          {buttons && (
            <div>
              <img
                src={grid}
                alt=""
                className={style.imgwidth}
                onClick={handleGrid1}
              />
              <img
                src={list}
                alt=""
                className={style.imgwidth}
                onClick={handleGrid2}
              />
            </div>
          )}
        </div>

        <div
          className={`${style.carouselItems} ${carousalitemset} ${
            viewMode === "grid" ? style.gridMode : style.flex
          } ${flexx} `}
          style={{ transform: `translateX(-${currentIndex * 390}px)` }}
        >
          {filteredSlides.map((slide, index) => (
            <div key={index} className={`${style.icon} ${boxset} ${gridMode}`}  onClick={() => handleClick(slide.text)}>
              <div>
                <div
                  className={`${
                    viewMode === "grid" ? style.flexitem : style.flexmaindiv
                  }`}
                >
                  <div
                    className={`${
                      viewMode === "grid" ? style.butnflex : style.flexxbtn
                    }`}
                  >
                    <div
                      className={`${
                        viewMode === "grid" ? style.griddivvv : style.flexdivv
                      }`}
                    >
                      <div>
                        <img src={Fruit} alt="" className={style.img} />
                      </div>

                      <div>
                        <p
                          className={style.ptexts}
                          style={{ paddingLeft: "2%" }}
                        >
                          {slide.text}
                        </p>

                        <div className={style.flexxbtn}>
                          <Button
                            btnimg={location}
                            btnClass={style.btnsetting}
                            btndiv={style.btndivsetng}
                            title={"New York"}
                          />
                          <Button
                            btnimg={location}
                            btnClass={style.btnsetting}
                            btndiv={style.btndivsetng}
                            title={"10-50"}
                          />
                          <div className={style.starrate}>
                            <Image img={star} imgsetting={style.imgst} />
                            <text className={style.textrate}>
                              {slide.rating}
                            </text>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                      <div>
                    <Button
                     imgset={style.imgediting}
                       btnimg={svg}
                      btnClass={style.butttonsetting}
                      btndiv={style.btndivsetting}
                      title={"Follow"}
                    />
                    </div>
                  </div>
                </div>
              </div>

              <text className={style.txt}>{slide.txt}</text>

              <div className={`${btntextflex}`}>
                <Button
                  btnimg={file}
                  btnClass={style.butttons}
                  btndiv={style.buutttndiv}
                  title={"Software"}
                />

                <text className={style.textt}>
                  <span className={style.lasttext}>{slide.texts}</span> jobs
                  available
                </text>
              </div>
            </div>
          ))}
        </div>
        {dots && (
          <div className={style.dotsContainer}>
            {Array.from({ length: totalSlides / 2 + 1 }).map((_, dotIndex) => (
              <div
                key={dotIndex}
                className={`${style.dot} ${
                  dotIndex === currentIndex ? style.activeDot : ""
                }`}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardSlider;
