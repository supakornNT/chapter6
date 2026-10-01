import FoodItem from "./foodItem";

const FoodList = ({ food, deleteItem, isAdmin }) => {
  return (
    <div className="food-list">
      <ul>
        {food.map((item, index) => (
          <FoodItem
            key={item.name}
            item={item}
            onDelete={() => deleteItem(index)}
            isAdmin={isAdmin}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
