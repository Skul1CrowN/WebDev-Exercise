import { useEffect, useState } from "react";
import "../styles/Card.css";
import ButtonList from "./ButtonList";

export interface Food {
  id: number;
  type: string;
  name: string;
  detail: string;
  img: string;
}

interface FoodProps {
  food: Food;
}

const Card = (props: FoodProps) => {
  const [score, setScore] = useState(0);
  const [scoreText, setScoreText] = useState("MIN");
  const updateCardScores = (gain: number) => {
    if (score + gain > 10) {
      alert("Cannot vote more!");
    } else if (score + gain < 0) {
      alert("Cannot unvote!");
    } else {
      setScore(score + gain);
    }
  };
  useEffect(() => {
    if (score === 10) {
      setScoreText("MAX");
    } else if (score === 0) {
      setScoreText("MIN");
    } else {
      setScoreText(`${score}`);
    }
  }, [score]);
  return (
    <div className="Card">
      <div className="food-data">
        <div>
          <h2>{props.food.type}</h2>
          <h3>{props.food.name}</h3>
          <p>{props.food.detail}</p>
        </div>
        <div>
          <img src={props.food.img} alt={props.food.name} />
        </div>
      </div>
      <ButtonList childCallBack={updateCardScores} scoreText={scoreText} />
    </div>
  );
};

export default Card;
