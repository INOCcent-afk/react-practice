import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      title: "Ice Cream",
      desc:
        "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: 10,
      type: "Dessert",
      id: 123,
    },
    {
      title: "Cake",
      desc:
        "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: 130,
      type: "Dessert",
      id: 1234,
    },
    {
      title: "Chocolate",
      desc:
        "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: 40,
      type: "Dessert",
      id: 1235,
    },
    {
      title: "Chicken Wings",
      desc:
        "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: 25,
      type: "Appetizers",
      id: 1236,
    },
    {
      title: "Caesar Salad",
      desc:
        "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: 90,
      type: "Appetizers",
      id: 1237,
    },
    {
      title: "Pita Chips",
      desc:
        "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: 90,
      type: "Appetizers",
      id: 1238,
    },
  ]);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
