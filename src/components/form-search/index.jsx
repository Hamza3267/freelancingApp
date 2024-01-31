import React from "react";
import style from "./search.module.scss";
import Button from "../../components/buttons";
import { useForm } from "react-hook-form";

const Searchform = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className={style.form}
    >
      <div className={style.inputfield}>
        <input
          {...register("email")}
          placeholder="email"
          className={style.inerinput}
        />
        <input
          {...register("phone")}
          placeholder="phone"
          className={style.inerinput}
        />
        <input
          {...register("messege")}
          placeholder="messege"
          className={style.inerinput}
        />
        <div className={style.butn}>
          <Button
            type="submit"
            title={"Send messege"}
            btndiv={style.widthbuton}
          />
        </div>
      </div>
    </form>
  );
};

export default Searchform;
