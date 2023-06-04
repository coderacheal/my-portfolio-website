import React, { useState } from 'react';
import HaloMouseCursor from './MouseHalo';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBlackFont, setBlackFont] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setBlackFont(!isBlackFont);
  };

  return (
    <div>
      <header className="header">
        {/* eslint-disable react/no-unescaped-entities */}
        <p className={`rest ${isBlackFont ? 'active' : ''}`}>רייצ'ל</p>
        <nav className="nav">
          {/* eslint-disable jsx-a11y/click-events-have-key-events */}
          {/* eslint-disable jsx-a11y/no-static-element-interactions */}
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <div>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
              <div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className={`slidingMenu ${isActive ? 'active' : ''}`}>
        <div className='menu-counter-div'>
          <ul className={`nav-links-ul ${isActive ? 'active' : ''}`}>
            <li className={`nav-links ${isActive ? 'active' : ''}`} onClick={handleClick}><a href="#">Home</a></li>
            <li className="nav-links"><a href="https://www.google.com/">Projects</a></li>
            <li className="nav-links"><a href="https://www.google.com/">Resume</a></li>
            <li className="nav-links"><a href="https://www.google.com/">Contact </a></li>
          </ul>
          <div>
            <p className='menuTopDescription'>Full Stack Developer with a love for ML & AI, Block Chain, Interactive Websites with React, and Cloud Computing. Learning to play the violin.</p>
            <p className='menuFooterCounter'>01</p>
          </div>
        </div>
        <div className='slidingMenuFooter'>
          <p>Professional Portfolio</p>
          <p>LinkedIn GitHub</p>
          <p>@c2023</p>
        </div>
      </div>
      <HaloMouseCursor />
    </div>
  );
};
// <a href="/path/to/your/file.pdf" download>Download PDF</a>;

export default Header;
