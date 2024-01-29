import React from "react";
import style from "./contactus.module.scss";

import HookForm from "../../components/hook-form";
import Layout from "../../components/layout/Layout";
import TextMap from "../../components/text-mapping";
import Image from "../../components/img";

import map from "../../assets/images/map.png";

const contactitems = [
  {
    tite: "Phone number",
    paraa: "(00) 723 445 793",
  },
  {
    tite: "Email address",
    paraa: "hello@uxper.co",
  },
  {
    tite: "Address",
    paraa: "2866 Oakway Lane, New York, USA",
  },
];

const ContactUs = () => {
  return (
    <>
      <Layout>
        <div className={style.maindv}>
          <TextMap
            title={"Contact Us"}
            paragraph={
              "Have a question or need more information? Just drop us a line!"
            }
            titleclass={style.title}
            paragraphclass={style.para}
          />
          <div className={style.contactusdiv}>
            <div className={style.maptext}>
              {contactitems.map((e, index) => (
                <div>
                  <TextMap
                    key={index}
                    title={e.tite}
                    paragraph={e.paraa}
                    titleclass={style.titlecomp}
                    paragraphclass={style.paracomp}
                  />
                </div>
              ))}
              <Image img={map} imgsetting={style.imgset} />
            </div>

            <div className={style.formdiv}>
              <TextMap
                title={"Send us a message"}
                titleclass={style.titlecomp}
              />
              <HookForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
