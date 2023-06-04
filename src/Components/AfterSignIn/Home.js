import React from "react";
import SearchBar from "./SearchBar";
import Filter from "../AfterSignIn/Filter/CardIndex";
import Footer from "../Footer";
import Content from "./ContentPage";

const ContentPage = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden scrollbar-hide">
        <div className="pb-5">
          <SearchBar className="h-screen w-screen" />
          <Filter className="h-screen w-screen" />
        </div>
        <Content className="h-screen w-screen" />
        <Footer className="w-screen" />
      </div>
    </>
  );
};

export default ContentPage;
