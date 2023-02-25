import "../styles/Card.css";
import Card, { Food } from "./Card";

interface FoodListProps {
  foodList: Food[];
}

const CardList = (props: FoodListProps) => {
  return (
    <div className="CardList">
      {props.foodList.map((item) => {
        return <Card key={item.id} food={item} />;
      })}
    </div>
  );
};

export default CardList;
