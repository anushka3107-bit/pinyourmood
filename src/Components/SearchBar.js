import React from 'react';
import "./SearchBar.css";
import { BiSearchAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
const SearchBar = () => {
  return (
    <>
        <div className="search">
          <div className="LogoImage">
            <img src="https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png" alt=''/>
          </div>
          <button className="home">Home</button>
          <button className="explore">Explore</button>
          <div className="search-box">
              <input type="text" placeholder="Search Interests"/>
              <div className="SearchIcon">
                <BiSearchAlt />
              </div>
          </div>
          <div className="Buttons">
            <button className="Notifications">
              <BsBellFill />
            </button>
            <button className="Messages">
              <AiFillMessage />
            </button>
            <button className="UserProfile">
              <FaUserCircle />
            </button>
            <button className="Options">
              <IoIosArrowDropdown />
            </button>
          </div>
          
        </div> 
    </>
  )
}

export default SearchBar;
