import { mapperCart } from "./cart-slice";
import { sendNotification } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-redux-88396-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Something wrong");
      }
      const data = await response.json();
      return data;
    };
    try {
        const cartData = await fetchData();
        dispatch(
          mapperCart({
            items: cartData.items || [],
            itemQuantity: cartData.itemQuantity || 0,
          })
        );
      } catch (error) {
        dispatch(
          sendNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching cart data failed!',
          })
        );
      }
  };
};
export const sendCardData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      sendNotification({
        status: "pending",
        message: "Sending...",
      })
    );
    
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-88396-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cartData) }
      );
      if (!response.ok) {
        dispatch(
          sendNotification({
            status: response.status,
            message: "Sending cart data not successfully!",
          })
        );
        return;
      }

      dispatch(
        sendNotification({
          status: response.status,
          message: "Sending cart data successfully!",
        })
      );
    };
    
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        sendNotification({
          status: 500,
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
