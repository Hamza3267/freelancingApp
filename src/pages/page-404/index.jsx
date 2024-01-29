import React from "react";
import { NavLink } from "react-router-dom";
import style from "./page404.module.scss";
import Layout from "../../components/layout/Layout";
import TextMap from "../../components/text-mapping";
import pic from "../../assets/images/notfound.png";

const Page404 = () => {
  return (
    <Layout>
      <div className={style.maindiv}>
        <div>
          <TextMap
            title={"Hmm, that didn’t work."}
            paragraph={"The page you are looking for cannot be found"}
            titleclass={style.text}
            paragraphclass={style.para}
          />
          <img src={pic} alt="" className={style.pic} />
          <div className={style.butondiv}>
            <NavLink to="/" className={style.name}>
              Go to home page
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page404;
