import React, { useEffect, useState } from "react";
import "../styles/Card.css";
import ButtonList from "./ButtonList";

const Card = ({ food }) => {
  const [score, setScore] = useState(0);
  const [scoreText, setScoreText] = useState("MIN");
  const updateCardScores = (gain) => {
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
          <h2>{food.type}</h2>
          <h3>{food.name}</h3>
          <p>{food.detail}</p>
        </div>
        <div>
          <img src={food.img} alt={food.name} />
        </div>
      </div>
      <ButtonList childCallBack={updateCardScores} scoreText={scoreText} />
    </div>
  );
};

export default Card;
