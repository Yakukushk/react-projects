import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { onAddCart, onRemoveCart } from "../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item;

  // Add safety checks for price values
  const safeTotalPrice = totalPrice || 0;
  const safePrice = price || 0;
  const dispatch = useDispatch();

  const addItemToCartHandler = (item) => {
    dispatch(onAddCart(item));
  };

  const removeItemToCartHandler = (item) => {
    dispatch(onRemoveCart(item));
  };

  return (
    <li key={id} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${safeTotalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${safePrice.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeItemToCartHandler({ ...props.item })}>
            -
          </button>
          <button onClick={() => addItemToCartHandler({ ...props.item })}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
