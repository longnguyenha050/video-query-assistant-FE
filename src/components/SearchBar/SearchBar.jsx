import React from "react";
import { Input } from "antd";

const SearchBar = () => {
  return (
    <React.Fragment>
      <div>
        <Input.Search placeholder="Input text" enterButton="Search" loading />
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
