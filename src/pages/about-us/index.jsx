import React from "react";
import style from "./about.module.scss";
import Layout from "../../components/layout/Layout";

import TextMap from "../../components/text-mapping";
import Image from "../../components/img";
import PicCard from "../../components/pic-card";
import Button from "../../components/buttons";
import CardSlider from "../../components/card-slider";

import pic1 from "../../assets/images/left.webp";
import pic2 from "../../assets/images/mid.webp";
import pic3 from "../../assets/images/right.webp";
import hoverpic1 from "../../assets/images/hoverpic1.png";
import hoverpic2 from "../../assets/images/hoverpic2.webp";
import hoverpic3 from "../../assets/images/hoverpic3.webp";
import build1 from "../../assets/images/building1.webp";
import build2 from "../../assets/images/building2.webp";
import location from "../../assets/images/graylocation.png";
import backgroundimg from "../../assets/images/greenportion.webp";

const picitems = [
  {
    img: pic1,
  },
  {
    img: pic2,
  },
  {
    img: pic3,
  },
];
const numberitems = [
  {
    num: "20+",
    para: "Employees",
  },
  {
    num: "150+",
    para: "Projects",
  },
  {
    num: "200+",
    para: "Customers",
  },
  {
    num: "5+",
    para: "Awards ",
  },
];

const hoverpicitems = [
  {
    pic: hoverpic1,
    date: "Alexander Hipp",
    para: "Co-Founder",
  },
  {
    pic: hoverpic2,
    date: "Julian Wan",
    para: "Head of Marketing",
  },
  {
    pic: hoverpic3,
    date: "Nicolas Horn",
    para: "UX / UI Designer",
  },
];
const About = () => {
  const overlaystyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "350px",
  };
  return (
    <>
      <Layout>
        <div className={style.portion1}>
          <TextMap
            title={"ABOUT US"}
            paragraph={"We are transforming the way healthcare hires"}
            titleclass={style.title1}
            paragraphclass={style.para}
          />
          <div className={style.mapimg}>
            {picitems.map((e, index) => (
              <Image img={e.img} key={index} />
            ))}
          </div>
          <div className={style.midpic}>
            <Image img={pic2} imgsetting={style.imgset} />
          </div>
        </div>
        <div className={style.portion2}>
          <div className={style.textdiv}>
            <TextMap
              title={"OUR MISSION"}
              paragraph={
                "We mission is to empower every healthcare professional to find their perfect job opportunity, faster and easier than ever before."
              }
              titleclass={style.title2}
              paragraphclass={style.para2}
            />
          </div>
        </div>
        <div className={style.divcont}>
          <div className={style.nummap}>
            {numberitems.map((e, index) => (
              <div className={style.innermapdiv}>
                <TextMap
                  key={index}
                  title={e.num}
                  paragraph={e.para}
                  titleclass={style.editingtext}
                  paragraphclass={style.editingpara}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={style.portion3}>
          <div className={style.portion3subdiv}>
            <span className={style.title}>OUR LEADERS</span>
            <span className={style.parag}>Championing change across our company</span>
        
          </div>
          <div className={style.picbutonflex}>
            <div className={style.mappingcard}>
              {hoverpicitems.map((e, index) => (
                <PicCard
                  pic={e.pic}
                  date={e.date}
                  para={e.para}
                  datesetting={style.date}
                  paragraphsetting={style.paragraph}
                  maincontainer={style.maindivv}
                  picborder={style.borderppic}
                  picsetting={style.picsett}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className={style.btndivset}>
            <Button
              title={"View Full Team"}
              btndiv={style.btndi}
              btnClass={style.btnedit}
            />
          </div>
        </div>
        <div className={style.portion4}>
          <div className={style.portion4subdiv}>
            <TextMap
              title={"PEOPLE LOVE US"}
              paragraph={"What our customers says"}
              titleclass={style.title}
              paragraphclass={style.paradesc}
            />
          </div>
          <div className={style.cardslide}>
            <CardSlider arrowst={style.settingarrow} />
          </div>
        </div>
        <div className={style.portion5}>
          <div className={style.p5subdiv}>
            <div className={style.textwidth}>
              <TextMap
                title={"OUR LOCATIONS"}
                paragraph={"Find us at our global hubs"}
                titleclass={style.titltle}
                paragraphclass={style.paradescribe}
                textdivv={style.textmapdiv}
              />
              <div className={style.settingsdivbuton}>
                <Button
                  title={"Chicago"}
                  btnimg={location}
                  btndiv={style.picbtnwidth}
                  btnClass={style.picbtnseting}
                />
                <TextMap
                  paragraph={"8205 Santa Monica Blvd Suite 84561, CA 90069"}
                  paragraphclass={style.txtpara}
                />

                <Button
                  title={"Amsterdam"}
                  btnimg={location}
                  btndiv={style.picbtnwidth}
                  btnClass={style.picbtnseting}
                />
                <TextMap
                  paragraph={"8205 Santa Monica Blvd Suite 84561, CA 90069"}
                  paragraphclass={style.txtpara}
                />
              </div>
            </div>

            <div className={style.buidimgdiv}>
              <Image img={build1} imgsetting={style.imgwidth} />
              <Image img={build2} imgsetting={style.imgwidth} />
            </div>
          </div>
        </div>
        <div style={overlaystyle}>
          <div className={style.alsttt}>
            <div className={style.textmapp}>
              <TextMap
                title={"WE CAN’T WAIT TO MEET YOU!"}
                paragraph={
                  "Join us as we transform healthcare hiring — one job at a time."
                }
                titleclass={style.lasttitle}
                paragraphclass={style.lastpara}
              />
            </div>
            <div className={style.btndivsett}>
              <Button
                title={"See opening jobs"}
                btndiv={style.btndsett}
                btnClass={style.btninnerset}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
