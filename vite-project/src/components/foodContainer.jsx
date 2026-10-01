import { useState } from "react";
import FoodList from "./foodList";
import FoodForm from "./foodForm";

const foods = [
  { name: "cake", price: 35, isBestSeller: true },

  { name: "bread", price: 25, isBestSeller: false },

  { name: "milk", price: 15, isBestSeller: true },

  { name: "donut", price: 45, isBestSeller: false },

  { name: "cookie", price: 55, isBestSeller: true },
];

const FoodContainer = () => {
  const [food, setFood] = useState(foods);
  const [isAdmin, setIsAdmin] = useState(false);

  const deleteItem = (indexToDelete) => {
    setFood((currentFood) =>
      currentFood.filter((item, index) => index !== indexToDelete),
    );
  };

  const addItem = (item) => {
    setFood((currentFood) => [...currentFood, item]);
  };

  return (
    <div className="menu-box">
        <span>{isAdmin ? "User mode":"Admin mode"}</span>
      <button onClick={() => setIsAdmin((current) => !current)}>
        {isAdmin ? "User" : "Admin"}
      </button>
      <h3>Our Menu</h3>

      <FoodList food={food} deleteItem={deleteItem} isAdmin={isAdmin}/>
       {isAdmin ? <FoodForm onAdd={addItem} /> : null}
      
    </div>
  );
};

export default FoodContainer;
