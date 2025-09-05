import { createContext, useState } from "react";

export const UserContextCart = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({children}) {
  const [progress, setProgress] = useState();

  function showCheckout() {
    setProgress("checkout");
  }

  function hideCheckout() {
    setProgress("");
  }

  function showCart() {
    setProgress("cart");
  }

  function hideCart() {
    setProgress("");
  }
  const contextValues = {
    progress: progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserContextCart.Provider value={contextValues}>
        {children}
    </UserContextCart.Provider>
  );
}
