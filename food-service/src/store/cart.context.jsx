import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  meals: [],
  order: null,
  postOrder: () => {},
  onAddItem: (id) => {},
  onRemoveItem: (id) => {},
  onUpdateCartItemQuantity: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCardItems] = useState({
    items: [],
  });

  const [meals, setMeals] = useState([]);
  const [order, setOrder] = useState({
    email: "",
    name: "",
    street: "",
    city: "",
  });

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();
      if (!response.ok) {
        return;
      }
      setMeals(resData);
    }
    fetchMeals();
  }, []);

  async function postOrder(orderData) {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) {
      return;
    }

    const savedOrder = response.json();
    setOrder(savedOrder);
  }

  function onAddItem(id) {
    setCardItems(prev => {
        console.log(prev);
        const updatedItems = [...prev.items];
        const existingCartItemIndex  = updatedItems.findIndex(
            (cart) => cart.id === id
        );

        const exitingCart = updatedItems[existingCartItemIndex];

        if(exitingCart) {
            const updatedItem = {
                ...exitingCart,
                quantity: exitingCart.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const meal = meals.find(item => item.id === id);
            updatedItems.push({
                id: id,
                name: meal.name,
                price: meal.price,
                description: meal.description,
                image: meal.image,
                quantity: 1
            });
        }

        return {
            items: updatedItems
        }
    })
  }
  function onRemoveItem(id) {
    setCardItems(prev => {
        const updatedItems = [...prev.items];
        const existingCartItemIndex  = updatedItems.findIndex(
            (cart) => cart.id === id
        );

        const exitingCart = updatedItems[existingCartItemIndex];

        if(exitingCart) {
            if (exitingCart.quantity > 1) {
                const updatedItem = {
                    ...exitingCart,
                    quantity: exitingCart.quantity - 1
                }
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems.splice(existingCartItemIndex, 1);
            }
        }

        return {
            items: updatedItems
        }
    })
  }

  function onUpdateCartItemQuantity() {}

  const contextValue = {
    order: order,
    meals: meals,
    cartItems: cartItems,
    postOrder,
    onAddItem,
    onRemoveItem,
    onUpdateCartItemQuantity,
  };

  return <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
}
