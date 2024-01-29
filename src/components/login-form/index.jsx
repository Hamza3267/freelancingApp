import React, { useState } from "react";
import style from "./signin.module.scss";

import SignIn from "./signin";
import Signup from "./signup";

const LoginPage = ({ isOpen, onClose }) => {
  const [activeButton, setActiveButton] = useState("Login");
  const [login, setLogIn] = useState(true);
  const [signup, setSignUp] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleLogin = () => {
    setLogIn(true);
    setSignUp(false);
    setActiveButton("Login");
  };
  const handleSignup = () => {
    setSignUp(true);
    setLogIn(false);
    setActiveButton("Signup");
  };

  return (
    <div className={style.modaloverlay}>
      <div className={style.modalcontent}>
        <span className={style.closebtn} onClick={onClose}>
          {" "}
          &times;{" "}
        </span>
        <div className={style.logsign}>
          <h3
            onClick={handleLogin}
            className={activeButton === "Login" ? style.act : style.active}
          >
            Login
          </h3>
          <h3
            onClick={handleSignup}
            className={
              activeButton === "Signup" ? style.actsign : style.activesign
            }
          >
            Signup
          </h3>
        </div>
        {login && <SignIn />}
        {signup && <Signup />}
      </div>
    </div>
  );
};

export default LoginPage;
