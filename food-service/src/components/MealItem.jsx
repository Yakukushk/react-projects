import { formatCurrency } from "../util/formatting";
import Button from "./UI/Button";

export default function MealItem({ meal, onAddCart }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-price">
            ${formatCurrency.format(meal.price)}
          </p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={onAddCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
