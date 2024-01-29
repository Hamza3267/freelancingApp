import React from "react";
import style from "./settingform.module.scss";
import { useForm } from "react-hook-form";
import Button from "../buttons";
const Changepassword = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((dataa) => console.log(dataa))}>
        <div className={style.maindivvv}>
      <label className={style.label}>Current password</label>
      <input
        {...register("username")}
        placeholder="Enter current password"
        className={style.inerinput}
      />

      <label className={style.label}>New password</label>

      <input
        {...register("email")}
        placeholder="Enter new password"
        className={style.inerinput}
      />
      <label className={style.label}>Confirm new password</label>
      <input
        {...register("phone")}
        placeholder="Enter confirm password"
        className={style.inerinput}
      />


      <Button
        type={"submit"}
        title={"Save changes"}
        btndiv={style.set}
        btnClass={style.editbtn}
      />
      </div>
    </form>
  );
};

export default Changepassword;
