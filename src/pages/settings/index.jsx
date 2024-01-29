import React, { useState } from "react";
import style from "./setting.module.scss";
import LayoutStyle from "../../components/layout-side-bar";
import Settingform from "../../components/setting-form/changename";
import Settingpassword from "../../components/setting-form/changepassword";
import TextMap from "../../components/text-mapping";
import Button from "../../components/buttons";

import profile from "../../assets/images/salary.png";
import Payout from "../../components/setting-form/payout";
const Setting = () => {
  const [color, setColor] = useState("Personal info");
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);

  const handleFollowing = () => {
    setColor("Personal info");
    setActive(true);
    setActive1(false);
  };
  const handleActive = () => {
    setColor("Payout");
    setActive1(true);
    setActive(false);
  };
  return (
    <LayoutStyle>
      <div className={style.maincontainer}>
        <div className={style.subcontainer}>
          <h2 className={style.titleeh}>Settings</h2>
          <div className={style.mainhead}>
            <text
              className={
                color === "Personal info" ? style.namecolor : style.name1
              }
              onClick={handleFollowing}
            >
              Personal info
            </text>
            <text
              className={color === "Payout" ? style.namecolor : style.name2}
              onClick={handleActive}
            >
              {" "}
              Payout
            </text>
          </div>
              {active &&
          <div>
            <div className={style.innerdiv}>
              <div className={style.formdiv}>
                <h6 className={style.h6setting}>Personal info</h6>
                <h6 className={style.h6photo}>Your photo</h6>
                <div className={style.flexprofile}>
                  <img src={profile} alt="" className={style.picedit} />
                  <p className={style.photodesc}>
                    {" "}
                    Update your photo manually, if the photo is not set the
                    default Avatar will be the same as your login email account.
                  </p>
                </div>
                <Settingform />
              </div>
            </div>
            <div className={style.innerdivv}>
              <h6 className={style.h6settings}>Change password</h6>
              <Settingpassword />
            </div>
        

          <Button
            title={"Deactive account"}
            btnClass={style.editingbuton}
            btndiv={style.btndivv}
          />

          <div className={style.copyright}>
            <TextMap
              desc={" © 2023 Uxper. All Right Reserved."}
              descclass={style.descsetting}
            />
          </div>
        </div>
            }
        </div>
        {active1 &&
        <div>
            <div className={style.divv}>
                <Payout />
            </div>
            <Button 
          title={"Save"}  
          btndiv={style.btnsetting}
         
          
          />
        <div className={style.copyright}>
          <TextMap
            desc={" © 2023 Uxper. All Right Reserved."}
            descclass={style.descsetting}
          />
        </div>
        </div>
        
        }
      </div>
      
    </LayoutStyle>
  );
};

export default Setting;
