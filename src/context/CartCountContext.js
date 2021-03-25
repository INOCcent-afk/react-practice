import React, { useState, createContext } from "react";

export const CartCountContext = createContext();

export const CartCountProvider = (props) => {
  const [cartCount, setCartCount] = useState([]);
  return (
    <CartCountContext.Provider value={[cartCount, setCartCount]}>
      {props.children}
    </CartCountContext.Provider>
  );
};
