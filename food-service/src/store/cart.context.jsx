import { createContext, useEffect, useState } from "react";
import useHttp from "../hook/useHttp";
import Error from "../components/Error";

export const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const CartContext = createContext({
  cartItems: [],
  meals: [],
  order: null,
  postOrder: () => {},
  onAddItem: (id) => {},
  onRemoveItem: (id) => {},
  onUpdateCartItemQuantity: () => {},
  totalCartItems: [],
  orderFetching: false
});

export function CartContextProvider({ children }) {
  const [cartItems, setCardItems] = useState({
    items: [],
  });

  const { data: meals, error: mealError, isLoading: mealFetching } = useHttp("http://localhost:3000/meals", { method: 'GET' });
  const { data: order, error: orderError, isLoading: orderFetching ,sendRequest} = useHttp("http://localhost:3000/orders", requestConfig);

  async function postOrder(orderData) {
    try {
      // const response = await fetch("http://localhost:3000/orders", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(orderData),
      // });

      if (orderError) {
        console.error("Order submission failed:", orderError);
        return { success: false, error: orderError };
      }

      sendRequest(JSON.stringify(orderData));
    } catch (error) {
      console.error("Network error:", error);
      return { success: false, error: { message: "Network error" } };
    }
  }

  function onAddItem(id) {
    setCardItems((prev) => {
      console.log(prev);
      const updatedItems = [...prev.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cart) => cart.id === id
      );

      const exitingCart = updatedItems[existingCartItemIndex];

      if (exitingCart) {
        const updatedItem = {
          ...exitingCart,
          quantity: exitingCart.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const meal = meals.find((item) => item.id === id);
        updatedItems.push({
          id: id,
          name: meal.name,
          price: meal.price,
          description: meal.description,
          image: meal.image,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }
  function onRemoveItem(id) {
    setCardItems((prev) => {
      const updatedItems = [...prev.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cart) => cart.id === id
      );

      const exitingCart = updatedItems[existingCartItemIndex];

      if (exitingCart) {
        if (exitingCart.quantity > 1) {
          const updatedItem = {
            ...exitingCart,
            quantity: exitingCart.quantity - 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems.splice(existingCartItemIndex, 1);
        }
      }

      return {
        items: updatedItems,
      };
    });
  }

  function onUpdateCartItemQuantity() {}

  const totalCartItems = cartItems.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const contextValue = {
    order: order,
    meals: meals || [],
    cartItems: cartItems,
    postOrder,
    onAddItem,
    onRemoveItem,
    onUpdateCartItemQuantity,
    totalCartItems,
    orderFetching
  };

  
  if(mealError) {
    return <Error title="Failed to fetch meals" message={error}>
    </Error>
  }
  if(mealFetching) {
    return <p>fetching...</p>
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
