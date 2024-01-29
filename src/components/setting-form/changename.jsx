import React from 'react'
import style from './settingform.module.scss'
import { useForm } from "react-hook-form";
import Button from '../buttons';
const FormChangePassword = () => {
    const { register, handleSubmit } = useForm();
  return (
    <form 
    onSubmit={handleSubmit((dataa) => console.log(dataa))}
      className={style.form}
    >
       <div className={style.labelss}>
                <label className={style.label}>First Name</label>
                <label className={style.label}>Last Name</label>
              </div>
              <div className={style.namess}>
                <input
                  {...register("fname")}
                  placeholder="Name"
                  className={style.finput}
                />

                <input
                  {...register("lname")}
                  placeholder="Name"
                  className={style.finput}
                />
              </div>

              <div className={style.labels}>
                <label className={style.label}>Email address</label>
                <label className={style.label}>Phone number</label>
              </div>
              <div className={style.namess}>
                <input
                  {...register("email")}
                  placeholder="Email address"
                  className={style.finput}
                />

                <input
                  {...register("phone")}
                  placeholder="Phone number"
                  className={style.finput}
                />
              </div>
              <Button
              type={"submit"}
               title={"Save changes"}
                btndiv={style.set}
                 btnClass={style.editbtn}
                 />
    </form>
  )
}

export default FormChangePassword
