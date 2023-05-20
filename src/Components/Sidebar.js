import React from "react";
import { RiHomeFill, RiTimer2Line } from "react-icons/ri";
import { BiGroup } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="flex flex-col lg:w-62 md:w-30  h-screen bg-lilac">
      <div className="text-pink-700 cursor-pointer items-center justify-center py-20 px-20">
        <BsGithub className="h-20 w-20 " />
        <div className="flex flex-row items-center justify-center  ">
          <RiHomeFill className="h-5 w-5 " />
          <h3 className="font-bold text-lg pl-2">Home</h3>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <RiTimer2Line className="h-5 w-5 " />
          <h3 className="text-lg font-bold pl-2">Recent</h3>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <BiGroup className="h-5 w-5 " />
          <h3 className="text-lg font-bold pl-2">Following</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
