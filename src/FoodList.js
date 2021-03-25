import React, { useState, useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import Product from "./Product";

const FoodList = () => {
  const [products, setProdcuts] = useContext(ProductContext);
  return (
    <div className="foodlist">
      <h1>FOOD LISTS</h1>
      {products.map((product) => (
        <Product
          title={product.title}
          desc={product.desc}
          price={product.price}
          key={product.id}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default FoodList;
