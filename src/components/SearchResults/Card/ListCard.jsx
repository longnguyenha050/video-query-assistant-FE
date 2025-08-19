import React from "react";
import Card from "./Card";
import { Flex } from "antd";
import img1 from '../../../assets/0112.webp';
import img2 from '../../../assets/0175.webp';
import img3 from '../../../assets/0232.webp';

const ListCard = () => {
  const items = [
    {
      id: 1,
      title: "Card 1",
      src: img1,
    },
    {
      id: 2,
      title: "Card 2",
      src: img2,
    },
    {
      id: 3,
      title: "Card 3",
      src: img3,
    },
  ];
  return (
    <React.Fragment>
      <div>
        <Flex wrap gap="small">
          {items.map((item) => (
            <Card key={item.id} img={item} />
          ))}
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default ListCard;
