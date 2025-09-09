import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCardData } from "./components/store/cart-actions";

let isInitial = true;

function App() {
  const cartVisibility = useSelector((state) => state.ui.cartVisible);
  const cartItems = useSelector((state) => state.cartStore);
  const notification = useSelector((state) => state.ui.notification);

  console.log(notification);
  const dispatch = useDispatch();

  //#region 
  // useEffect(() => {
  //   async function sendDataCart() {
  //     dispatch(sendNotification({
  //       status: "pending",
  //       message: "Sending...",
  //     }));
  //     const response = await fetch(
  //       "https://react-redux-88396-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
  //       { method: "PUT", body: JSON.stringify({ cartItems }) }
  //     );

  //     if (!response.ok) {
  //       dispatch(sendNotification({
  //         status: response.status,
  //         message: "Sending cart data not successfully!",
  //       }));
  //     }

  //     dispatch(sendNotification({
  //       status: response.status,
  //       message: "Sending cart data successfully!",
  //     }));
  //   }

  //   sendDataCart().catch((error) => {
  //     dispatch(sendNotification({
  //       status: 500,
  //       message: "Sending cart data failed!",
  //     }));
  //   });
  // }, [cartItems, dispatch]);

  // useEffect(() => {
  //   setTimeout(() => dispatch(sendNotification(null)), 2000);
  // }, [dispatch])
  //#endregion

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCardData(cartItems));
  }, [cartItems, dispatch]);


  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {cartVisibility && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
