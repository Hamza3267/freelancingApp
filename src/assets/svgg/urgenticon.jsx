import React from "react";
import style from "./clocksvg.module.scss";
const UrgentIcon = ({ text, subtext }) => {
  return (
    <>
    <div className={style.urgent}>
      <div className={style.maindiv}>
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 9H16L7 22V13H0L9 0V9Z" fill="#ED0006" />
        </svg>
        <div className={style.text}>
          <text className={style.textt}>{text} </text>
        </div>
      </div>
      <text className={style.text}>{subtext}</text>
      </div>
    </>
  );
};

export default UrgentIcon;
