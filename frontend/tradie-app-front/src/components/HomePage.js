import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="image-container">
        <img src="/assets/TradiesHomePage.jpeg" alt="Tradies at work" />
      </div>
      <div className="text-container">
        <div className="content-wrapper">
          <div className="buttons">
            <button className="button">Sign In</button>
            <button className="button">Log In</button>
          </div>
          <div className="description">
            <h1>Welcome to SigmaTradies</h1>
            <p>
              This is a platform where you can find and hire skilled tradies for various services. 
              Join us and discover the best professionals in your area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;