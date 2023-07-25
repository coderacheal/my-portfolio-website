import React, { useState, useEffect } from 'react';
import Header from '../Home-page/Header';

const AboutPage = () => {
  const words = ['Passionate', 'full stack', 'developer'];
  const color = 'black';
  const [visibleLetters, setVisibleLetters] = useState([]);

  return (
    <div className="about-me-main">
      <Header color={color} />
      <span className="long-arrow down-arrow">&darr;</span>
      <h2 className="heroAboutMe">
        {words.map((word, index) => (
          <span key={words}>
            {word.split('').map((letter) => (
              <span
                key={word + letter}
                className={`passionate-dev ${visibleLetters.includes(index) ? 'fade-in' : ''}`}
                aria-hidden="true"
              >
                {letter}
              </span>
            ))}
            {index !== words.length - 1 && <br />}
          </span>
        ))}
      </h2>
    </div>
  );
};
