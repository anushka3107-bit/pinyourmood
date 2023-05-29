import React from "react";
import Navbar from "./Navbar";
import LandingPageBottom from "./LandingPageBottom";

const LandingPageTop = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <Navbar className="w-full sticky" />
      </div>
    </>
  );
};

export default LandingPageTop;
