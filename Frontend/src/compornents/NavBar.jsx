import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../componentsCss/Navbar.css"; // Make sure the path matches where your CSS file is located
import logo from '../assets/foodlogo.png';
import Home from '../compornents/Home'; // Import your component
import FoodPreparation from '../compornents/Food-Preparation'; // Import your component
import FoodDistribution from '../compornents/Food-Distribution'; // Import your component
import FoodChatbot from '../compornents/Food-Chatbot'; // Import your component
import Foodpreppage from "./foodpreparation/Foodpreppage";
import Fooddispage from "./fooddistribution/Fooddispage";
import Contact from "./Contact-page";
import NotFound from "./NotFound";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar" style={{  backgroundColor: 'linear-gradient(to right, #ff1e56, #ffac41)'}}>
        
        
        <div className="nav-logo">
          <div >
          <Link to="/">Home</Link>
          <Link to="/food-preparation">Food Preparation</Link>
        </div>
          <img src={logo} alt="Logo" />
          <div >
          <Link to="/food-distribution">Food Distribution</Link>
          <Link to="/food-chatbot">Food Chatbot</Link>
        </div>
        </div>
        
       
      </nav>
      
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

export default Navbar;

