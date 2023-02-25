import React from "react";
import "./styles/App.css";
import CardList from "./components/CardList";
import { Food } from "./components/Card";

const App = () => {
  const foodDataList: Food[] = [
    {
      id: 0,
      type: "อาหารคาว",
      name: "ข้าวผัด",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg",
    },
    {
      id: 1,
      type: "อาหารหวาน",
      name: "บิงซู",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://www.bingsuexpert.com/wp-content/uploads/2018/05/3.jpg",
    },
    {
      id: 2,
      type: "อาหารหวาน",
      name: "ไอศกรีม",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/640px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    },
  ];
  return (
    <div className="App">
      <h1>โหวตอาหาร</h1>
      <CardList foodList={foodDataList} />
    </div>
  );
};

export default App;
