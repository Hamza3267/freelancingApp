import React, { useState, useEffect } from "react";
import style from "./contactbar.module.scss";
import phone from "../../assets/images/whitephone.png";
import maill from "../../assets/images/whitemail.png";
const ContactBar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={style.blackdiv}>
        <div className={style.contact}>
          <div className={style.firstbell}>
            <img
              src="https://civi.uxper.co/wp-content/themes/civi/assets/images/ringbell.svg"
              alt=""
              style={{ height: "25px" }}
              className={`${style.bellimage} ${isActive ? style.active : ""}`}
            />
            <div className={style.namediv}>
            <text
              className={style.nameee}
              style={{
                color: "white",
                paddingLeft: "1%",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Subscribe for job alerts by email!
            </text>
            </div>
          </div>

          <div className={style.flextop}>
            <div className={style.first}>
              <img src={phone} alt="" style={{ height: "20px" }} />
              <text
                className={style.nameee}
                style={{
                  color: "white",
                  paddingLeft: "1%",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                (00) 658 54332{" "}
              </text>
            </div>
            <div className={style.first}>
              <img src={maill} alt="" style={{ height: "20px" }} />
              <text
                className={style.nameee}
                style={{
                  color: "white",
                  paddingLeft: "1%",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                hello@uxper.co
              </text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBar;
