import { use } from "react";
import { Modal } from "./Modal";
import { CartContext } from "../../store/cart.context";
import { UserContextCart } from "../../store/userCart.context";
import { formatCurrency } from "../../util/formatting";
import Button from "../UI/Button";
import CartItem from "../CartItem";

export default function CartModal({ modal, ...props }) {
  const cartCtx = use(CartContext);
  const userCtx = use(UserContextCart);

  const totalCartItems = cartCtx.cartItems.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleCloseCart() {
    userCtx.hideCart();
    modal.current.close();
  }
  function handleCheckout() {
    userCtx.showCheckout();
  }
  return (
    <Modal {...props} ref={modal} className="cart" title="Your Cart">
      <ul>
        {cartCtx.cartItems.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onAdd={() => cartCtx.onAddItem(item.id)}
            onRemove={() => cartCtx.onRemoveItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{formatCurrency.format(totalCartItems)}</p>
      <Button textOnly onClick={handleCloseCart}>
        Close
      </Button>
      <Button onClick={handleCheckout}>Go to Checkout</Button>
    </Modal>
  );
}
