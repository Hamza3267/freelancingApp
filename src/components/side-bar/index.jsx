import React from "react";
import style from "./sidebar.module.scss";
import Image from "../img";
import TextMap from "../../components/text-mapping";
import Button from "../buttons";

import headerpic from "../../assets/images/headertag.jpeg";
import plus from "../../assets/images/whiteplus.png";

import Clock from "../../assets/svgg/clock";
import Job from "../../assets/svgg/job";
import Applicant from "../../assets/svgg/applicant";
import Candidate from "../../assets/svgg/candidate";
import Package from "../../assets/svgg/package";
import Messege from "../../assets/svgg/messeges";
import Meeting from "../../assets/svgg/meeting";
import Company from "../../assets/svgg/company";
import Setting from "../../assets/svgg/setting";
import Logout from "../../assets/svgg/logout";

const SideBar = () => {
  return (
    <>
      <div className={style.background}>
        <div className={style.subdiv}>
          <div className={style.imgdiv}>
            <Image img={headerpic} imgsetting={style.imgset} />
          </div>
          <div className={style.svggg}>
            <Clock />
            <Job />
            <Applicant />
            <Candidate />
            <Package />
            <Messege />
            <Meeting />
            <Company />
            <Setting />
            <Logout />
          </div>
        </div>
        <div className={style.lastdiv}>
        <div className={style.postjob}>
          <TextMap
            title={"Post your first job!"}
            paragraph={"Your first 2 job postings for just $50 each."}
            titleclass={style.title}
            paragraphclass={style.para}
          />
          <Button
            btnimg={plus}
            imgset={style.imgsett}
            title={"Post a job"}
            btndiv={style.divbtn}
            btnClass={style.btnedit}
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
