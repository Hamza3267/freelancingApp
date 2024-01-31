import React from "react";
import style from "./pictext.module.scss";
const PicText = ({
  logo,
  title,
  paragraph,
  titledit,
  paraedit,
  imgdivedit,
  pictureedit,
  maindivedit,
}) => {
  return (
    <div className={`${style.maindiv} ${maindivedit}`}>
      <div className={`${style.imgdiv} ${imgdivedit}`}>
        <img src={logo} alt="logo" className={`${style.pic} ${pictureedit}`} />
      </div>
      <div className={style.subdiv}>
        <text className={`${style.tittle} ${titledit}`}>{title}</text>
        <text className={`${style.para} ${paraedit}`}>{paragraph}</text>
      </div>
    </div>
  );
};

export default PicText;
