import React from "react";
import { Image } from "antd";

const Card = (props) => {
  console.log(props.img);
  return (
    <div>
      <Image width={200} src={props.img.src} />
      <div>{props.img.title}</div>
    </div>
  );
};

export default Card;
