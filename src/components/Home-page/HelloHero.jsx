import React, { useEffect, useState } from 'react';
import Socials from './Socials';

/* eslint-disable no-unused-vars */

const HelloHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [secondIsVisible, setsecondIsVisible] = useState(false);
  const [showFirstElement, setShowFirstElement] = useState(true);
  const [showSecondElement, setShowSecondElement] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstElement(false);
      setShowSecondElement(true);
    }, 1500);

    const visbility = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const secondvisbility = () => {
      setsecondIsVisible(true);
    };

    return () => clearTimeout(timer, visbility, secondvisbility);
  }, []);

  return (
    <section className="hero-intro">
      <div className="name-job-div">
        <div>
          {showFirstElement && <p className={`hello fade-in ${isVisible ? 'visible' : ''}`}>Hello</p>}
          {showSecondElement && (
            <div className={`about-my-portfolio ${secondIsVisible ? 'fade-in-about' : ''}`}>
              <p className="tiny-about-me"> &lt; /About me/ &gt; </p>
              <p className="description">I am RACHEAL, I create</p>
              <p className="description">interactive websites that</p>
              <p className="description">leverage data</p>
              {/* <p className="description">leverage AI and ML</p> */}
              <p>
                {' '}
                <u>Full Stack</u>
                {' '}
                Developer
              </p>
              <a
                className="downloadCV"
                href="https://drive.google.com/file/d/1UA3AVeLdr-mDuFDNGN5DUTEyf56g5fp_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            </div>
          )}
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default HelloHero;
