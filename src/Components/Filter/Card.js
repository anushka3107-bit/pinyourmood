import React from "react";
import { useState } from "react";

const Card = ({ imgURL, title }) => {
  const colors = [
    "#FFBFA9",
    "#FFF8BC",
    "#F7E9D7",
    "#DAF5FF",
    "#FFABAB",
    "#FFCEFE",
    "#FBA1A1",
    "#FCE2DB",
  ];

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const getBackgroundColor = getRandomColor();

  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  const handleMouseEnter = () => {
    setBackgroundColor("#F8F1F1");
  };

  const handleMouseLeave = () => {
    setBackgroundColor(getRandomColor());
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 0.3s",
      }}
      className="flex shadow-md justify-center items-center rounded-xl px-10 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imgURL}
        alt={title}
        className="h-24 w-24 rounded-3xl px-4 py-4"
      />
      <h1 className="text-xl font-semibold text-gray-800 px-5 py-5 ">
        {title}
      </h1>
    </div>
  );
};

export default Card;
