import React from "react";
import style from "./home.module.scss";
import Layout from "../../components/layout/Layout";

import TextBar from "../../components/text-bar";
import MsgSlider from "../../components/messege-slide";
import CountrySearch from "../../components/country-search";
import PicText from "../../components/pic-text-card";
import TextMap from "../../components/text-mapping";
import Button from "../../components/buttons";
import Card from "../../components/card-slide";
import Block from "../../components/blocks";
import CardSlider from "../../components/card-slider";
import PicCard from "../../components/pic-card";

import blackpage from "../../assets/images/blackpage.png";
import girlpic from "../../assets/images/girlpoint.png";
import homepic from "../../assets/images/home.webp";
import backgroundpic from "../../assets/images/background.webp";
import page from "../../assets/images/whitepage.png";
import clock from "../../assets/images/clock.png";
import bell from "../../assets/images/bell.png";
import pic1 from "../../assets/images/pic1.webp";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";

const overlyStyle = {
  backgroundImage: `url(${backgroundpic})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // height: "max-content",
  overflow: "hidden",
};

const pictextitems = [
  {
    tittle: "Create your resume",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: blackpage,
  },
  {
    tittle: "Create your resume",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: clock,
  },
  {
    tittle: "Create your resume",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: bell,
  },
];
const carditems = [
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
  {
    title: "Development & IT",
    paragraph: "16 jobs",
    logo: page,
  },
];
const numberitems = [
  {
    num: "24k+",
    para: "Candidate Applied",
  },
  {
    num: "10k+",
    para: "Company Reviews",
  },
  {
    num: "60k+",
    para: "Jobs submited",
  },
  {
    num: "30k+",
    para: "monthly Users",
  },
];
const hoverpicitems = [
  {
    pic: pic1,
    date: "October 29, 2022",
    learn: "Learn",
    para: " Remote Collaboration: Best Practices, Challenges, and Tools",
  },
  {
    pic: pic2,
    date: "October 29, 2022",
    learn: "Skills",
    para: " How to Work From Home: Tips and Companies Hiring Remotely",
  },
  {
    pic: pic3,
    date: "October 20, 2022",
    learn: "Speaking",
    para: "How Many Hours Is Part Time?",
  },
];

const Home = () => {
  return (
    <>
      <Layout>
        <div style={overlyStyle} className={style.overlay}>
          <div className={style.subdiv}>
            <div className={style.flexscreen}>
              <div className={style.flextextcomponent}>
                <TextBar />
                <CountrySearch />
              </div>
              <MsgSlider />
            </div>
          </div>
        </div>
        <div className={style.portion2}>
          {pictextitems.map((e, index) => (
            <div className={style.portio2}>
              <PicText
                title={e.tittle}
                paragraph={e.para}
                titledit={style.titttttle}
                paraedit={style.paraeditt}
                logo={e.logo}
                key={index}
              />
            </div>
          ))}
        </div>

        <div className={style.portion3}>
          <TextMap
            title={"Popular category"}
            paragraph={"Find and hire professionals across all skills"}
            titleclass={style.edittitle}
            paragraphclass={style.paracont}
          />
          <div className={style.mapedit}>
            {carditems.map((e, index) => (
              <div className={style.mapdiv}>
                <PicText
                  maindivedit={style.pictext}
                  title={e.title}
                  paragraph={e.paragraph}
                  paraedit={style.paraed}
                  logo={e.logo}
                  titledit={style.titleeee}
                  imgdivedit={style.borderedit}
                  pictureedit={style.picediting}
                  key={index}
                />
              </div>
            ))}
          </div>
          <Button
            title={"View all categories"}
            btndiv={style.btnedit}
            btnClass={style.btndit}
          />
        </div>

        <div className={style.portion4}>
          <div className={style.textmove}>
            <TextMap
              title={"Latest jobs"}
              paragraph={"2020 jobs live – 293 added today."}
              titleclass={style.edittitle}
              paragraphclass={style.paracont}
            />
          </div>
          <div className={style.divwidth}>
            <Card />
          </div>
        </div>
        <div className={style.portion5}>
          <div className={style.p5editing}>
            <TextMap
              title={"Featured companies actively hiring "}
              paragraph={"Over 100 million jobs"}
              titleclass={style.titclas}
              paragraphclass={style.parclas}
            />
            <Button
              title={"View all categories"}
              btndiv={style.btnedit}
              btnClass={style.btndit}
            />
          </div>
          <Block flexx={style.carosaldivset} dots={true} />
        </div>
        <div className={style.portion6}>
          <div className={style.flexsubdiv}>
            <div className={style.imagecont}>
              <img src={girlpic} alt="girl" className={style.picedit} />
            </div>
            <div className={style.textmapping}>
              <div className={style.textcompdiv}>
                <TextMap
                  title={
                    "Discover why more companies are using Civi to make hiring easy"
                  }
                  paragraph={
                    "Faucibus sed diam lorem nibh nibh risus dui ultricies purus eget convallis auctor massa."
                  }
                  titleclass={style.tittleedit}
                  paragraphclass={style.paraeedit}
                />
              </div>
              <div className={style.nummap}>
                {numberitems.map((e, index) => (
                  <div className={style.innerdiv}>
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
              <div className={style.btneeditt}>
              <Button
                title={"Post your job for FREE"}
                btndiv={style.btndivedit}
               
              />
              </div>
            </div>
          </div>
        </div>

        <div className={style.portion7}>
          <div className={style.flexcontainer}>
            <TextMap
              title={"Trusted by leading brands and startups"}
              paragraph={"Here’s what they say about us"}
              titleclass={style.edittitle}
              paragraphclass={style.paraccont}
            />
          </div>

          <CardSlider />
        </div>

        <div className={style.poriton8}>
          <div className={style.subbdiv}>
            <div className={style.flexbox}>
              <div className={style.flextext}>
                <TextMap
                  title={"EMPLOYERS"}
                  paragraph={"Looking to post a job?"}
                  desc={
                    "Find professionals from around the world and across all skills."
                  }
                  titleclass={style.titlredit}
                  paragraphclass={style.paraediting}
                  descclass={style.decedit}
                />
                <Button
                  title={"Post your job for FREE"}
                  btndiv={style.btndivedit}
                />
              </div>
              <div>
                <img src={homepic} alt="" className={style.pic} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.portion9}>
         
            <TextMap
              title={"Latest from our blog"}
              paragraph={"Get interesting insights, articles, and news"}
              titleclass={style.edittitle}
              paragraphclass={style.paracoont}
            />
         
          <div className={style.mappingcard}>
            {hoverpicitems.map((e, index) => (
               <div className={style.containerrrrr}>
              <PicCard
                pic={e.pic}
                date={e.date}
                learn={e.learn}
                para={e.para}
                key={index}
              />
                </div>
            ))}
          </div>
        
          <Button
            title={"View more articles"}
            btndiv={style.btnd}
            btnClass={style.butun}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
