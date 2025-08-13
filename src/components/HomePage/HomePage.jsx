import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

const HomePage = () => {
  return (
    <React.Fragment>
      <div>
        <div style={{ marginBottom: "20px" }}>
          <SearchBar />
        </div>
        <div>
          <SearchResults />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
