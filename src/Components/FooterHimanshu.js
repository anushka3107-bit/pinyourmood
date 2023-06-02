import React from "react";

const FooterHimanshu = () => {
  return (
    <>
      <div className="flex w-full bg-gray-200 items-center h-screen justify-between ">
        <div className="flex flex-col justify-center items-center w-1/2 pl-8">
          <h4 className="text-3xl font-bold hover:text-white">About Us</h4>

          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold">
              We are thrilled to present our talented and dedicated frontend
              development team, a group of innovative professionals who bring
              creativity and expertise to every project. With their combined
              skills and passion for cutting-edge technologies, we strive to
              create captivating user experiences and visually stunning
              interfaces.
            </p>
          </div>

          <div className="flex cursor-pointer space-evenly">
            <a href="/terms">
              <span className="hover:text-white"> Terms & Conditions </span>
            </a>
            <a href="/privacy">
              <span className="px-4 hover:text-white"> Privacy Policy</span>
            </a>
          </div>

          <div className="flex flex-col cursor-pointer hover:text-white">
            <span>@Copyright {new Date().getFullYear()}.</span>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end w-1/2 pr-8 cursor-pointer">
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-bold text-xl hover:text-white">Team Members</h4>
            <a href="/employer">
              <span className="hover:text-white">Anushka Bhardwaj</span>
            </a>
            <a href="/employer">
              <span className="hover:text-white">Nishant Chauhan</span>
            </a>
            <a href="/employer">
              <span className="hover:text-white">Himanshu Bhatt</span>
            </a>
            <a href="/employer">
              <span className="hover:text-white">Unnati Bhole</span>
            </a>
            <div className="pt-3">
              <button className="bg-orange-600 rounded-full px-3 py-3 hover:bg-orange-400 hover:text-white">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterHimanshu;
