import React from "react";
import DropMenu from "../DropMenu/DropMenu";
import styles from "./SearchHeader.module.css"; 

const SearchHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <DropMenu />
      </div>
    </header>
  );
};

export default SearchHeader;