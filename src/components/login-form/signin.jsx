import React from "react";
import style from "./signin.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons";
import { useForm } from "react-hook-form";
// import { json, useNavigate } from "react-router-dom";
import fb from "../../assets/images/loginfacebook.png";
import ln from "../../assets/images/loginlinkedin.png";
import google from "../../assets/images/logingoogle.png";
const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSignIn = (signinData) => {
    console.log(signinData);
    localStorage.setItem('signInData', JSON.stringify(signinData));
    const storedSigninData = localStorage.getItem("signInData")
    const storedSignupData = localStorage.getItem("signupData");
    if (storedSignupData) {
      const parsedSignupData = JSON.parse(storedSignupData);
        const parsedSigninData = JSON.parse(storedSigninData);

      if (parsedSigninData.email === parsedSignupData.email && parsedSigninData.password === parsedSignupData.pasword) 
      {
        navigate('/dashboard')
        console.log("Sign in successful!");
      } 
      else
       {
        console.log("Invalid email or password");
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit((dataa) => handleSignIn(dataa))}
      className={style.form}
    >
      <div>
        <div className={style.divusername}>
          <p>
            Username: <span>Employer</span> or <span>Candidate</span>
          </p>
          <p>
            Password: <span>uxper123</span>
          </p>
        </div>
        <div className={style.inputfield}>
          <label className={style.label}>Account or Email</label>
          <input
            {...register("email")}
            placeholder="Enter Account or Email"
            className={style.inerinput}
          />

          <label className={style.label}>Password</label>
          <input
            {...register("password")}
            // type="password"
            placeholder="Password"
            className={style.inerinput}
          />
          <div className={style.paswordreset}>
            <p>
              Forgot your password?<span>Reset password</span>
            </p>
          </div>
          <Button
            type="submit"
            title={"Sign in"}
            btndiv={style.widthbuton}
            btnClass={style.btnset}
          />
          <p className={style.continue}>Or Continue with</p>
          <div className={style.imagess}>
            <img src={fb} alt="" />
            <img src={google} alt="" />
            <img src={ln} alt="" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
