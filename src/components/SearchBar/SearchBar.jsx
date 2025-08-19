import React from "react";
import { Input } from "antd";
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Input.Search size="large" placeholder="Input text" enterButton="Search" />
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
