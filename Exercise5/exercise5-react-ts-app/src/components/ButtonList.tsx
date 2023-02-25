import "../styles/ButtonList.css";

const ButtonList = (props: {
  childCallBack: (gain: number) => void;
  scoreText: string;
}) => {
  const onVoteUp = () => {
    props.childCallBack(1);
  };
  const onVoteDown = () => {
    props.childCallBack(-1);
  };
  return (
    <div className="ButtonList">
      <button className="buttonVote" onClick={onVoteUp}>
        Click to Vote!
      </button>
      <div className="scoreTextDiv">{props.scoreText}</div>
      <button className="buttonVote" onClick={onVoteDown}>
        Click to Unvote!
      </button>
    </div>
  );
};

export default ButtonList;
