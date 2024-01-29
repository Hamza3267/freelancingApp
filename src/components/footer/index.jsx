import React from "react";
import style from "./footer.module.scss";

import PicText from "../pic-text-card";
import TextMap from "../text-mapping";
import Input from "../../components/input";
import Button from "../../components/buttons";

import mail from "../../assets/images/mailbox.png";
import linkdin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";

const footeritems = [
  {
    about: "About us",
    job: "Jobs",
    privacy: "Privacy Policy",
    pic: linkdin,
    lind: "Linkedin",
  },
  {
    about: "Carrer",
    job: "Companies",
    privacy: "Term of Use",
    pic: facebook,
    lind: "Facebook",
  },
  {
    about: "Blogs",
    job: "Candidates",
    privacy: "Help center",
    pic: insta,
    lind: "Instagram",
  },
  {
    about: "FAQ's",
    job: "Pricing",
    privacy: "Updates",
    pic: youtube,
    lind: "Youtube",
  },
  {
    about: "Contact",
    job: "Partner",
    privacy: "Documentation",
    pic: twitter,
    lind: "Twitter",
  },
];

const textitem = [
  {
    textt: "Company",
  },
  {
    textt: "Service",
  },
  {
    textt: "Support",
  },
  {
    textt: "Connect",
  },
];
const Foter = () => {
  return (
    <>
      <div className={style.portion10}>
        <div className={style.divportion10flex}>
          <PicText
            title={"Subscribe to our newsletter"}
            paragraph={"We'll keep you updated with the best new jobs."}
            logo={mail}
            titledit={style.titleditting}
            paraedit={style.paragraaph}
            imgdivedit={style.background}
            pictureedit={style.picsetting}
            maindivedit={style.maindivediting}
          />
          <div className={style.butontexteit}>
            <Input />
            <Button title={"Subscribe"} btndiv={style.btndivedit} />
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.subdivision}>
          <div className={style.textmapedit}>
            <TextMap
              title={"About Us"}
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris risus, lobortis a commodo at, varius sit amet ipsum."
              }
              desc={"T. (00) 658 54332 E. hello@uxper.co"}
              titleclass={style.t}
              paragraphclass={style.p}
              descclass={style.d}
            />
          </div>
          <div className={style.mapediting}>
            <div className={style.footersub}>
              {textitem.map((e, index) => (
                <div className={style.textmap}>
                  <p key={index}>{e.textt}</p>
                </div>
              ))}
            </div>
            <div className={style.mainconainer}>
              {footeritems.map((e, index) => (
                <div className={style.flex} key={index}>
                  <p className={style.name}>{e.about}</p>
                  <p className={style.name}>{e.job} </p>
                  <p className={style.name}>{e.privacy}</p>
                  <div className={style.divflex}>
                    <img src={e.pic} alt="" className={style.picture} />
                    <p className={style.name}>{e.lind}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.lastdiv}>
          <TextMap
            paragraph={"© 2023 Uxper. All Right Reserved."}
            paragraphclass={style.p}
          />
        </div>
      </div>
    </>
  );
};

export default Foter;
