import React, { useState } from "react";
import style from "./company.module.scss";
import { useForm } from "react-hook-form";
import Layout from "../../components/layout/Layout";

import TextMap from "../../components/text-mapping";
import Block from "../../components/blocks";
import Search from "../../components/form-search";
import Selectform from "../../components/select-form";

import backgroundimg from "../../assets/images/Banner.png";

const Company = () => {
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
        <TextMap
          title={"Companies Hiring Internationally"}
          titleclass={style.title}
        />
        <div className={style.searchdiv}>
          <Search />
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
          <Block
            carousalitemset={style.cardset}
            boxset={style.box}
            btntextflex={style.flexibility}
            selectedValue={selectedValue}
            gridMode={style.gridsetting}
            buttons={true}
            carousall={style.widthsettingblock}
            companylength={true}
          />
        </div>
      </div>
      </Layout>
    
    </>
  );
};

export default Company;
