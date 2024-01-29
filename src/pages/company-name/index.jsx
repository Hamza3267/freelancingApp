import React from "react";
import style from "./companyname.module.scss";
import LayoutStyle from "../../components/layout-side-bar";
import Image from "../../components/img";
import TextMap from "../../components/text-mapping";
import Button from "../../components/buttons";

// import pic1 from "../../assets/images/candidateinfo.png";
import pic2 from "../../assets/images/denis-do.webp";
// import pic3 from "../../assets/images/employe2.webp";
import dot from "../../assets/images/dots.png";
import plus from '../../assets/images/whiteplus.png'

const headitems = [
  {
    text: "STATUS",
  },
  {
    text: "CATEGORY",
  },
  {
    text: "ACTIVE JOBS",
  },
];
const CompanyName = () => {
  return (
    <LayoutStyle>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>Companies</h2>
          <div className={style.innerdiv}>
            <div className={style.heading}>
              <div>
                <p className={style.head}> Name</p>
              </div>
              <div className={style.mapitemsflex}>
                {headitems.map((e, index) => (
                  <p className={style.head} key={index}>
                    {e.text}
                  </p>
                ))}
              </div>
            </div>
            <div className={style.flexall}>
            <div className={style.lastcommentsetting}>
              <Image img={pic2} imgsetting={style.picsetting} />
              <div className={style.wrodsetting}>
                <TextMap title={"ABC"} titleclass={style.titlename} />
              </div>
            </div>

            <div className={style.flexitems}>
              <p className={style.activebtn}>pending</p>
              <p className={style.items}>B2B SaaS</p>
              <p className={style.activejob}>0</p>
              <img src={dot} alt="" style={{width:"15px", marginLeft:"-15px"}}/>
            </div>
            </div>
          </div>
        </div>
        <Button 
          title={"Add new company"}  
          btnimg={plus} 
          btndiv={style.btnsetting}
          btnClass={style.inerbtn}
          imgset={style.imgdiv}
          />
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

export default CompanyName;
