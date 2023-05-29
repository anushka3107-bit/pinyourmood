import React from "react";
import Navbar from "./Navbar";
import LandingPageBottom from "./LandingPageBottom";

const LandingPageTop = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="w-full h-screen ">
        <Navbar className="w-full sticky" />
=======
      <div className="w-full container-snap overflow-x-auto">
        <div>
          <Navbar className="w-full" />
        </div>
        <div className="flex h-screen text-center justify-center">
          <h1 className="text-6xl pt-32 font-semibold">Get Your Next</h1>
        </div>

        <div>
          <LandingPageBottom />
        </div>
>>>>>>> 690e80de83428a2c4a3c59a4e3fce936d043d113
      </div>
    </>
  );
};

export default LandingPageTop;
