import React from "react";
import '../componentsCss/Home.css';
import Footer from "./Footer";
import About from "./About";
import CommunityAction from "./CommunityAction";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
    <header className="header">
      <h1>Food Preservation Movement</h1>
      <p
      style={{fontSize:"1.5rem",padding:"1rem",textAlign:"center"}}
      >Join us in the fight against hungerThe Food Preservation Movement encompasses a holistic approach to address various challenges in the food industry, with a primary focus on sustainability and reducing food waste. This food management system , centered on Smart Meal Planning and Inventory Management, 
            Food Distribution and Donation, Food Waste Recycling, Educational Insights, and Community Support</p>
      <button className="learn-more"><Link to="/food-chatbot" style={{textDecoration:"none",color:"black"}}>Use Our chatbot</Link></button>
      
    </header>
   <About/>
    
    <CommunityAction/>
    <Footer/>
  </div>
  
  )
};

export default Home;
