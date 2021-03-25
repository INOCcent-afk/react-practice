import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCountContext } from "./context/CartCountContext";

const Nav = () => {
  const [cartCount, setCartCount] = useContext(CartCountContext);
  return (
    <header>
      <Link to="/">DAVE's KITCHEN</Link>
      <Link to="/cart">CART: {cartCount.length}</Link>
    </header>
  );
};

export default Nav;
