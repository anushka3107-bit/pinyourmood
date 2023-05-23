const LandingPageThirdPage = () => {
  return (
    <>
      <div className="flex bg-cBackgroundColor">
        <img
          className="object-cover w-1/2 h-auto"
          src="https://s.pinimg.com/webapp/shop-bd0c8a04.png"
          alt="fashion"
        />
        <div className="flex-1 h-screen flex flex-col items-center justify-center ">
          <span className="text-cTextColorShop text-6xl font-extrabold">
            See it, make it,
          </span>
          <span className="pt-2 text-cTextColorShop text-6xl font-extrabold">
            try it, do it
          </span>
          <div className="max-w-md justify-center text-center text-cTextColorShop text-2xl font-medium">
            <p className="pt-12 pl-6 break-words">
              The best part of Pinterest is discovering new things and ideas
              from people around the world.
            </p>
          </div>
          <div className="pt-3">
            <button className="bg-cTextColorShop px-6 py-2 rounded-full justify-center items-center text-white font-medium ">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageThirdPage;
