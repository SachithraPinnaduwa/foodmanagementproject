import "../componentsCss/Header-Inside.css";
import { useNavigate } from "react-router-dom";
import React from "react";

const HeaderInside = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <nav className="menu" id="nav">
        <span className="nav-item active">
          <span className="icon">
            <i data-feather="home"></i>
          </span>
          <a className="text">Home</a>
        </span>
        <span className="nav-item" onClick={() => navigate("/food-chatbot")}>
          <span className="icon">
            <i data-feather="search"></i>
          </span>
          <a className="text">ChatBot</a>
        </span>
        <span
          className="nav-item"
          onClick={() => navigate("/food-distribution")}
        >
          <span className="icon">
            <span className="subicon">13</span>
            <i data-feather="bell"></i>
          </span>
          <a className="text">Food Distribution</a>
        </span>
        <span className="nav-item">
          <span className="icon">
            <i data-feather="star"></i>
          </span>
          <a href="#">Food Preparation</a>
        </span>
        <span className="nav-item">
          <span className="icon">
            <span className="subicon">1</span>
            <i data-feather="bell"></i>
          </span>
          <a className="text">Your Profile</a>
        </span>
      </nav>
    </div>
  );
};

export default HeaderInside;
