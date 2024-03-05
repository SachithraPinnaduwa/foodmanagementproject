import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../compornents/Home";
import FoodPreparation from "../compornents/Food-Preparation";
import FoodChatbot from "../compornents/Food-Chatbot";
import FoodDistribution from "../compornents/Food-Distribution";
import Foodpreppage from "../compornents/foodpreparation/Foodpreppage";
import Fooddispage from "../compornents/fooddistribution/Fooddispage";
import Contact from "../compornents/Contact-page";
import NotFound from "../compornents/NotFound";

const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/food-preparation" element={<FoodPreparation />} />
        <Route path="/food-distribution" element={<FoodDistribution />} />
        <Route path="/food-chatbot" element={<FoodChatbot />} />
        <Route path="/food-preparation/:id" element={<Foodpreppage />} />
        <Route path="/food-distribution/:id" element={<Fooddispage />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoute;
