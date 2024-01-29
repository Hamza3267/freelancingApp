import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./employeerecord.module.scss";

import Button from "../buttons";
import Image from "../img";

import Fruit from "../../assets/images/smile.png";
import pic1 from "../../assets/images/employe1.webp";
import pic2 from "../../assets/images/employe2.webp";
import pic3 from "../../assets/images/candidategirl.webp";
import location from "../../assets/images/graylocation.png";
import star from "../../assets/images/star.png";
import grid from "../../assets/images/grid.png";
import list from "../../assets/images/list.png";
import svg from "../../assets/images/plus-icon.svg";

const slides = [
  {
    p: Fruit,
    text: "bamide",
    txt: "Uxper is the first design and hosting platform built from the ground up for the mobile age. It is the only hosted service that allows…		",
    texts: "$1200",
    rating: "5",
  },
  {
    p: pic1,
    text: "Hamza",
    txt: "I am an experienced Filemaker Pro Developer based in the Los Angeles metropolitan area. I have worked with Filemaker since version 3.5. Through out the…",
    texts: "$100",
    rating: "4",
  },
  {
    p: pic2,
    text: "Saad",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "$200",
    rating: "4",
  },
  {
    p: pic3,
    text: "Nimra",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "$300",
    rating: "3",
  },
  {
    p: Fruit,
    text: "Faizan",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "$800",
    rating: "2",
  },
  {
    p: Fruit,
    text: "Ramsha",
    txt: "We're the world’s largest startup community. We help startups change the world. At AngelList, we…	",
    texts: "$2200",
    rating: "1",
  },
];

const EmployeeRecord = ({
  carousalitemset,
  boxset,
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
    navigate("/info", { state: { cardName: text } });
  };
  console.log(cardName);
  return (
    <>
      <div className={`${style.carousel} ${carousall}`}>
        <div className={style.companieslist}>
          <text className={style.textedit}>
            {" "}
            {filteredSlides.length} Employess
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
            <div
              key={index}
              className={`${style.icon} ${boxset} ${gridMode}`}
              onClick={() => handleClick(slide.text)}
            >
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
                      <div className={style.picdivvvvv}>
                        <img src={slide.p} alt="" className={style.img} />
                      </div>

                      <div
                        className={`${
                          viewMode === "flex"
                            ? style.setingnamebtndiv
                            : style.gridsettingdiv
                        }`}
                      >
                        <p
                          className={style.ptexts}
                          style={{ paddingLeft: "2%" }}
                        >
                          {slide.text}
                        </p>

                        <div className={style.flexxbtndiv}>
                          <Button
                            btnClass={style.btnset}
                            btndiv={style.btndivsetng}
                            title={"Developer"}
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

              <div className={style.textdiv}>
                <text className={style.txt}>{slide.txt}</text>
              </div>
              <div
                className={`${
                  viewMode === "flex"
                    ? style.lastdivsetting
                    : style.lastdivsettinggrid
                }`}
              >
                <div
                  className={`${
                    viewMode === "flex" ? style.btntextflex : style.btntextgrid
                  }`}
                >
                  <text className={style.info}>BackEnd Developer</text>
                  <text className={style.info}>Python Developer</text>
                  <text className={style.info}>Reactjs</text>
                  <text className={style.info}>PHP</text>
                  <text className={style.info}>js</text>
                </div>
                <div>
                  <text className={style.textt}>
                    {" "}
                    <span className={style.lasttext}>
                      {slide.texts}
                    </span>/month{" "}
                  </text>
                </div>
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

export default EmployeeRecord;
