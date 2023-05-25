import React from "react";
import { BsChevronDown } from "react-icons/bs";

const LandingPageBottom = () => {
  return (
    <div className="bg-cBackgroundBlue flex justify-center items-center ">
      <p className="p-3 font-medium">Here's how it works</p>
      <span>
        <BsChevronDown className="font-bold text-lg " />
      </span>
    </div>
  );
};

export default LandingPageBottom;
