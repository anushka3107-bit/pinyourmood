import React from "react";
import { recepies } from "../../Data/SignUpImagesData";
import { ImgHolder } from "../LandingPages/ImgHolder";
import Navbar from "../Navbar";
import Typewriter from "typewriter-effect";

const LandingPageTop = () => {
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
    <>
      <Navbar className="fixed cursor-pointer" />
      <div className="relative h-screen w-screen overflow-hidden bg-black">
        <div
          className="absolute w-screen h-screen inset-0 bg-gradient-to-r
       from-pink-500 via-red-500 to-yellow-500 opacity-20 bg-blend-overlay"
        ></div>
        <div className="absolute text-white text-7xl text-center font-bold flex justify-center items-center h-full w-full">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Save, Curate, and Inspire!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Unleash Your Creativity!")
                .start();
            }}
          />
        </div>
        <div className="flex flex-row gap-[18px] w-[107%]">
          <RenderColumn />
        </div>
      </div>
    </>
  );
};

export default LandingPageTop;
