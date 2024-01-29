import React from "react";
import style from "./pics.module.scss";

const PicCard = ({ pic, date, learn, para,picborder, maincontainer,paragraphsetting, datesetting }) => {
  return (
    <div className={`${style.maindiv} ${maincontainer}`}>
      <div className={`${style.subdiv} ${picborder}`}>
        <img src={pic} alt="zoompicc" className={style.pic} />
      </div>
      <div className={style.dateflex}>
        <p className={`${style.date} ${datesetting}`}>{date}</p>
        <p className={style.learn}>{learn}</p>
      </div>
      <p className={`${style.paragraph} ${paragraphsetting}`}>{para}</p>
    </div>
  );
};

export default PicCard;
