import React from "react";
import { Image } from "antd";
import styles from "./Card.module.css";
import { PlayCircleOutlined } from "@ant-design/icons";

const Card = (props) => {
  console.log(props.img);
  return (
    <React.Fragment>
      <div className={styles.imageContainer}>
        <Image
          preview={{
            destroyOnHidden: true,
            imageRender: () => (
              <div>
                <img
                  style={{
                    borderRadius: "8px",
                  }}
                  src={props.img.src}
                  alt={props.img.title || ""}
                />
                <PlayCircleOutlined
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#e6f2ff",
                    padding: "12px 0",
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                    fontSize: "48px",
                  }}
                />
              </div>
            ),
            toolbarRender: () => null,
          }}
          style={{
            padding: "0.5rem",
          }}
          width={200}
          src={props.img.src}
        />
        <div className={styles.imageTitle}>{props.img.title}</div>
      </div>
    </React.Fragment>
  );
};

export default Card;
