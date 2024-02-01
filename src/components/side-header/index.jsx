import React, { useState } from 'react';
import style from './sideheader.module.scss';

import { NavLink } from "react-router-dom";
import nav from '../../assets/images/iconnavigation.png'

const pagesitem = [
    {
      text: "About Team",
    },
    {
      text: "Become Employer",
    },
    {
      text: "Job Alerts",
    },
    {
      text: "All Companies",
    },
    {
      text: "All Locations",
    },
    {
      text: "All Categories",
    },
    {
      text: "Carrer",
    },
    {
      text: "Pricing Table",
    },
    {
      text: "FAQs",
    },
    {
      text: "Privacy Policy",
    },
    {
      text: "Coming Soon",
    },
  ];
const SideHeader = ({buttonhead}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [opencompany, setOpencompany] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  
 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

 
  const Mousein = () => {
    setOpencompany(true);
  };

  const Mouseout = () => {
    setOpencompany(false);
  };

  return (
    <div >
      <div className={style.flexbar}>
      <img src={nav} alt="" onClick={toggleSidebar} className={`${style.button} ${buttonhead}`}/>
      </div>
      <div className={`${style.sidebar} ${isSidebarOpen ? style.open : ''}`}>
      <button onClick={closeSidebar} className={style.btn}>
        Close Sidebar
      </button>
      <div className={`${style.link}`}>
              <div className={style.companyLink}>
                <NavLink to="/" className={style.name}>
                  Home
                </NavLink>
              </div>

              <div className={style.companyLink}>
                <a href="/cats" className={style.name}>
                  Cats
                </a>
              </div>
              <div
                className={style.companyLink}>
              <a href="/jobs" className={style.name}>
                Jobs
              </a>
              </div>
              <div
                className={style.companyLink}
                onMouseEnter={Mousein}
                onMouseLeave={Mouseout}
              >
                <a href="/candidates" className={style.name}>
                  Companies
                </a>
                {opencompany && (
                  <div
                    className={style.optionsBox}
                    onMouseEnter={Mousein}
                    onMouseLeave={Mouseout}
                  >
                    <NavLink className={style.list} to="/company">
                      International jobs
                    </NavLink>
                  </div>
                )}
              </div>
              <div className={style.companyLink}>
              <NavLink to="/candidates" className={style.name}>
                Candidates
              </NavLink>
              </div>

              <div
                className={style.companyLink}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a href="/pages" className={style.name}>
                  Pages
                </a>
                {showOptions && (
                  <div
                    className={style.optionsBox}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={style.divcont}>
                    <NavLink className={style.list} to="/contactus">
                      Contact us
                    </NavLink>
                    <NavLink className={style.list} to="/aboutus">
                      About us
                    </NavLink>
                    </div>
                    {pagesitem.map((e, index) => (
                      <p key={index} className={style.list}>
                        {e.text}
                      </p>
                    ))}

                    <NavLink className={style.list} to="/page404">
                      Page 404
                    </NavLink>
                  </div>
                )}
              </div>

              <div className={style.companyLink}>
                <a href="/blogs" className={style.name}>
                  Blogs
                </a>
              </div>
            </div>
      </div>
    </div>
  );
};

export default SideHeader;
