import { use } from "react";
import { CartContext } from "../store/cart.context";
import MealItem from "./MealItem";
import { useFormStatus } from "react-dom";

export default function Meals() {
  const { meals, onAddItem } = use(CartContext);
  console.log(meals);
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem
          onAddCart={() => onAddItem(meal.id)}
          key={meal.id}
          meal={meal}
        />
      ))}
    </ul>
  );
}
