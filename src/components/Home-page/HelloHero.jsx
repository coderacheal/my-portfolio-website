import React, { useEffect, useState } from 'react';
import Socials from './Socials';
// eslint-disable react/no-unused-vars

const HelloHero = () => {
  const [isVisible, setIsVisible] = useState(false); // eslint-disable-line no-unused-vars
  const [showFirstElement, setShowFirstElement] = useState(true);
  const [showSecondElement, setShowSecondElement] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstElement(false);
      setShowSecondElement(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-intro">
      <div className="name-job-div">
        <div>
          {showFirstElement && <p className={`hello fade-in ${isVisible ? 'visible' : ''}`}>Hello</p>}
          {showSecondElement && (
          <div className="about-my-portfolio">
            <p className="tiny-about-me"> &lt; /About me/ &gt; </p>
            <p className="description">I am RACHEAL, I create</p>
            <p className="description">interactive websites that</p>
            <p className="description">leverage AI and ML</p>
            <p>
              {' '}
              <u>Full Stack</u>
              {' '}
              Developer
            </p>
          </div>
          )}
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default HelloHero;
