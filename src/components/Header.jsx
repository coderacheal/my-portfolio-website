import React, { useState } from 'react';

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
                <ul className={`nav-links-ul ${isActive ? 'active' : ''}`}>
                  <li className="nav-links"><a href="https://www.google.com/">Home</a></li>
                  <li className="nav-links"><a href="https://www.google.com/">Project</a></li>
                  <li className="nav-links"><a href="https://www.google.com/">About</a></li>
                  <li className="nav-links"><a href="https://www.google.com/">Contact  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
// <a href="/path/to/your/file.pdf" download>Download PDF</a>;

export default Header;
