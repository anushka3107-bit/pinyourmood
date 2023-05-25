import React from "react";
import { useState } from "react";
import { filterData } from "../data/filterdata";
import Card from "./Card";

const Filter = () => {
    const [items, setItems] = useState(filterData)
  return (
    <div className="flex">
      <Card items={ items } />
    </div>
  );
};

export default Filter;
