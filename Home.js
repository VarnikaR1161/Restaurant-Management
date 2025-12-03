import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import bgImage from './bg.jpg'; // Ensure this image is in the same folder
import Footer from './Footer'; // Adjust the path if needed

const Home = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/menu");
  };

  return (
    <div>
      <div
        className="home-container"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff'
        }}
      >
        <div className="content">
          <h1 className="title">
            Welcome to <span>Taco Street</span>
          </h1>
          <p className="subtitle">Manage menu items and orders easily.</p>
          <button className="menu-button" onClick={goToMenu}>
            Go to Menu
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
