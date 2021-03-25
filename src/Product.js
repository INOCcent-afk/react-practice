import React, { useState, useContext } from "react";
import { CartCountContext } from "./context/CartCountContext";
import { ProductContext } from "./context/ProductContext";

const Product = ({ title, desc, price, id }) => {
  const [cartCount, setCartCount] = useContext(CartCountContext);
  const [products, setProducts] = useContext(ProductContext);
  const [button, setButton] = useState("ADD PRODUCT");

  const addProduct = (e) => {
    const itemID = e.target.id;

    products
      .filter((product) => product.id === itemID)
      .map((filteredProduct) => {
        setCartCount((prev) => [
          ...prev,
          {
            title: filteredProduct.title,
            desc: filteredProduct.desc,
            price: filteredProduct.price,
            id: filteredProduct.id,
          },
        ]);
      });
  };

  const removeProduct = (e) => {
    const itemID = e.target.id;
  };

  return (
    <div className="product">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>${price}</p>
      <div className="buttons">
        <button id={id} onClick={button}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default Product;
