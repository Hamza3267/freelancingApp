import React, { useState, useEffect } from 'react';
import style from './textbar.module.scss';

const messages = [
  <div>
    Your <span className={style.dream}>DreamJob</span> is just a search away!
  </div>,
  <div>
    Your <span className={style.dream}>Talent</span> is just a search away!
  </div>,
];

const NavBar = () => {
  const [text, setText] = useState(messages[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setText(messages[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={style.divtext}>
      <text className={style.text}>
        <span style={{ fontWeight: '600' }}>12K </span> jobs in{' '}
        <span style={{ fontWeight: '600' }}> 200 </span> Locations
      </text>
      <h1 className={style.changetext}>{text}</h1>
    </div>
  );
};

export default NavBar;
