import React, { useState } from "react";
import style from "./messege.module.scss";
import LayoutStyle from "../../components/layout-side-bar";
import Image from "../../components/img";
import TextMap from "../../components/text-mapping";

import candidate from '../../assets/images/candidateinfo.png'

const messageitem =[
  {
    name:"Candidate",
    msg:"yolo"
  },
  {
    name:"Candidate",
    msg:"yolo"
  },
  {
    name:"Candidate",
    msg:"yolo"
  },
  {
    name:"Candidate",
    msg:"yolo"
  },
  {
    name:"Candidate",
    msg:"yolo"
  },
  {
    name:"Candidate",
    msg:"yolo"
  },
  {
    name:"Candidate",
    msg:"yolo"
  },
  {
    name:"Candidate",
    msg:"yolo"
  },
  {
    name:"Candidate",
    msg:"yolo"
  },
];
const Messege = () => {
  const [activeButton, setActiveButton] = useState("All");
  const [active, setLogIn] = useState(true);
  const [unread, setSignUp] = useState(false);

  const handleLogin = () => {
    setLogIn(true);
    setSignUp(false);
    setActiveButton("All");
  };
  const handleSignup = () => {
    setSignUp(true);
    setLogIn(false);
    setActiveButton("Unread(0)");
  };
  return (
    <LayoutStyle>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>Messages</h2>
          <div className={style.flexmesseges}>
          <div className={style.innerdiv}>
            <div className={style.logsign}>
              <h3
                onClick={handleLogin}
                className={activeButton === "All" ? style.act : style.active}
              >
                All
              </h3>
              <h3
                onClick={handleSignup}
                className={
                  activeButton === "Unread(0)"
                    ? style.actsign
                    : style.activesign
                }
              >
                Unread(0)
              </h3>
            </div>
            {active &&
            <div className={style.msgmap}>
              {messageitem.map((e,index)=>(
            <div className={style.lastcommentsetting} key={index}>
                  <Image img={candidate} imgsetting={style.picsetting} />
                  <div className={style.wrodsetting}>
                    <TextMap
                      title={e.name}
                      titleclass={style.titlename}
                      desc={e.msg}
                      descclass={style.descset}
                    />
                  </div>
                </div>
                ))}
            </div>
              }
              {unread &&
              <div>
                <text>No unread messages</text>
                </div>
              }
          </div>
          <div className={style.messages}>

          </div>
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

export default Messege;
