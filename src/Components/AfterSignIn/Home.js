import React from "react";
import SearchBar from "./SearchBar";
import Filter from "../AfterSignIn/Filter/CardIndex";
import Content from "./ContentPage";
import Footer from "../Footer";

const ContentPage = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="pb-5">
          <SearchBar className="h-screen w-screen fixed" />
          <Filter className="h-screen w-screen" />
        </div>
        <Content className="h-screen w-screen" />
        <Footer className="w-screen" />
      </div>
    </>
  );
};

export default ContentPage;
