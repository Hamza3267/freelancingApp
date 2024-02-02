import React, { useState } from "react";
import style from "./cardslide.module.scss";

import smile from "../../assets/images/smile.png";
import heart from "../../assets/images/heart.png";
import king from "../../assets/images/king.png";
import location from "../../assets/images/location.png";
import Button from "../buttons";

const itemslist = [
  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Frontend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. UI/UX Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Fullstack Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },

  {
    name: "SR. Backend Go Deveoper",
    companyname: "Uxper",
    btntitle: "hamza",
  },
];
const Card = ({ cardmainsetting, btntextflex, maincont }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(itemslist.length / 4);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  const slideTransform = `translateX(-${
    currentSlide * (5500 / totalSlides)
  }px)`;
  return (
    <>
      <div className={style.maincontent}>
        <div
          className={`${style.main} ${cardmainsetting}`}
          style={{ transform: slideTransform }}
        >
          {itemslist.map((e, index) => (
            <div className={`${style.maincontainer} ${maincont}`} key={index}>
              <div className={style.flexdiv}>
                <div className={style.subdiv}>
                  <img src={smile} alt="smiley-face" className={style.pic} />
                  <div className={style.textdiv}>
                    <text className={style.texthover}>{e.name}</text>
                    <text>
                      <span className={style.para}> by</span>{" "}
                      <span className={style.texthoverr}>{e.companyname}</span>
                      <span className={style.para}> in</span>{" "}
                      <span className={style.texthoverr}>Development & IT</span>
                    </text>
                  </div>
                </div>
                <div className={style.picslevel}>
                  <img src={king} alt="king-cap" title="premium" />

                  <img src={heart} alt="heart-pic" title="wish-list" />
                </div>
              </div>
              <div className={`${btntextflex}`}>
                <div className={`${style.btnflex} ${style.btnwidths}`}>
                  <Button
                    title={"Remote"}
                    btndiv={style.buttonwidth}
                    btnClass={style.btnseting}
                  />
                  <Button
                    title={e.btntitle}
                    btnimg={location}
                    btndiv={style.picbtnwidth}
                    btnClass={style.picbtnseting}
                  />
                  <Button
                    title={"$100 - $200/month"}
                    btndiv={style.buttonwid}
                    btnClass={style.picbtnseting}
                  />
                </div>
                <div className={style.lasttext}>
                  <text className={style.lasttext}>601 days left to apply</text>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.dotsContainer}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`${style.dot} ${
                currentSlide === index ? style.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
