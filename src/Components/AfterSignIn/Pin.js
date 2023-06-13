import React from "react";
import "./pin.css";
import { FiUpload } from "react-icons/fi";

function Pin({ pinSize, imgSrc, name, link }) {
  return (
    <div
      className={`pin ${pinSize} rounded-2xl bg-gray-700 m-[5px] 
      cursor-pointer relative overflow-hidden`}
    >
      <img src={imgSrc} alt="" className="w-full h-full object-cover" />

      <div
        className="content px-5 absolute w-full h-7 bg-gray-500 
      bg-opacity-50 bottom-[-55px] left-0 rounded-lg backdrop-filter-sm 
      flex justify-between items-center"
      >
        <h3 className="text-white text-lg font-medium">{name}</h3>
        <FiUpload className="text-white font-bold text-lg" />
        <a href={link}></a>
      </div>
    </div>
  );
}

export default Pin;
