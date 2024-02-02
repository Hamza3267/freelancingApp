import React, { useState } from "react";
import style from "./candidates.module.scss";
import { useForm } from "react-hook-form";

import Layout from "../../components/layout/Layout";
import TextMap from "../../components/text-mapping";
import Employee from "../../components/employee-card";
import Search from "../../components/form-search";
import Selectform from "../../components/select-form";

import backgroundimg from "../../assets/images/Banner.png";

const Candidate = () => {
  const { register, handleSubmit, setValue, watch, getValues, reset } = useForm(
    {
      defaultValue: {
        country: "",
        state: "",
        cities: "",
        range100200: false,
        range200300: false,
        range300400: false,
        range400500: false,
        range50100: false,
        rating: [],
      },
    }
  );

  const overlaystyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <Layout>
        <div style={overlaystyle} className={style.maindiv}>
          <div className={style.head}>
            <TextMap
              title={"Hire people for your business"}
              titleclass={style.title}
            />
          </div>
          <div className={style.flexhead}>
            <div className={style.searchdiv}>
              <Search />
            </div>
          </div>
        </div>

        <div className={style.midportion}>
          <div className={style.sideform}>
            <Selectform
              setSelectedValue={setSelectedValue}
              handleSubmit={handleSubmit}
              setValue={setValue}
              reset={reset}
              register={register}
              watch={watch}
              getValues={getValues}
            />
          </div>

          <div className={style.blockdiv}>
            <Employee
              carousalitemset={style.cardset}
              boxset={style.box}
              btntextflex={style.flexibility}
              selectedValue={selectedValue}
              gridMode={style.gridsetting}
              buttons={true}
              carousall={style.widthsettingblock}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Candidate;
