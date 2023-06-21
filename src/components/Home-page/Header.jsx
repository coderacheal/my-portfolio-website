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
            <li className="nav-links">
              <Link to="/" onMouseEnter={() => handleHover(0)}>
                <span>H</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>  
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/about" onMouseEnter={() => handleHover(1)}>
                <span>A</span>
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/projects" onMouseEnter={() => handleHover(2)}>
                <span>P</span>
                <span>r</span>
                <span>o</span>
                <span>j</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span>s</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/contact" onMouseEnter={() => handleHover(3)}>
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span> 
              </Link>
              </li>
          </ul>
          <div>
            <p className="menuTopDescription">FULL STACK DEVELOPER WITH A LOVE FOR ML& AI, BLOCKCHAIN AND BUILDING INTERACTIVE WEBSITES WITH REACT. LEARNING TO PLAY THE VIOLIN </p>
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
