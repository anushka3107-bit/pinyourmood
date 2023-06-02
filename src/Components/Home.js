import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter/CardIndex";
import Footer from "./footer";
//import Sidebar from "./Sidebar";

const ContentPage = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div>
          <SearchBar className="h-screen w-screen" />
          <Filter className="h-screen w-screen" />
        </div>
        <Footer className="h-screen w-screen" />
      </div>
    </>
  );
};

export default ContentPage;
