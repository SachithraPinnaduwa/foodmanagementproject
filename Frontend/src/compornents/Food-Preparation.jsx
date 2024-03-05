import React from 'react';
import { Link } from 'react-router-dom';
import '../componentsCss/Food-Preparation.css';
import foodPreparationData from '../assets/foodPreparationData.json'; 
import Foodprepcard from './foodpreparation/Foodprepcard';

const FoodPreparation = () => {
  return (
    <div className="food-preparation-container">
      {foodPreparationData.map((item) => ( <Foodprepcard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FoodPreparation;
