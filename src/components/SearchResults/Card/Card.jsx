import React from "react";
import { Image, Button } from "antd";
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
              <div className={styles.previewContainer}>
                <img
                  style={{
                    borderRadius: "8px",
                  }}
                  src={`data:image/webp;base64,${props.img.image}`}
                  alt={
                    props.img.folder_key &&
                    props.img.video_key &&
                    props.img.frame_key
                      ? `${props.img.folder_key}_${props.img.video_key}_${props.img.frame_key}`
                      : ""
                  }
                />
                <Button
                  className={styles.playBtn}
                  icon={<PlayCircleOutlined />}
                  href="https://www.youtube.com/watch?v=-nJ0WHEetsQ&t=60s"
                  target="_blank"
                >
                  Play
                </Button>
              </div>
            ),
            toolbarRender: () => null,
          }}
          style={{
            padding: "0.5rem",
          }}
          width={200}
          src={`data:image/webp;base64,${props.img.image}`}
        />
        <div className={styles.imageTitle}>
          {props.img.folder_key && props.img.video_key && props.img.frame_key
            ? `${props.img.folder_key}_${props.img.video_key}_${props.img.frame_key}`
            : ""}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
