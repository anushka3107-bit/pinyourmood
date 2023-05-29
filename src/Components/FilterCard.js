import React from "react";
import { filterData } from "../data/filterData";

function FilterCard() {
  return (
    <div className="flex">
      {filterData.map((card, index) => (
        <div key={index}>
          <img src={card.imgURL} className="w-10 h-15" alt="filterImg" />
          <span>{card.title}</span>
        </div>
      ))}
    </div>
  );
}

export default FilterCard;
