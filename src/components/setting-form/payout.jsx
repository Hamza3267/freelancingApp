import React, { useState } from "react";
import style from "./settingform.module.scss";
import { useForm } from "react-hook-form";

const Payout = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive2] = useState(false);
  const [active2, setActive3] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleclick = () => {
    setActive(!active);
  };
  const handleclick2 = () => {
    setActive2(!active1);
  };
  const handleclick3 = () => {
    setActive3(!active2);
  };
  return (
    <form onSubmit={handleSubmit((dataa) => console.log(dataa))}>
        <div className={style.displayyy}>
      <div className={style.main}>
        <h5 className={style.title} onClick={handleclick}>
          Paypal
        </h5>
        <div
          className={`${style.inputContainer} ${active ? style.active : ""}`}
        >
          <label className={style.label}>Current password</label>
          <input
            {...register("username")}
            placeholder="Enter current password"
            className={style.inerinput}
          />
        </div>
      </div>
       <div className={style.main}>
        <h5 className={style.title} onClick={handleclick2}>
          Stripe
        </h5>
        <div
          className={`${style.inputContainer} ${active1 ? style.active : ""}`}
        >
          <label className={style.label}>Current password</label>
          <input
            {...register("username")}
            placeholder="Enter current password"
            className={style.inerinput}
          />
        </div>
      </div>
      <div className={style.main}>
        <h5 className={style.title} onClick={handleclick3}>
          Bank Transfer
        </h5>
        <div
          className={`${style.inputContainer} ${active2 ? style.active : ""}`}
        >
          <label className={style.label}>Current password</label>
          <input
            {...register("username")}
            placeholder="Enter current password"
            className={style.inerinput}
          />
        </div>
      </div> 
      </div>
    </form>
  );
};

export default Payout;
