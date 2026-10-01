const FoodItem = ({ item, onDelete, isAdmin }) => (
  <li>
    {item.name} - {item.price} baht
    {item.isBestSeller && <span className="best-seller">🏅</span>}
    {isAdmin && <button onClick={onDelete}>Del</button>}
  </li>
);

export default FoodItem;