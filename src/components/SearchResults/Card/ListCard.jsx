import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Flex } from "antd";
import { Pagination } from "antd";
import { fetchRandomImages } from "../../../services/userService";
import styles from "./ListCard.module.css";


const ListCard = () => {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const [totalImage, setTotalImage] = useState();

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  useEffect(() => {
    getRandomImages(current);
  }, [current]);

  const getRandomImages = async (page) => {
    const res = await fetchRandomImages(page);
    console.log(res);
    if (res) {
      setData(res.data);
      setTotalImage(res.pagination.total_items);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.pageContainer}>
        <div>
          <Flex wrap gap="small">
            {data.map((item) => (
              <Card key={item.id} img={item} />
            ))}
          </Flex>
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            current={current}
            onChange={onChange}
            total={totalImage}
            showSizeChanger={false}
            pageSize={40} // Số items mỗi trang
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListCard;
