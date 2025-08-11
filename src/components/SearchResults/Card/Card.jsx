import React from 'react';
import { Image } from "antd";

const Card = (props) => {
    return (
        <div>
            <div>{props.img.title}</div>
            <Image src={props.img.src}/>
        </div>
    );
}

export default Card;
