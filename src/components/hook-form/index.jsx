import React from 'react'
import style from './form.module.scss'
import Button from "../../components/buttons";
import { useForm } from 'react-hook-form';
const HookForm = () => {
    const {
        register,
        handleSubmit,
      } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className={style.form}>
        <div className={style.nameinput}>
      <input {...register('firstName')} 
      placeholder='firstname'
      className={style.inerinput}
      />
      <input {...register('lastName', { required: true })}
       placeholder='lastname'
       className={style.inerinput}
       />
      
      </div>
        <div className={style.inputfield}>
      <input {...register('email')} placeholder='email' className={style.inerinput}/>
      <input {...register('phone')} placeholder='phone'className={style.inerinput}/>
      <input {...register('messege')} placeholder='messege'className={style.messege}/>
      <Button type="submit" title={"Send messege"} btndiv={style.widthbuton}/>
      </div>
    </form>
  )
}

export default HookForm
