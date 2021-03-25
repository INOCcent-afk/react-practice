import React, { useContext } from "react";
import ProductCheckout from "../ProductCheckout";
import { CartCountContext } from "../context/CartCountContext";

const Cart = () => {
  const [cartCount, setCartCount] = useContext(CartCountContext);

  return (
    <div>
      <h1>CART</h1>
      <div className="body-content">
        <div className="product-prices">
          <h1>PRICES</h1>
        </div>
        <div className="product-checkout">
          {cartCount.map((cartItem) => (
            <ProductCheckout
              title={cartItem.title}
              price={cartItem.price}
              desc={cartItem.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
