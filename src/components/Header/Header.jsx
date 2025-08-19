import React from "react";
import DropMenu from "../DropMenu/DropMenu";
import styles from "./Header.module.css"; // Import CSS module

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <DropMenu />
      </div>
    </header>
  );
};

export default Header;