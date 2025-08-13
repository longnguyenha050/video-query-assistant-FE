import React from "react";
import Card from "./Card";
import { Flex } from "antd";

const ListCard = () => {
  const items = [
    {
      id: 1,
      title: "Card 1",
      src: "https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png",
    },
    {
      id: 2,
      title: "Card 2",
      src: "https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png",
    },
    {
      id: 3,
      title: "Card 3",
      src: "https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png",
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
