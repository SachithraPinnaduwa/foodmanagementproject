import HeaderInside from "./Header-Inside";
import React from "react";
import '../componentsCss/Food-Distribution.css';
import foodDistributionData from '../assets/foodDistributionData.json'; // Adjust the import path as necessary
import Foodprepcard from './foodpreparation/Foodprepcard';
import Fooddiscard from "./fooddistribution/Fooddiscard";

const FoodDistribution = () => {
  return (
    
      <div className="food-preparation-container">
      {foodDistributionData.map((item) => ( <Fooddiscard key={item.id} {...item} />
      ))}
    </div>
   
  );
};

export default FoodDistribution;
