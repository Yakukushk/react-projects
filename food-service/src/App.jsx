import Header from "./components/Header";
import Meals from "./components/Meals";
import CartModal from "./components/modal/Cart";
import { CartContextProvider } from "./store/cart.context";
import { UserContextCart, UserProgressContextProvider } from "./store/userCart.context";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        {/* <CartModal/> */}
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
