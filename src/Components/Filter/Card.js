import React from "react";

const Card = ({ imgURL, title }) => {
  const colors = [
    "#FEFF86",
    "#FDCEDF",
    "#FFD3B0",
    "#C7E9B0",
    "#FFEBB4",
    "#E5D1FA",
    "#FFE7CC",
    "#FFD4D4",
  ];

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const getBackgroundColor = getRandomColor();

  return (
    <div
      style={{ backgroundColor: getBackgroundColor }}
      className="flex shadow-md justify-center items-center rounded-xl px-10 cursor-pointer"
    >
      <img
        src={imgURL}
        alt={title}
        className="h-24 w-24 rounded-2xl px-4 py-4"
      />
      <h1 className="text-xl font-semibold text-gray-800 px-5 py-5 ">
        {title}
      </h1>
    </div>
  );
};

export default Card;
