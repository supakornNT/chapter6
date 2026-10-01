import { useState } from "react";

const FoodForm = ({ onAdd }) => {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    isBestSeller: "true",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newFood = {
      name: inputs.name,
      price: Number(inputs.price),
      isBestSeller: inputs.isBestSeller === "true",
    };

    onAdd(newFood);

    setInputs({ name: "", price: "", isBestSeller: "true" });
  }

  return (
    <form className="food-form" onSubmit={handleSubmit}>
      <label>
        name :
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>

      <label>
        price :
        <input
          type="number"
          name="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>

      <label>
        Best Seller :
        <select
          name="isBestSeller"
          value={inputs.isBestSeller}
          onChange={handleChange}
        >
          <option value="true">BestSeller</option>
          <option value="false">Normal</option>
        </select>
      </label>

      <button type="submit">Add menu</button>
    </form>
  );
};

export default FoodForm;
