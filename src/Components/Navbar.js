import React from "react";

const Navbar = () => {
  return (
    <nav className="py-5 w-full">
      <div className="container mx-auto px-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src="https://i.pinimg.com/736x/db/e3/5f/dbe35ff8f5695e8371ae4d68057d1b9d.jpg"
            alt="Logo"
            className="cursor-pointer w-10 h-10 rounded-2xl "
          />
          <span className="cursor-pointer text-xl font-semibold ml-2 text-black">
            Pinterest
          </span>
        </a>
        <div className="flex items-center">
          <a
            href="/"
            className="pr-10 font-medium text-black hover:text-cSearchText"
          >
            About
          </a>
          <a
            href="/"
            className="pr-10 font-medium text-black hover:text-cSearchText"
          >
            Business
          </a>
          <a
            href="/"
            className="pr-10 font-medium text-black hover:text-cSearchText"
          >
            Blog
          </a>
          <button className="bg-cSearchIcon cursor-pointer mr-4 px-3 py-2 rounded-3xl hover:bg-cHoverColorOrange">
            Login
          </button>
          <div className="bg-gray-200 px-4 py-2.5 rounded-3xl wrap hover:bg-cSearchIcon">
            <a href="/" className="font-medium text-black hover:text-white">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
