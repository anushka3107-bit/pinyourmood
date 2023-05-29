import React from "react";
import { ImgHolder } from "./ImgHolder";
import { recepies } from "../data/recipies";

const SignUpPage = () => {
  const RenderColumn = () => {
    const components = [];
    const recIdx = {
      val: 0,
    };
    for (let i = 0; i < 7; i++) {
      components.push(
        i % 2 === 0 ? (
          <div className="animate-marquee-infinite w-full">
            {renderImg(2, recIdx)}
          </div>
        ) : (
          <div className="animate-marquee2-infinite w-full mt-[-10rem] mb-0 mx-0">
            {renderImg(3, recIdx)}
          </div>
        )
      );
    }
    return components;
  };

  function renderImg(count, recIdx) {
    const image = [];
    for (let i = 0; i < count; i++) {
      image.push(<ImgHolder img={recepies[recIdx.val]} />);
      recIdx.val++;
    }
    return image;
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      <div className="absolute w-screen h-screen inset-0 bg-gradient-to-r
       from-pink-500 via-red-500 to-yellow-500 opacity-20 bg-blend-overlay animate-pulse"></div>
      <div className="flex flex-row gap-[18px] w-[107%]">
        <RenderColumn />
      </div>
    </div>
  );
};

export default SignUpPage;
