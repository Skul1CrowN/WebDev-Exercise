import React from "react";
import Card from "./Card";

const CardList = ({ foodList }) => {
  return foodList.map((item) => {
    return <Card key={item.id} food={item} />;
  });
};

export default CardList;
