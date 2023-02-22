import React from "react";
import "../styles/ButtonList.css";

const ButtonList = ({ childCallBack, scoreText }) => {
  const onVoteUp = () => {
    childCallBack(1);
  };
  const onVoteDown = () => {
    childCallBack(-1);
  };
  return (
    <div className="ButtonList">
      <button className="buttonVote" onClick={onVoteUp}>
        Click to Vote!
      </button>
      <div className="scoreTextDiv">{scoreText}</div>
      <button className="buttonVote" onClick={onVoteDown}>
        Click to Unvote!
      </button>
    </div>
  );
};

export default ButtonList;
