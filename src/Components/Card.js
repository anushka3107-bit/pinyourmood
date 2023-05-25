import React from "react";
import { filterdata } from "../data/filterdata";

const Card = ({ items }) => {
  return (
    <div className="flex ">
      <h1>WERTYUIO</h1>
      <div className="bg-pink-300 h-20 w-20 t-20">
        {items?.map((item) => (
          <img src={item.imgURL} alt={item.title} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Card;
