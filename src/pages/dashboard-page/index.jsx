import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./dashboard.module.scss";
import Layout from "../../components/layout-side-bar/index";

import TextMap from "../../components/text-mapping";
import LineChart from "../../components/chart";
import Image from "../../components/img";
import Button from "../../components/buttons";

import Icon1 from "../../assets/svgg/icon1";
import Icon2 from "../../assets/svgg/icon2";
import Icon3 from "../../assets/svgg/icon3";
import Icon4 from "../../assets/svgg/icon4";
import camera from "../../assets/images/darkcamera.png";
import pic1 from "../../assets/images/candidateinfo.png";
import pic2 from "../../assets/images/candidateboyy.webp";

const dashboarditems = [
  {
    title: "POSTED JOBS",
    paragraph: "17",
    svgset: <Icon1 />,
  },
  {
    title: "APPLICANTS",
    paragraph: "26",
    svgset: <Icon2 />,
  },
  {
    title: "MEETINGS",
    paragraph: "28",
    svgset: <Icon3 />,
  },
  {
    title: "MY FOLLOW",
    paragraph: "7",
    svgset: <Icon4 />,
  },
];
const Dashboard = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const storedUserData = JSON.parse(localStorage.getItem("signupData"));

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("signupData"));
    const formData = JSON.parse(localStorage.getItem("signInData"));
    const userLoggedIn =
      storedUserData?.email === formData.email &&
      storedUserData?.pasword === formData.password;

    setIsAuthenticated(userLoggedIn);

    if (!userLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <Layout>
      <div className={style.divvv}>
        <div className={style.subdiv}>
          <h2 className={style.titleeh}>Welcome back! {storedUserData.fname}</h2>

          <div className={style.mappsetdiv}>
            {dashboarditems.map((e, index) => (
              <div className={style.divmap} key={index}>
                <div>
                  <TextMap
                    title={e.title}
                    paragraph={e.paragraph}
                    titleclass={style.titlesetting}
                    paragraphclass={style.parasetting}
                  />
                </div>
                <div className={style.svgset}>{e.svgset}</div>
              </div>
            ))}
          </div>
          <div className={style.flexibility}>
            <div className={style.portion2}>
              <div className={style.flexportion2typeselect}>
                <div className={style.pageview}>
                  <TextMap title={"Page views"} titleclass={style.titlee} />
                </div>
                <div>
                  <select type="select" className={style.selectdiv}>
                    <option value="default">7 days</option>
                    <option value="pakistan">15 days</option>
                    <option value="usa">30 days</option>
                  </select>
                </div>
              </div>
              <div className={style.chart}>
                <LineChart />
              </div>
            </div>

            <div className={style.comments}>
              <div className={style.commentbox}>
                <TextMap title={"New Applicants"} titleclass={style.titlee} />

                <div className={style.commentmain}>
                  <div className={style.spantext}>
                    <TextMap
                      title={"Sr. Backend Go Developer"}
                      titleclass={style.titlename}
                    />
                    <span>17</span>
                  </div>
                  <div className={style.applieddiv}>
                    <div className={style.flexcomment}>
                      <div className={style.camera}>
                        <img
                          src={camera}
                          alt=""
                          className={style.camerawidth}
                        />
                      </div>
                      <TextMap
                        desc={"Applied date: January 10, 2024"}
                        descclass={style.descsetting}
                      />
                    </div>
                  </div>
                  <div className={style.applieddiv}>
                    <div className={style.flexcomment}>
                      <div className={style.camera}>
                        <img
                          src={camera}
                          alt=""
                          className={style.camerawidth}
                        />
                      </div>
                      <TextMap
                        desc={"Applied date: January 10, 2024"}
                        descclass={style.descsetting}
                      />
                    </div>
                  </div>
                  <div className={style.spantext}>
                    <TextMap
                      title={"Chief Financial Officer (CFO)"}
                      titleclass={style.titlename}
                    />
                    <span>3</span>
                  </div>
                  <div className={style.lastcommentsetting}>
                    <Image img={pic1} imgsetting={style.picsetting} />
                    <div className={style.wrodsetting}>
                      <TextMap
                        title={"Candidate"}
                        titleclass={style.titlename}
                        desc={"Applied date: January 10, 2024"}
                        descclass={style.descset}
                      />
                    </div>
                  </div>
                  <br />
                  <div className={style.lastcommentsetting}>
                    <Image img={pic2} imgsetting={style.picsetting} />
                    <div className={style.wrodsetting}>
                      <TextMap
                        title={"Candidate"}
                        titleclass={style.titlename}
                        desc={"Applied date: January 10, 2024"}
                        descclass={style.descset}
                      />
                    </div>
                  </div>
                  <br />
                  <Button
                    title={"All Applicants"}
                    btnClass={style.butonseting}
                    btndiv={style.divbtn}
                  />
                </div>
              </div>
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
    </Layout>
  );
};

export default Dashboard;
