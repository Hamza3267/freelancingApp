import React from "react";
 import style from './layout.module.scss'
import Footer from "../../components/footer";
import Header from '../../components/header';
import ContactBar from "../contact-bar";

const Layout = ({children}) => {
  return (
    <div className={style.layouttt}>
      <ContactBar/>
 
      <Header activeimg={true}/>
   
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
