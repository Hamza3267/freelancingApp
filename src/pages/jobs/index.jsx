import React from "react";
import style from "./job.module.scss";
import Layout from "../../components/layout-side-bar";
import JobForm from "../../components/job-form";
import Svg from "../../assets/svgg/urgenticon";
import dots from "../../assets/images/dots.png";
import black from "../../assets/images/black arrow.png";
import TextMap from "../../components/text-mapping";
const jobitems = [
  {
    subtext: "Legal & Finance / Full Time",
    text: "test job posting",
    num: "2",
    app: "Application",
    pend: "closed",
    sdate: "January 25, 2024",
    edate: "February 24, 2024",
    backgroundColor: "#eeeeee",
    color: "#999999",
  },
  {
    subtext: "Legal & Finance / Full Time",
    text: "test job posting",
    num: "1",
    app: "Application",
    pend: "Pending",
    sdate: "January 25, 2024",
    edate: "February 24, 2024",
    backgroundColor: "#fff9e7",
    color: "#ffc402",
  },
  {
    subtext: "Legal & Finance / Full Time",
    text: "test job posting",
    num: "5",
    app: "Application",
    pend: "closed",
    sdate: "January 25, 2024",
    edate: "February 24, 2024",
    backgroundColor: "#eeeeee",
    color: "#999999",
  },
  {
    subtext: "Legal & Finance / Full Time",
    text: "test job posting",
    num: "3",
    app: "Application",
    pend: "Pending",
    sdate: "January 25, 2024",
    edate: "February 24, 2024",
    backgroundColor: "#fff9e7",
    color: "#ffc402",
  },
  {
    subtext: "Legal & Finance / Full Time",
    text: "test job posting",
    num: "10",
    app: "Application",
    pend: "open",
    sdate: "January 25, 2024",
    edate: "February 24, 2024",
    backgroundColor: "#e8f7f5",
    color: "#13af97",
  },
];
const Jobs = () => {
  return (
    <Layout>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>Manage jobs</h2>
          <div className={style.jobformdiv}>
            <JobForm
              openn={true}
              selectsetting={style.setselectfield}
              sortdivinput={style.sortportion}
            />
          </div>
          <div className={style.innerdiv}>
            <div className={style.mainnnn}>
              <div>
                <text className={style.heading}>TITLE</text>
              </div>
              <div className={style.head}>
                <text className={style.heading}> APPLICANTS</text>
                <text className={style.heading}> STATUS</text>
                <text className={style.heading}>POSTED</text>
                <text className={style.headingex}>EXPIRED</text>
              </div>
            </div>
            {jobitems.map((e, index) => (
              <div className={style.padding}>
                <div className={style.svgdiv} key={index}>
                  <div className={style.svggg}>
                    <Svg subtext={e.subtext} text={e.text} />
                  </div>
                  <div className={style.flexxxnum}>
                    <text className={style.number}>{e.num}</text>
                    <span className={style.namee}>{e.app}</span>
                  </div>
                  <div>
                    <p
                      className={style.p}
                      style={{
                        backgroundColor: e.backgroundColor,
                        color: e.color,
                      }}
                    >
                      {e.pend}
                    </p>
                  </div>
                  <div>
                    <p className={style.date}>{e.sdate}</p>
                  </div>
                  <div className={style.datefix}>
                    <p className={style.exdate}>{e.edate}</p>
                  </div>
                  <div className={style.img}>
                    <img src={dots} alt="" className={style.img} />
                  </div>
                </div>
              </div>
            ))}

            <div className={style.lastcont}>
              <div className={style.lastbox}>
                <div className={style.divlast}>
                  <select className={style.selectbox}>
                    <option value="1">10</option>
                    <option value="1">10</option>
                    <option value="1">10</option>
                  </select>
                </div>

                <div className={style.divlasttext}>
                  <text className={style.lasttext}>1 - 10 of 22 items </text>
                </div>
              </div>
              <div className={style.numlst}>
                <div>
                  <text className={style.lasttet}>
                    <span style={{ color: "#007456" }}>1</span> 2 3{" "}
                  </text>
                </div>
                <div
                  className={style.lastarrowdiv}
                  style={{ marginRight: "19%" }}
                >
                  <img src={black} alt="" className={style.lastarrow} />
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

export default Jobs;
