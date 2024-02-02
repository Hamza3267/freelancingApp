import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./companyinfo.module.scss";
import Layout from "../../components/layout/Layout";

import Image from "../../components/img";
import Button from "../../components/buttons";
import TextMap from "../../components/text-mapping";
import Carousel from "../../components/carousal-slide";
import Card from "../../components/card-slide";

import pic from "../../assets/images/candidategirl.webp";
import location from "../../assets/images/graylocation.png";
import star from "../../assets/images/star.png";
import pic1 from "../../assets/images/carosal1.webp";
import whitestar from "../../assets/images/white-star.png";
import linkdln from "../../assets/images/icons8-linkedin-logo-32.png";
import insta from "../../assets/images/icons8-instagram-32.png";
import facebook from "../../assets/images/icons8-facebook-f-32.png";
import twitter from "../../assets/images/icons8-twitter-logo-32.png";
const progressitems = [
  {
    text: "Working Attitude",
    width: "50",
    rating: "3 reviews",
  },
  {
    text: "Team Work",
    width: "80",
    rating: "3.00",
  },
  {
    text: "Skill & Experience",
    width: "20",
    rating: "3.00",
  },
  {
    text: "Offered Salary",
    width: "90",
    rating: "3.00",
  },
];

const candidateitems = [
  {
    pic: pic,
    name: "Hamza",
    title: "Hacker Developer",
    city: "California",
    money: "$30/hr",
    rating: "5",
    star: star,
    folow: "Follow",
    pdf: "Save to Pdf",

    msg: "Send Messege",

    a: "Uxper is the first design and hosting platform built from the ground up for the mobile age. It is the only hosted service that allows designers to create websites that work on every device, and push it live to production without a developer.",
    b: "Uxper empowers designers to create beautiful, responsive websites—without writing a single line of code, or relying on a developer. Its drag-and-drop interface looks, feels, and works like familiar desktop design tools, and writes clean, semantic code any developer would be proud of.",
    c: "Get started today—for free—but brace yourself: your workflow’s about to be transformed.",
  },
  {
    pic: pic,
    name: "Saad",
    title: "Website Developer",
    city: "California",
    money: "$30/hr",
    rating: "5",
    star: star,
    folow: "Follow",
    pdf: "Save to Pdf",
    msg: "Send Messege",
    desc: "Hi, I am website designer",
    a: "Resend failed emails or forward them individually to a different address Search and view the log file in your WordPress dashboardSearch and view the log file in your WordPress das  Search and view the log file in your WordPress dashboardhboard",
  },
];
const InfoCompany = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const cardName = state?.cardName || "";
  const candidateData = candidateitems?.filter(
    (candidate) => candidate.name === cardName
  );

 

  useEffect(() => {
    if (!candidateData.length) {
      navigate("/page404");
    }
  }, [candidateData, navigate]);

  return (
    <>
    <Layout>
    
      {candidateData.map((e, index) => (
        <>
          <div className={style.maindivv}>
            {candidateData.length > 0 && (
              <div className={style.mainnnnn}>
                <div className={style.maincontainer} key={index}>
                  <div className={style.profile}>
                    <img src={pic1} alt="" className={style.imgsett} />
                  </div>
                  <div className={style.subdiv}>
                    <div className={style.flexnamebn}>
                      <Image
                        img={e.pic}
                        imgsetting={style.picsetting}
                        imgdiv={style.picdiv}
                      />
                      <div>
                        <h1 className={style.name}>{e.name}</h1>

                        <div className={style.divflex}>
                          <Button
                            title={e.title}
                            btndiv={style.btnsetting}
                            btnClass={style.btnclasss}
                          />
                          <Button
                            title={e.city}
                            btnimg={location}
                            btndiv={style.btnseting}
                            btnClass={style.btnclass}
                          />
                          <Button
                            title={e.money}
                            btnimg={location}
                            btndiv={style.btnseting}
                            btnClass={style.btnclass}
                          />
                          <Button
                            title={e.rating}
                            btnimg={e.star}
                            imgset={style.starset}
                            btndiv={style.btnseting}
                            btnClass={style.btnclass}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={style.buttonflexx}>
                      <Button
                        imgset={style.imgediting}
                        btnClass={style.butttonsetting}
                        btndiv={style.btndivsetting}
                        title={e.folow}
                      />
                      <Button
                        imgset={style.imgediting}
                        btnClass={style.midbuton}
                        btndiv={style.btndivsetting}
                        title={e.pdf}
                      />

                      <Button
                        imgset={style.imgediting}
                        btndiv={style.btndivsetting}
                        title={e.msg}
                      />
                    </div>
                    <div>
                      <TextMap
                        title={"Overview"}
                        paragraph={e.desc}
                        titleclass={style.titlee}
                        paragraphclass={style.para}
                      />
                      <div className={style.list}>
                        <p>{e.a} </p>
                        <p>{e.b}</p>
                        <p>{e.c}</p>
                      </div>
                    </div>
                    <div className={style.photosportion}>
                      <TextMap title={"Photos"} titleclass={style.titlee} />

                      <Carousel />
                    </div>
                  </div>

                  <div className={style.portion3}>
                    <TextMap title={"Job at Uxper"} titleclass={style.titlee} />
                    <div className={style.cardset}>
                      <Card
                        cardmainsetting={style.cardflex}
                        btntextflex={style.editinglastbtntext}
                        maincont={style.innercont}
                      />
                    </div>
                  </div>

                  <div className={style.portion7}>
                    <TextMap title={"Review"} titleclass={style.tie} />
                    <div className={style.flexbstar}>
                      <div className={style.flexbtnstar}>
                        <button className={style.butneditngs}>4.0</button>
                        <img src={whitestar} alt="star" />
                      </div>
                      <div>
                        <p className={style.review}>Base on 1 reviews</p>
                      </div>
                    </div>
                    <div className={style.mapprogress}>
                      {progressitems.map((e, index) => (
                        <div key={index}>
                          <p className={style.lastt}>{e.text}</p>
                          <div className={style.progressrating}>
                            <progress
                              className={style.progressbarr}
                              value={e.width}
                              max="100"
                              style={{
                                backgroundColor: "red",
                                borderRadius: "10px",
                              }}
                            />
                            <p className={style.review}>{e.rating}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={style.lastportion}>
                      <div className={style.flexbn}>
                        <Image
                          img={pic}
                          imgsetting={style.picsetting}
                          imgdiv={style.picdiv}
                        />

                        <div className={style.reviewflexx}>
                          <h4 className={style.nam}>Candidate</h4>
                          <text className={style.month}>2 months ago </text>
                        </div>
                      </div>
                      <p className={style.lastt}>
                        Why candidate possible to reviews to other candidate?
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style.portion8}>
                  <div className={style.portion8subdiv}>
                    <TextMap title={"Information"} titleclass={style.tie} />
                    <div>
                      <p className={style.fist}>Caegories</p>
                      <p className={style.price}>$30/hr</p>
                    </div>
                    <div>
                      <p className={style.fist}>Company Size</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                    <div>
                      <p className={style.fist}>Founded in</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                    <div>
                      <p className={style.fist}>Location</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                    <div>
                      <p className={style.fist}>Phone</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                    <div>
                      <p className={style.fist}>Email</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                  </div>
                  <div className={style.logoediting}>
                    <img src={linkdln} alt="ln" className={style.imagee} />
                    <img src={insta}  alt="insta" className={style.imagee}/>
                    <img src={facebook} alt="ln" className={style.imagee}/>
                    <img src={twitter}  alt="insta" className={style.imagee}/>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ))}
</Layout>
    </>
  );
};

export default InfoCompany;
