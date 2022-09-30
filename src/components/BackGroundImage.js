<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> acad08f4703c5243e4949011c646f3725f66b566
import mainboxlogo from "../img/mainboxlogo.svg";

function BackGroundImage(props) {
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 items-center justify-center main-box">
      <div className="overlaymyintro">
        <img src={props.logo} className="main-box-logo" />
        <div className="scroll-down">
          <div className="scroll-down-text">{props.txt}</div>
          <div className="scroll-down-arrow">
            <div className="scroll-down-logo"></div>
=======
    <div className='grid grid-cols-1 items-center justify-center main-box'>
      <div className='overlaymyintro'>
        <img src={props.logo} className='main-box-logo' />
        <div className='scroll-down'>
                  <div className='scroll-down-text'>{props.txt}</div>
          <div className='scroll-down-arrow'>
            <div className='scroll-down-logo'></div>
>>>>>>> acad08f4703c5243e4949011c646f3725f66b566
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackGroundImage;
