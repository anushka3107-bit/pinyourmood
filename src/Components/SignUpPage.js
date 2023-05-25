import React from "react";
import { ImgHolder } from "./imgHolder";
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
          <div className="w-full">{renderImg(2, recIdx)}</div>
        ) : (
          <div className="w-full mt-[-10rem] mb-0 mx-0">
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
    <div className="h-screen w-screen overflow-hidden bg-white">
       <div class= "">
        <div className="flex flex-row gap-[18px] w-[107%]">
          <RenderColumn />
        </div>
      </div>
      </div>
  );
};

export default SignUpPage;
