import React from 'react'
import style from "./messege.module.scss";
import LayoutStyle from "../../components/layout-side-bar";
const Messege = () => {
  return (
    <LayoutStyle>
       <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>Messages</h2>
          </div>
          </div>
    </LayoutStyle>
  )
}

export default Messege
