import React from "react";
import style from "./package.module.scss";
import LayoutStyle from "../../components/layout-side-bar";

import Button from "../../components/buttons";
import TextMap from "../../components/text-mapping";

import plus from '../../assets/images/whiteplus.png'
const headeritems = [
  {
    name: "NUMBER JOBS",
  },
  {
    name: "NUMBER FEATURED",
  },
  {
    name: "JOB DURATION",
  },
  {
    name: "STATUS",
  },
];
const Package = () => {
  return (
    <LayoutStyle>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>My packages</h2>
          <div className={style.innerdiv}>
            <div className={style.headerflex}>
              <div className={style.headingflex}>
                <p className={style.head}>ID</p>
                <p className={style.head}>PACKAGE NAME</p>
              </div>
              <div className={style.flexitemsss}>
                {headeritems.map((e, index) => (
                  <p className={style.headiner} key={index}>
                    {e.name}
                  </p>
                ))}
              </div>
            </div>
            <div className={style.allitemsflex}>
            <div className={style.itemsflex}>
              <div>
                <p className={style.num}>#103</p>
              </div>
              <div>
                <p className={style.pkgname}>Extended</p>
                <p className={style.date}>January 1, 2024</p>
              </div>
            </div>

            <div className={style.itemslistflex}>
                <p className={style.itemsname}>91</p>
                <p className={style.itemsname}>29</p>
                <p className={style.itemsnamedays}>337 Days</p>
                <p className={style.activebtn}>Activated</p>
                <p className={style.over}>Overview</p>
            </div>
            </div>
          </div>
          <Button 
          title={"Add new package"}  
          btnimg={plus} 
          btndiv={style.btnsetting}
          btnClass={style.inerbtn}
          imgset={style.imgdiv}
          />
        </div>
        <div className={style.copyright}>
          <TextMap
            desc={" © 2023 Uxper. All Right Reserved."}
            descclass={style.descsetting}
          />
        </div>
      </div>
    </LayoutStyle>
  );
};

export default Package;
