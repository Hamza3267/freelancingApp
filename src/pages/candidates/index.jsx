import React, { useState } from "react";
import style from "./candidatef.module.scss";
import LayoutStyle from "../../components/layout-side-bar";
import JobForm from "../../components/job-form";
import Image from "../../components/img";
import TextMap from "../../components/text-mapping";

import pic1 from "../../assets/images/candidateinfo.png";
import pic2 from "../../assets/images/denis-do.webp";
import pic3 from "../../assets/images/employe2.webp";
import EYE from "../../assets/svgg/eve";
import Delete from "../../assets/svgg/delete";

const CandidatesFollow = () => {
  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [color, setColor] = useState("Following");

  const handleFollowing = () => {
    setIsActive2(false);
    setIsActive3(false);
    setIsActive(true);
    setColor("Following");
  };
  const handleActive = () => {
    setIsActive2(true);
    setIsActive(false);
    setIsActive3(false);
    setColor("Followers");
  };
  const handleInvite = () => {
    setIsActive3(true);
    setIsActive(false);
    setIsActive2(false);
    setColor("Invite");
  };

  const followingitems = [
    {
      img: pic1,
      name: "Candidate",
      bio: "UI/UX Designer /$30-day/ Chicago",
    },
    {
      img: pic2,
      name: "bruh",
      bio: "UI/UX Designer /$30-day/ Chicago",
    },
    {
      img: pic3,
      name: "Selena",
      bio: "UI/UX Designer /$30-day/ Chicago",
    },
  ];
  return (
    <LayoutStyle>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>My Following</h2>
          <div className={style.mainhead}>
            <text
              className={color === "Following" ? style.namecolor : style.name1}
              onClick={handleFollowing}
            >
              Following
            </text>
            <text
              className={color === "Followers" ? style.namecolor : style.name2}
              onClick={handleActive}
            >
              {" "}
              Followers
            </text>
            <text
              className={color === "Invite" ? style.namecolor : style.name3}
              onClick={handleInvite}
            >
              {" "}
              Invite
            </text>
          </div>
          <JobForm selectsetting={style.select} inputset={style.inputt} />
          <div className={style.inercontainer}>
            <div className={style.heading}>
              <p className={style.head}> Name</p>
            </div>
            {isActive && (
              <div>
                {followingitems.map((e, index) => (
                  <div className={style.flexmessege} key={index}>
                    <div className={style.lastcommentsetting}>
                      <Image img={e.img} imgsetting={style.picsetting} />
                      <div className={style.wrodsetting}>
                        <TextMap
                          title={e.name}
                          titleclass={style.titlename}
                          desc={e.bio}
                          descclass={style.descset}
                        />
                      </div>
                    </div>
                    <div className={style.svgset}>
                      <EYE />
                      <Delete />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {isActive2 && (
              <div className={style.flexmessege}>
                <div className={style.lastcommentsetting}>
                  <Image img={pic2} imgsetting={style.picsetting} />
                  <div className={style.wrodsetting}>
                    <TextMap
                      title={"Denis Do"}
                      titleclass={style.titlename}
                      desc={"Project Manager /$80-day/ California"}
                      descclass={style.descset}
                    />
                  </div>
                </div>
                <div className={style.svgset}>
                  <EYE />
                  <Delete />
                </div>
              </div>
            )}
            {isActive3 && (
              <div className={style.flexmessege}>
                <div className={style.lastcommentsetting}>
                  <Image img={pic3} imgsetting={style.picsetting} />
                  <div className={style.wrodsetting}>
                    <TextMap
                      title={"Selena Gomez"}
                      titleclass={style.titlename}
                      desc={"Backend Developer /$800-month / Boston"}
                      descclass={style.descset}
                    />
                  </div>
                </div>
                <div className={style.svgset}>
                  <EYE />
                  <Delete />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutStyle>
  );
};

export default CandidatesFollow;
