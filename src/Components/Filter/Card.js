import React from "react";

const Card = ({ imgURL, title }) => {
  return (
    <div className="flex bg-red-200 shadow-md justify-center items-center rounded-lg px-10 cursor-pointer">
      <img
        src={imgURL}
        alt={title}
        className="h-24 w-24 rounded-2xl px-3 py-3"
      />
      <h1 className="text-xl font-semibold text-gray-800 px-5 py-5">{title}</h1>
    </div>
  );
};

export default Card;
