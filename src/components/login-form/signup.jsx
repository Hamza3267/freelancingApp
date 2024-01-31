import React  from 'react'
import style from "./signin.module.scss";
import Button from "../../components/buttons";
import { useForm } from "react-hook-form";
import Person from "../../assets/svgg/person";
import Employ from "../../assets/svgg/employee";
const Signup = ({handleLogin}) => {
    const { register, handleSubmit,reset } = useForm({
      defaultValues: {
        fname: "",
        lname: "",
        username: "",
        phone: "",
        email: "",
        pasword: "",
      }
    });
    

    const handleFormSubmit = (data) => {
      console.log(data);
      localStorage.setItem('signupData', JSON.stringify(data));
      reset({
        fname:"",
        lname:"",
        username:"",
        phone:"",
        email:"",
        pasword:"",
      })
     
handleLogin();
    };
   
  return (
    <form
          onSubmit={handleSubmit((data) => handleFormSubmit(data))}
          className={style.form}
        >
       
            <div>
              <div className={style.svgbuton}>
                <Person />
                <Employ />
              </div>

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
              <div className={style.inputfield}>
                <label className={style.label}>Username</label>
                <input
                  {...register("username")}
                  placeholder="Enter Username"
                  className={style.inerinput}
                />

                <label className={style.label}>Email</label>

                <input
                  {...register("email")}
                  placeholder="Enter Email"
                  className={style.inerinput}
                />
                <label className={style.label}>Phone number</label>
                <input
                  {...register("phone")}
                  placeholder="Phone number"
                  className={style.inerinput}
                />

                <label className={style.label}>Password</label>
                <input
                  type="password"
                  {...register("pasword")}
                  placeholder="Password"
                  className={style.inerinput}
                />
                <div className={style.paswordreset}>
                  <div className={style.checkbox}>
                    <input type="checkbox" />

                    <p>
                      Accept the<span> Term </span> and{" "}
                      <span> Reset password</span>
                    </p>
                  </div>
                </div>
                <Button
                  type="submit"
                  title={"Sign up"}
                  btndiv={style.widthbuton}
                  btnClass={style.btnset}
                  // onClick={()=>handleReset()}
                />
              </div>
            </div>
       
        </form> 
  )
}

export default Signup
