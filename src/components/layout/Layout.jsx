import React from "react";
import Footer from "../../components/footer";
import Header from '../../components/header';
import ContactBar from "../contact-bar";
const Layout = ({children}) => {
  return (
    <div>
      <ContactBar/>
      <Header activeimg={true}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
