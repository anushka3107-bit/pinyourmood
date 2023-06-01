import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
const SearchBar = () => {
  return (
    <>
      <div className="flex justify-between w-full h-20 shadow-[0px_5px_20px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-center pl-10 cursor-pointer">
          <img
            className="w-10 h-10"
            src="https://i.pinimg.com/236x/8e/e1/23/8ee12366506cd70d2896ea0543934e3e.jpg"
            alt="logo"
          />

          <div className="pl-10 text-lg font-semibold">
            <button className="px-4 py-2 rounded-3xl text-gray-600 hover:text-white hover:bg-cHoverColorOrange">
              Home
            </button>
          </div>

          <div className=" pl-5 text-lg font-semibold">
            <button className="px-4 py-2 rounded-3xl text-gray-600 hover:text-white hover:bg-cHoverColorOrange ">
              Explore
            </button>
          </div>
        </div>

        <div className="flex w-3/5 cursor-pointer h-10 bg-[#e9e9e9] mt-5 m-2 px-[15px] py-2 rounded-[50px] ">
          <input
            className="w-[75rem] text-gray-500 bg-transparent border-r-2 border-r-gray-300  border-solid justify-left outline-none border-none"
            type="text"
            placeholder="Search Interests"
          />
          <div className="flex justify-center items-center w-[10%] ">
            <BiSearchAlt className="text-2xl text-gray-500" />
          </div>
        </div>

        <div className="flex text-2xl cursor-pointer items-center justify-end mr-5 ml-0 ">
          <div className="text-gray-600 py-2 px-2  hover:bg-gray-200 rounded-full">
            <BsBellFill />
          </div>
          <div className="text-gray-600 py-2 px-2 hover:bg-gray-200 rounded-full">
            <FaCommentDots />
          </div>
          <div className="text-gray-300 py-2 px-2 hover:bg-gray-200 rounded-full">
            <FaUserCircle />
          </div>
          <div className="text-gray-600  py-2 px-2 hover:bg-gray-200 rounded-full">
            <FiChevronDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
