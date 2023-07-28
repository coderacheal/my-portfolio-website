import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

const Header = ({ color }) => {
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(1);
  const [slideIn, setSlideIn] = useState(false);
  const location = useLocation();

  const containerStyle = {
    color,
  };

  useEffect(() => {
    setIsActive(false); // Close the sliding menu on location change
  }, [location]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleHover = (index) => {
    setSlideIn(true);
    setCounter(index + 1);
  };

  return (
    <div>
      <header className="header">
        <nav className="nav-item">
          <Link to="/">
            {' '}
            <p
              className="brand"
              style={containerStyle}
            >
              Racheal
            </p>
          </Link>
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
                <span>O</span>
                <span>M</span>
                <span>E</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/work" onMouseEnter={() => handleHover(1)}>
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>K</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/about" onMouseEnter={() => handleHover(2)}>
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/contact" onMouseEnter={() => handleHover(3)}>
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
              </Link>
            </li>
          </ul>
          <div>
            <p className="menuTopDescription">FULL STACK DEVELOPER WITH A LOVE FOR ML& AI, BLOCKCHAIN AND BUILDING INTERACTIVE WEBSITES WITH REACT. LEARNING TO PLAY THE VIOLIN </p>
            <p className="menuFooterCounter">
              0
              {/* <span className={`sliding-digit ${slideIn ? 'slide-in' : 'slideOut'}`}>{counter}</span> */}
              {/* <span className={`sliding-digit ${slideIn ? 'slide-in' : 'slideOut'}`}>{counter}</span> */}
              <span className={`sliding-digit ${slideIn ? '' : 'slideOut'}`}>{counter}</span>
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

Header.propTypes = {
  color: PropTypes.string,
};

Header.defaultProps = {
  color: 'white',
};

export default Header;
