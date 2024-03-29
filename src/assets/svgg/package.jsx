import React from 'react'
import style from './clocksvg.module.scss'
import { useNavigate } from "react-router-dom";
const Candidate = ({settiing}) => {
  const navigate = useNavigate();

  const handleApp = () => {
    navigate("/package");
  };
  return (
    <div className={style.svgcla} onClick={() => handleApp()}> 
    <div className={`${style.subdiv} ${settiing}`}>
  
    <svg width="24" height="19" viewBox="0 0 24 19" fill="#" xmlns="http://www.w3.org/2000/svg">
<path d="M4.87206 9.67143e-09H19.1261C19.2838 -2.19333e-05 19.4394 0.0372955 19.58 0.108902C19.7206 0.180508 19.8423 0.284371 19.9351 0.412L23.7581 5.668C23.826 5.76152 23.8595 5.8757 23.8527 5.99112C23.846 6.10653 23.7995 6.21603 23.7211 6.301L12.3661 18.602C12.2761 18.6992 12.1512 18.7568 12.0188 18.7621C11.8865 18.7673 11.7574 18.7198 11.6601 18.63C11.6531 18.624 7.86006 14.515 0.277057 6.301C0.19866 6.21603 0.15213 6.10653 0.145384 5.99112C0.138638 5.8757 0.172093 5.76152 0.240057 5.668L4.06306 0.412C4.15584 0.284371 4.2775 0.180508 4.41811 0.108902C4.55871 0.0372955 4.71427 -2.19333e-05 4.87206 9.67143e-09ZM5.38206 2L2.58206 5.85L11.9991 16.05L21.4161 5.85L18.6161 2H5.38206Z" fill="#"/>
</svg>



    <p>Package</p>
    </div>
    </div>
  )
}

export default Candidate


