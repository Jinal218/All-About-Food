import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import mainboxlogo from "../img/mainboxlogo.svg";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import "./MainContainer.css";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <>
      <div className="grid grid-cols-1 items-center justify-center main-box">
        <div className="overlaymyintro">
          <img src={mainboxlogo} className="main-box-logo" />
          <div className="scroll-down">
            <div className="scroll-down-text">Scroll Down</div>
            <div className="scroll-down-arrow">
              <div className="scroll-down-logo"></div>
            </div>
          </div>
        </div>
      </div>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        {/* main upper nu che e me app.js ma thi kadhine aya lagidu che je akha page ne lage che to e background image mate nadtu tu to e me aya lagaidu */}
        <div className="w-full h-auto flex flex-col items-center justify-center ">
          <HomeContainer />
          <MenuContainer />
          {cartShow && <CartContainer />}
        </div>
      </main>
    </>
  );
};

export default MainContainer;
