import React from "react";
import style from "./slider.module.scss";

const jobData = [
  {
    location: "New York",
    position: "Lead Web3 Engineer",
    backgroundColor: "#3498db",
  },
  {
    location: "California",
    position: "Customer Success Manager",
    backgroundColor:"#ff6900"
  },
  { location: "New York", 
  position: "Head of Analytics Engineering" ,
  backgroundColor:"#fcb900"
},
  { location: "California", 
  position: "Freelance App Designer" ,
  backgroundColor:"#f78da7"
},
{ location: "New York", 
position: "Head of Analytics Engineering" ,
backgroundColor:"#7bdcb5"
},
{ location: "California", 
position: "Freelance App Designer",
backgroundColor:"#ffffff" 
},
{ location: "New York", 
position: "Head of Analytics Engineering",
backgroundColor:"#9b51e0" 
},
{ location: "California", 
position: "Freelance App Designer" ,
backgroundColor:"#abb8c3"
},
];

const MsgSlider = () => {
  return (
    <>
      <div className={style.maincontainer}>
        {jobData.map((job, index) => (
          <div
            key={index}
            className={`${style.mapp} ${index % 2 === 0 ? style.even : style.odd}`}
            style={{ backgroundColor: job.backgroundColor }}
          >
            <div className={style.wrapper}>{job.location}</div>
            <h3 className={style.title}>{job.position}</h3>
          </div>
        ))}
      </div>
    </>
  );
};;

export default MsgSlider;
