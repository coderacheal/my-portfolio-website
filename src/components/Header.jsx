import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(1);
  const [slideIn, setSlideIn] = useState(false);
  const [hebrewName, setHebrewName] = useState("רייצ'ל");

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleHover = (index) => {
    setSlideIn(true);
    setCounter(index + 1);
  };

  const handleMouseEnter = () => {
    setHebrewName('Racheal');
  };

  const handleMouseLeave = () => {
    setHebrewName("רייצ'ל");
  };

  return (
    <div>
      <header className="header">
        {/* eslint-disable react/no-unescaped-entities */}
        <p
          className="rest"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hebrewName}
        </p>
        <nav className="nav-item">
          {/* eslint-disable jsx-a11y/click-events-have-key-events */}
          {/* eslint-disable jsx-a11y/no-static-element-interactions */}
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <div>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
              <div />
            </div>
          </div>
        </nav>
      </header>
      <div className={`slidingMenu ${isActive ? 'active' : ''}`}>
        <div className="menu-counter-div">
          <ul className={`nav-links-ul ${isActive ? 'active' : ''}`}>
            <li className="nav-links"><Link to="/" onMouseEnter={() => handleHover(0)}>Home</Link></li>
            <li className="nav-links"><Link to="/about-me" onMouseEnter={() => handleHover(1)}>About me </Link></li>
            <li className="nav-links"><Link to="/projects" onMouseEnter={() => handleHover(2)}>Projects</Link></li>
            <li className="nav-links"><Link to="/contact" onMouseEnter={() => handleHover(3)}>Contact </Link></li>
          </ul>
          <div>
            <p className="menuTopDescription">Full Stack Developer with a love for ML & AI, Block Chain, Interactive Websites with React, and Cloud Computing. Learning to play the violin.</p>
            <p className="menuFooterCounter">
              0
              <span className={`sliding-digit ${slideIn ? 'slide-in' : 'slideOut'}`}>{counter}</span>
            </p>
          </div>
        </div>
        <div className="slidingMenuFooter">
          <p>Professional Portfolio</p>
          <div className="social-linkedin">
            <a href="https://www.linkedin.com/in/racheal-appiah-kubi/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://github.com/coderacheal" target="_blank" rel="noreferrer">GITHUB</a>
          </div>
          <p>&copy;2023</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
