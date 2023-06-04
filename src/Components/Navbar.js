import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white py-5 w-full ">
      <div className="container mx-auto px-3 flex justify-between items-center">
        <a href="##" className="flex items-center">
          <img
            src="https://i.pinimg.com/736x/db/e3/5f/dbe35ff8f5695e8371ae4d68057d1b9d.jpg"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-semibold ml-2 text-black">
            Pinterest
          </span>
        </a>
        <div className="flex items-center">
          <a
            href="##"
            className="nav-link pr-10 font-medium text-black hover:text-cSearchText"
          >
            About
          </a>
          <a
            href="##"
            className="nav-link pr-10 font-medium text-black hover:text-cSearchText"
          >
            Business
          </a>
          <a
            href="##"
            className="nav-link pr-10 font-medium text-black hover:text-cSearchText"
          >
            Blog
          </a>
          <div className="bg-cSearchIcon mr-4 px-3 py-2 rounded-3xl hover:bg-cHoverColorOrange">
            <a href="" className="nav-link  font-medium text-white">
              Log in
            </a>
          </div>
          <div className="bg-gray-200 px-4 py-2.5 rounded-3xl wrap hover:bg-cSearchIcon">
            <a
              href="dvgsf"
              className="nav-link font-medium  text-black hover:text-white"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
