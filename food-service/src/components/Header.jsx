import { useRef } from "react";
import logo from "../assets/logo.jpg";
import { use } from "react";
import { CartContext } from "../store/cart.context";
import Button from "./UI/Button";
import CartModal from "./modal/Cart";
import Checkout from "./modal/Checkout";
import { UserContextCart } from "../store/userCart.context";

export default function Header() {
  const cartCtx = use(CartContext);
  const userCtx = use(UserContextCart);
  const cartModal = useRef();
  const checkoutModal = useRef();

  const totalCartItems = cartCtx.cartItems.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleShowCart() {
    userCtx.showCart();
    cartModal.current.open();
  }
  return (
    <>
      <CartModal modal={cartModal} checkoutModal={checkoutModal} />
      <Checkout modal={checkoutModal} />
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="react-food" />
          <h1>ReactFood</h1>
        </div>
        <p>
          <Button textOnly={true} onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </p>
      </header>
    </>
  );
}
