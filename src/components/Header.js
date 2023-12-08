
import React, { useState, useEffect } from 'react';
import logo from "../components/images/l2.jpg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
    setIsSearchActive(false);
    setIsCartActive(false);
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
    setIsActive(false);
    setIsCartActive(false);
  };

  const handleCartClick = () => {
    setIsCartActive(!isCartActive);
    setIsActive(false);
    setIsSearchActive(false);
  };

  const handleScroll = () => {
    setIsActive(false);
    setIsSearchActive(false);
    setIsCartActive(false);
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* header section starts  */}
      <header className="header">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Categories</a>
          <a href="#products">Receipe</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>

        <div className="icons">
          <div className="fas fa-search" id="search-btn" onClick={handleSearchClick}></div>
          <div className="fas fa-heart" id="cart-btn" onClick={handleCartClick}></div>
          <div className="fas fa-bars" id="menu-btn" onClick={handleMenuClick}></div>
        </div>

        <div className={`search-form ${isSearchActive ? 'active' : ''}`}>
          <input type="search" name="" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>

        <div className={`cart-items-container ${isCartActive ? 'active' : ''}`}>
          {/* Your cart items JSX */}
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/coffee3.jpeg" alt="" />
            <div className="content">
              <h3>favorite item 01</h3>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/coffee2.jpeg" alt="" />
            <div className="content">
              <h3>favorite item 02</h3>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/coffee3.jpeg" alt="" />
            <div className="content">
              <h3>favorite item 03</h3>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/coffee4.jpeg" alt="" />
            <div className="content">
              <h3>favorite item 04</h3>
            </div>
          </div>
          <a href="#" className="btn">Clear</a>
        </div>
      </header>
      {/* header section ends  */}
    </>
  );
}

export default Header;
