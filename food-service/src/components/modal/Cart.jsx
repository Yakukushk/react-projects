import { use } from "react";
import { Modal } from "./Modal";
import { CartContext } from "../../store/cart.context";
import { UserContextCart } from "../../store/userCart.context";
import { formatCurrency } from "../../util/formatting";
import Button from "../UI/Button";
import CartItem from "../CartItem";

export default function CartModal({ modal, checkoutModal, ...props }) {
  const { cartItems, onAddItem, onRemoveItem, totalCartItems } =
    use(CartContext);
  const userCtx = use(UserContextCart);

  function handleCloseCart() {
    userCtx.hideCart();
    modal.current.close();
  }
  function handleCheckout() {
    modal.current.close();
    userCtx.showCheckout();
    // Small delay to ensure cart modal closes before checkout opens
    setTimeout(() => {
      checkoutModal.current.open();
    }, 100);
  }

  if (userCtx.progress !== "cart") {
    return null;
  }

  return (
    <Modal {...props} ref={modal} className="cart" title="Your Cart">
      <ul>
        {cartItems.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onAdd={() => onAddItem(item.id)}
            onRemove={() => onRemoveItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{formatCurrency.format(totalCartItems)}</p>
      <Button textOnly onClick={handleCloseCart}>
        Close
      </Button>
      {cartItems.items.length > 0 ? (
        <Button onClick={handleCheckout}>Go to Checkout</Button>
      ) : null}
    </Modal>
  );
}
