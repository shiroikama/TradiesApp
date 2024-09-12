import React, { useState } from 'react';
import './HomePage.css';
import { Navigate } from 'react-router-dom'; // Для редиректа после логина

function HomePage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Для проверки, вошел ли админ

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '07082510') {
      setIsAdmin(true); // проверка что это админ
    } else {
      alert('Invalid credentials');
    }
  };

  // Если админ авторизован, редиректим на панель администратора
  if (isAdmin) {
    return <Navigate to="/admin" />;
  }

  const renderLoginForm = () => (
    <div className={`modal ${showLoginForm ? 'modal-visible' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={() => setShowLoginForm(false)}>&times;</span>
        <h2>Log In</h2>
        <input type="text" placeholder="Username" id="username" className="input-field" />
        <input type="password" placeholder="Password" id="password" className="input-field" />
        <button className="login-button" onClick={() => handleLogin(
          document.getElementById('username').value, 
          document.getElementById('password').value
        )}>
          Log In
        </button>
      </div>
    </div>
  );

  return (
    <div className="homepage-container">
      <div className="image-container">
        <img src="/assets/TradiesHomePage.jpeg" alt="Tradies at work" />
      </div>
      <div className="text-container">
        <div className="content-wrapper">
          <div className="buttons">
            <button className="button">Sign Up</button>
            <button className="button" onClick={() => setShowLoginForm(true)}>Log In</button>
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
      {renderLoginForm()} {/* плавное появление формы входа */}
    </div>
  );
}

export default HomePage;