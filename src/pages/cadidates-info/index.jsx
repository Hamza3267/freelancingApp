import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./info.module.scss";
import Layout from "../../components/layout/Layout";

import ReactPlayer from "react-player";
import Image from "../../components/img";
import Button from "../../components/buttons";

import location from "../../assets/images/graylocation.png";
import star from "../../assets/images/star.png";
import TextMap from "../../components/text-mapping";
import pic2 from "../../assets/images/pic2.jpg";
import whitestar from "../../assets/images/white-star.png";
import pic from "../../assets/images/candidategirl.webp";


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
    title: "Website Developer",
    city: "California",
    money: "$30/hr",
    rating: "5",
    star: star,
    folow: "Follow",
    pdf: "Save to Pdf",
    invite: "Invite",
    msg: "Messege",
    desc: "Hi, I am website designer",
    a: "Resend failed emails or forward them individually to a different address",
    b: "Store attachments along with sent emails",
    c: "Search and view the log file in your WordPress dashboard",
    d: "Export sent emails in CSV, XLSX, or EML format",
    e: "Get a weekly deliverability report by email",
    f: "View multisite email logs on separate pages easily.",
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
    invite: "Invite",
    msg: "Messege",
    desc: "Hi, I am website designer",
    a: "Resend failed emails or forward them individually to a different address",
    b: "Store attachments along with sent emails",
    c: "Search and view the log file in your WordPress dashboard",
    d: "Export sent emails in CSV, XLSX, or EML format",
    e: "Get a weekly deliverability report by email",
    f: "View multisite email logs on separate pages easily.",
  },
];
const InfoCandidate = () => {
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
          <div className={style.maindivv}>
            {candidateData.length > 0 && (
              <div className={style.maindivv}>
                <div className={style.maincontainer} key={index}>
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
                        btnClass={style.midbuton}
                        btndiv={style.btndivsetting}
                        title={e.invite}
                      />
                      <Button
                        imgset={style.imgediting}
                        btndiv={style.btndivsetting}
                        title={e.msg}
                      />
                    </div>
                    <div>
                      <TextMap
                        title={"About Me"}
                        paragraph={e.desc}
                        titleclass={style.titlee}
                        paragraphclass={style.para}
                      />
                      <ul className={style.list}>
                        <li>{e.a} </li>
                        <li>{e.b}</li>
                        <li>{e.c}</li>
                        <li>{e.d}</li>
                        <li>{e.e}</li>
                        <li>{e.f}</li>
                      </ul>
                    </div>
                    <div className={style.photosportion}>
                      <TextMap title={"Photos"} titleclass={style.titlee} />
                      <Image img={pic2} imgsetting={style.pic} />
                    </div>
                  </div>
                  <div className={style.portion2}>
                    <div>
                      <TextMap title={"Videos"} titleclass={style.titlee} />
                      <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
                    </div>
                  </div>
                  <div className={style.portion3}>
                    <TextMap title={"Skills"} titleclass={style.titlee} />
                    <Button
                      btnClass={style.btninner}
                      btndiv={style.btnouter}
                      title={"UI/UX Design"}
                    />
                  </div>
                  <div className={style.portion4}>
                    <TextMap title={"Work Experience"} titleclass={style.tie} />

                    <div className={style.innerdiv4}>
                      <div className={style.dotgol}>
                        <p className={style.first}>Web Designer</p>
                      </div>
                      <div className={style.uniqueborder}>
                        <div className={style.flexdivvvv}>
                          <p className={style.second}>Hansdigital </p>
                          <div>
                            <p className={style.date}>
                              2015-01-01 - 2023-08-01
                            </p>
                          </div>
                        </div>

                        <p className={style.last}>work at Hansdigital</p>
                      </div>
                      <div className={style.dotgol}>
                        <p className={style.first}>Content Writer and Editor</p>
                      </div>
                      <div className={style.uniqueborder}>
                        <div className={style.flexdivvvv}>
                          <p className={style.second}>Hansdigital </p>
                          <div>
                            <p className={style.date}>
                              2015-01-01 - 2023-08-01
                            </p>
                          </div>
                        </div>
                        <p className={style.last}>
                          A content writer and editor at Hansdigital
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={style.portion5}>
                    <TextMap title={"Education"} titleclass={style.tie} />

                    <div className={style.divsettings}>
                      <div className={style.dotgoledu}>
                        <p className={style.first}>B.Sc (Economics)</p>
                      </div>
                      <div className={style.uniqueborderedu}>
                        <div className={style.flexdivvvv}>
                          <p className={style.second}>Bachelor of Science </p>
                          <div>
                            <p className={style.date}>
                              2015-01-01 - 2023-08-01
                            </p>
                          </div>
                        </div>

                        <p className={style.last}>
                          Graduated with second class upper honours at Obafemi
                          Awolowo University
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={style.portion6}>
                    <TextMap title={"Projects"} titleclass={style.tie} />
                    <div>
                      <Image img={pic2} imgsetting={style.pic} />
                    </div>
                  </div>
                  <div className={style.portion7}>
                    <TextMap title={"Honors & awards"} titleclass={style.tie} />
                    <div className={style.divsettings}>
                      <div className={style.dotgol}>
                        <p className={style.first}>Award of contributina t</p>
                      </div>
                      <div className={style.uniqueborder}>
                        <p className={style.date}>2015-01-01 </p>
                        <p className={style.last}>
                          Receive award as best behaved students at NYSC camp
                          lagos
                        </p>
                      </div>
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
                      <p className={style.fist}>Offered Salary</p>
                      <p className={style.price}>$30/hr</p>
                    </div>
                    <div>
                      <p className={style.fist}>Experienced Time</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                    <div>
                      <p className={style.fist}>Langauges</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                    <div>
                      <p className={style.fist}>Gender</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                    <div>
                      <p className={style.fist}>Qualification</p>
                      <p className={style.last}>work at Hansdigital</p>
                    </div>
                    <div>
                      <p className={style.fist}>Age</p>
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
                </div>
              </div>
            )}
          </div>
        ))}
      </Layout>
    </>
  );
};

export default InfoCandidate;
