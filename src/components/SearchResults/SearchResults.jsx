import React, {useState} from "react";
import ListCard from "./Card/ListCard";
import { Pagination } from "antd";
import styles from "./SearchResults.module.css"

const SearchResults = () => {
  const [current, setCurrent] = useState(1);
  const onChange = page => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <React.Fragment>
      <div>
        <ListCard />
      </div>
      <div className={styles.pageContainer}>
        <Pagination current={current} onChange={onChange} total={50} />
      </div>
    </React.Fragment>
  );
};

export default SearchResults;
