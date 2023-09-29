"use client";

import { Carousel } from "flowbite-react";
import logo1 from "./assets/icons/icon1.png";
import logo2 from "./assets/icons/icon2.png";
import logo3 from "./assets/icons/icon3.png";
import logo4 from "./assets/icons/icon4.png";
import logo5 from "./assets/icons/icon5.png";
import logo6 from "./assets/icons/icon6.png";
import logo7 from "./assets/icons/icon7.png";
import logo8 from "./assets/icons/icon8.png";
import logo9 from "./assets/icons/icon9.png";
import logo10 from "./assets/icons/icon10.png";
import logo11 from "./assets/icons/icon11.png";
import logo12 from "./assets/icons/icon12.png";
import logo13 from "./assets/icons/icon13.png";
import logo14 from "./assets/icons/icon14.png";

export default function Network() {
  return (
    <div className=" target3 flex flex-col content-center items-center justify-items-center place-items-center">
      <h2 className="text-center text-black z-10 font-normal pb-4 sm:text-5xl text-4xl sm:pt-6 pt-2 underline decoration-2 sm:underline-offset-[16px] underline-offset-[8px]">
        Netzwerk
      </h2>
      <Carousel
        slideInterval={1500}
        className=" sm:h-[55vh] h-[500px] md:h-[55vh] xl:h-[40vh] pb-10"
      >
        <div className="flex sm:flex-row flex-col flex-wrap content-center sm:mt-6 mt-6 items-center justify-items-center place-items-center">
          <img className="p-3" src={logo1} alt="logo" />
          <img className="p-3" src={logo2} alt="logo" />
          <img className="p-3" src={logo3} alt="logo" />
          <img className="p-3" src={logo4} alt="logo" />
          <img className="p-3" src={logo5} alt="logo" />
        </div>
        <div className="flex sm:flex-row flex-col flex-wrap content-center sm:mt-6 mt-8 pb-2 items-center justify-items-center place-items-center">
          <img className="p-3" src={logo6} alt="logo" />
          <img className="p-3" src={logo7} alt="logo" />
          <img className="p-3" src={logo8} alt="logo" />
          <img className="p-3" src={logo9} alt="logo" />
          <img className="p-3" src={logo10} alt="logo" />
        </div>
        <div className="flex sm:flex-row flex-col sm:flex-nowrap flex-wrap content-center sm:mt-6 mt-2 items-center justify-items-center place-items-center t1">
          <img className="p-3" src={logo11} alt="logo" />
          <img className="p-3" src={logo12} alt="logo" />
          <img className="p-3" src={logo13} alt="logo" />
          <img className="p-3" src={logo14} alt="logo" />
        </div>
      </Carousel>
    </div>
  );
}
