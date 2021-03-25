import React from "react";
import FilterCard from "../FilterCard";
import FoodList from "../FoodList";
const Home = () => {
  return (
    <div className="body-content">
      <FilterCard />
      <FoodList />
    </div>
  );
};

export default Home;
