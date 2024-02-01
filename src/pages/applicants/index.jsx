import React from "react";
import style from "./applicant.module.scss";
import LayoutStyle from "../../components/layout-side-bar";
import JobForm from "../../components/job-form";

import cam from "../../assets/images/darkcamera.png";
import link from "../../assets/images/external-link.png";
import Recorder from "../../assets/svgg/camera";
import Downloader from "../../assets/svgg/download";

const Applicant = () => {
    
  return (
    <LayoutStyle>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>All applicants</h2>
          <JobForm selectsetting={style.select} inputset={style.inputt} openn={true}  sortdivinput={style.sortportion}/>
          <div className={style.inercontainer}>
            <div className={style.heading}>
              <text className={style.headingname}>NAME</text>
              <text className={style.headingname}>STATUS</text>
              <div className={style.headingnamelast}>
                <text className={style.headingname}>INFORMATION</text>
              </div>
            </div>
            <div className={style.flexcontainer}>
              <div className={style.fleximgtext}>
                <div className={style.imgdiv}>
                  <img src={cam} alt="" className={style.img} />
                </div>
                <div>
                  <div className={style.textdivh3}>
                    <text className={style.h3con}>User not logged in</text>
                  </div>

                  <div>
                    <text className={style.text}>
                      Applied:<span className={style.span}>Sr. Backend Go</span>
                    </text>
                  </div>
                  <div className={style.namelink}>
                    <text className={style.name}>Sr. Backend Go</text>
                    <img src={link} alt="" />
                  </div>
                </div>
              </div>

              <div className={style.datemailflex}>
                <div>
                  <div className={style.pdiv}>
                    <text className={style.p}> pending </text>
                  </div>
                  <div>
                    <text className={style.date}>Applied:January 12, 2024</text>
                  </div>
                </div>
                <div>
                  <div>
                    <text className={style.mail}> 68788778@gmail.com </text>
                  </div>
                  <div>
                    <text className={style.mail}>020838999</text>
                  </div>
                </div>
                <div className={style.flexsvg}>
                  <Recorder />
                  <Downloader />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutStyle>
  );
};

export default Applicant;
