import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
const SearchBar = () => {
  return (
    <>
      <div className="flex relative w-full shadow-[0px_5px_20px_rgba(0,0,0,0.15)] mt-0 px-0 py-2.5">
        <div className="w-[50px] min-w-[50px] m-[5px]">
          <img
            src="https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png"
            alt=""
          />
        </div>
        <button className="w-[70px] m-2 rounded-[50px] hover:text-[white] hover:transition-[0.3s] hover:bg-black">
          Home
        </button>
        <button className="w-[70px] m-2 rounded-[50px] hover:text-[white] hover:transition-[0.3s] hover:bg-black ">
          Explore
        </button>
        <div className="flex w-[70%] cursor-pointer h-10 bg-[#e9e9e9] mt-5 m-2 px-[15px] py-2 rounded-[50px] border-2 border-solid border-[rgba(0,0,0,0.1)]">
          <input
            className="w-[75rem] text-black bg-transparent border-r-2 border-r-[#0000001a] border-solid justify-left"
            type="text"
            placeholder="Search Interests"
          />
          <div className="flex justify-center w-[10%] mr-0">
            <BiSearchAlt />
          </div>
        </div>
        <div className="w-[90px] flex text-xl cursor-pointer h-10 mt-2">
          <button className="p-2 rounded-[50%] hover:bg-[#e9e9e9]">
            <BsBellFill />
          </button>
          <button className="p-2 rounded-[50%] hover:bg-[#e9e9e9]">
            <AiFillMessage />
          </button>
          <button className="p-2 rounded-[50%] hover:bg-[#e9e9e9]">
            <FaUserCircle />
          </button>
          <button className="p-2 rounded-[50%] hover:bg-[#e9e9e9]">
            <IoIosArrowDropdown />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
