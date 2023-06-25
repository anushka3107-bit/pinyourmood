import React from "react";
import LandingPageSearch from "./LandingPages/LandingPageSearch";
import LandingPageShop from "./LandingPages/LandingPageShop";
import LandingPageTop from "./LandingPages/LandingPageTop";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden scrollbar-hide">
        <LandingPageTop />
        <LandingPageSearch />
        <LandingPageShop />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
