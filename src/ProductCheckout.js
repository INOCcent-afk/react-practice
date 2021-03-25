import React from "react";

const ProductCheckout = ({ title, price, desc }) => {
  return (
    <div className="productC">
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{desc}</p>
      <button>REMOVE ITEM</button>
    </div>
  );
};

export default ProductCheckout;
