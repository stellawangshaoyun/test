import React from "react";
import { palomaText } from "../assets";
import Navbar from "./Navbar";
const Main = () => {
  return (
    <div className="z-10 grid grid-rows-1 grid-flow-col">
      <div className="row-start-1 row-end-2 z-10 p-4">
        <img
          src={palomaText}
          alt="palomaText"
          className="object-contain h-98 slide-in-left xl:h-98 xs:h-98 xxs:h-96"
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Main;
