import React from "react";
import Navbar from "./Navbar";
import LandingPageBottom from "./LandingPageBottom";

const LandingPageTop = () => {
  return (
    <>
      <div className="w-screen h-screen container-snap overflow-x-auto">
        <div>
          <Navbar className="w-full" />
        </div>
        <div className="flex h-screen text-center justify-center">
          <h1 className="text-6xl pt-32 font-semibold">Get Your Next</h1>
        </div>

        <LandingPageBottom />
      </div>
    </>
  );
};

export default LandingPageTop;
