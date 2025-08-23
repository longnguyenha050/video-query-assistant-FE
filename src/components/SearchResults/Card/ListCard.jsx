import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Flex } from "antd";
import { Pagination } from "antd";
import { fetchRandomImages } from "../../../services/userService";
import styles from "./ListCard.module.css";

const PAGE_SIZE = 40;

const ListCard = () => {
  const [current, setCurrent] = useState(1);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [totalImage, setTotalImage] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getRandomImages(current);
  }, [current, fullData]);

  const setPageData = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const getData = async () => {
    console.log("Fetching random images...");
    const data = await fetchRandomImages();
    if (data) {
      setTotalImage(data.total_items);
      setFullData(data.items);
    }
  };

  const getRandomImages = (page) => {
    const pageData = fullData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    setData(pageData);
  };

  return (
    <React.Fragment>
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          <Flex wrap gap="large">
            {data.map((item) => (
              <Card key={item.id} img={item} />
            ))}
          </Flex>
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            current={current}
            onChange={setPageData}
            total={totalImage}
            showSizeChanger={false}
            pageSize={PAGE_SIZE} // Số items mỗi trang
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListCard;
