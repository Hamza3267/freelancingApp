import React, { useState } from "react";
import style from "./meeting.module.scss";
import LayoutStyle from "../../components/layout-side-bar";
import Button from "../../components/buttons";
import TextMap from "../../components/text-mapping";
import Image from "../../components/img";

 import calender from '../../assets/images/iconcalender.png'
 import cam from '../../assets/images/iconcamera.png'
 import time from '../../assets/images/icontime.png'
const Meeting = () => {
  const [color, setColor] = useState("Upcoming");
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);

  const handleFollowing = () => {
    setColor("Upcoming");
    setActive(true);
    setActive1(false);
  };
  const handleActive = () => {
    setColor("Completed");
    setActive1(true);
    setActive(false);
  };
  const meetingitems=[
    {
        date:"February 16, 2024 . 00:00 ",
        name:"Sr. Backend Go Developer",
        meetname:"Meeting with:",
        teachname:"frf"

    },
    {
        date:"February 16, 2024 . 00:00 ",
        name:"Sr. Backend Go Developer",
        meetname:"Meeting with:",
        teachname:"frf"

    },
    {
        date:"February 16, 2024 . 00:00 ",
        name:"Sr. Backend Go Developer",
        meetname:"Meeting with:",
        teachname:"frf"

    },
    {
        date:"February 16, 2024 . 00:00 ",
        name:"Sr. Backend Go Developer",
        meetname:"Meeting with:",
        teachname:"frf"

    },
    {
        date:"February 16, 2024 . 00:00 ",
        name:"Sr. Backend Go Developer",
        meetname:"Meeting with:",
        teachname:"frf"

    },
    {
        date:"February 16, 2024 . 00:00 ",
        name:"Sr. Backend Go Developer",
        meetname:"Meeting with:",
        teachname:"frf"

    },
  ];
  return (
    <LayoutStyle>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>Meetings</h2>
          <div className={style.flexmainhead}>
            <div className={style.mainhead}>
              <text
                className={color === "Upcoming" ? style.namecolor : style.name1}
                onClick={handleFollowing}
              >
                Upcoming
              </text>
              <text
                className={
                  color === "Completed" ? style.namecolor : style.name2
                }
                onClick={handleActive}
              >
                {" "}
                Completed
              </text>
            </div>
            <div>
              <Button
                title={"Zoom Settings"}
                btndiv={style.editwidthbtn}
                btnClass={style.btnsetting}
              />
            </div>
          </div>
          <div className={style.card}>
                {meetingitems.map((e,index)=>(
          <div className={style.innerdiv} key={index}>

            <div className={style.datetimeflex}>
            <div>
                <Image img={calender} imgsetting={style.imgset}/>
            </div>
            <div>
                <p className={style.date}>{e.date} <span className={style.expired}>expired</span></p>
               
            </div>
            </div>
            <p className={style.namebox}>{e.name}</p>
            <text className={style.meetingwith}> {e.meetname} <span style={{color:"#007456"}}>ezhlcandidate</span></text>
            <div className={style.namecandidate}>
            <text >{e.teachname}</text>
            </div>
            <div className={style.flexlastitems}>
                <Image img={cam} imgsetting={style.setcam} />
                <text className={style.meetingwithzoom}>Via Zoom</text>
                <Image img={time} imgsetting={style.settime}/>
                <text className={style.meetingwithzoom}>30 Minutes</text>
            </div>
          </div>
          ))}
            </div>
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

export default Meeting;
