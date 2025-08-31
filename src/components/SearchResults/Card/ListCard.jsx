import React, { useEffect, useState } from "react";
import SingleTextSearchCard from "./SingleTextSearchCard";
import QASearchCard from "./QASearchCard";
import { Flex } from "antd";
import { Pagination, Spin } from "antd";
import {
  singleTextSearch,
  QASearch,
  OcrAndOdSearch,
} from "../../../services/userService";
import styles from "./ListCard.module.css";

const PAGE_SIZE = 40;

const ListCard = ({ searchType, require, setResult }) => {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [totalImage, setTotalImage] = useState();

  useEffect(() => {
    getData();
  }, [require]);

  useEffect(() => {
    setData([]);
  }, [searchType]);

  useEffect(() => {
    getRandomImages(current);
  }, [current, fullData]);

  const setPageData = (page) => {
    setCurrent(page);
  };

  const getData = async () => {
    setLoading(true); // Bắt đầu loading
    let data;
    if (require && Object.keys(require).length > 0) {
      switch (searchType) {
        case "Single Text Search":
          data = await singleTextSearch({
            query: require.query,
            topk: require.topk,
            clip: require.clip,
            clipv2: require.clipv2,
          });
          break;

        case "Q&A Search":
          data = await QASearch({
            query: require.query,
            topk: require.topk,
            clip: require.clip,
            clipv2: require.clipv2,
          });
          break;

        case "OCR and OD Search":
          data = await OcrAndOdSearch({
            query: require.query,
            topk: require.topk,
            ocr: require.ocr,
            od: require.objectDetection,
            bbox: require.bbox,
          });
          break;
      }
    }

    if (data) {
      console.log("data: ", data);
      setResult(data.items);
      setTotalImage(data.total_items);
      setFullData(data.items);
    }
    setLoading(false); // Kết thúc loading
  };

  const getRandomImages = (page) => {
    const pageData = fullData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    setData(pageData);
  };

  return (
    <React.Fragment>
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          {loading ? (
            <Flex
              justify="center"
              align="center"
              style={{ width: "100%", minHeight: "200px" }}
            >
              <Spin size="large" tip="Loading..." />
            </Flex>
          ) : (
            <Flex wrap gap="large">
              {searchType === "Single Text Search" ||
              searchType === "OCR and OD Search"
                ? data.map((item) => (
                    <SingleTextSearchCard key={item.id} img={item} />
                  ))
                : searchType === "Q&A Search"
                ? data.map((item) => <QASearchCard key={item.id} img={item} />)
                : null}
            </Flex>
          )}
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            current={current}
            onChange={setPageData}
            total={totalImage}
            showSizeChanger={false}
            pageSize={PAGE_SIZE}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListCard;
