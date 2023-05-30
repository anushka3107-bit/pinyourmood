import React from "react";
import { useState } from "react";

const Card = ({ imgURL, title }) => {
  const colors = [
    "#FFE5CA",
    "#AEC2B6",
    "#E9EDC9",
    "#FFBFA9",
    "#DDF7E3",
    "#F7C8E0",
    "#EDDBC7",
  ];

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const getBackgroundColor = getRandomColor();

  const [backgroundColor, setBackgroundColor] = useState(getBackgroundColor);

  const handleMouseEnter = () => {
    setBackgroundColor("#F8F1F1");
  };

  const handleMouseLeave = () => {
    setBackgroundColor(getBackgroundColor);
  };

  return (
    <div
      style={{ backgroundColor: getBackgroundColor }}
      className="flex hover:bg-cFilterHoverColor shadow-md justify-center items-center rounded-xl px-10 cursor-pointer"
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
