import React from "react";
import Pin from "./Pin";
import PinData from "../../Data/pindata";

const ContentPage = () => {
  return (
    <div className="flex-1 h-auto grid grid-cols-[repeat(auto-fill,300px)] auto-rows-[10px] justify-center mt-[15px]">
      {PinData &&
        PinData.map((data) => (
          <Pin
            key={data.id}
            pinSize={data.size}
            imgSrc={data.imgSrc}
            name={data.name}
            link={data.link}
          />
        ))}
    </div>
  );
};

export default ContentPage;
