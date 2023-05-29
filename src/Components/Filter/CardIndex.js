import React from "react";
import { filterData } from "../../data/filterdata";
import Card from "./Card";

const CardIndex = () => {
  return (
    <div className="flex pt-10 px-10">
      {filterData.map((item) => {
        return (
          <div className="mr-10">
            <Card id={item.id} imgURL={item.imgURL} title={item.title} />
          </div>
        );
      })}
    </div>
  );
};

export default CardIndex;
