import React from "react";
import { Main } from "./components";
import { backgroundImg, backgroundImgSm, backgroundImgXs } from "./assets";

const App = () => {
  return (
    <div className="h-screen w-screen relative bg-texture bg-repeat">
      <div className="-z-0 absolute">
        <img
          src={backgroundImg}
          alt="backgroundImg"
          className="h-98 hidden xl:flex  md:flex sm:hidden  xxs:hidden"
        />
        <img
          src={backgroundImgSm}
          alt="backgroundImgSm"
          className="h-98 hidden xl:hidden  md:hidden sm:flex  xs:flex xxs:hidden"
        />
        <img
          src={backgroundImgXs}
          alt="backgroundImgXs"
          className="max-h-fit xl:hidden xs:hidden xxs:flex"
        />
      </div>
      <Main />
    </div>
  );
};

export default App;
