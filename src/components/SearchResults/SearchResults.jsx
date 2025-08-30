import React from "react";
import ListCard from "./Card/ListCard";


const SearchResults = ({ searchType, require, setResult }) => {
  return (
    <React.Fragment>
      <div>
        <ListCard searchType={searchType} require={require} setResult={setResult}  />
      </div>
    </React.Fragment>
  );
};

export default SearchResults;
