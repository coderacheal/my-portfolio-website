import React, { useEffect, useState } from 'react';
import Socials from './Socials';

/* eslint-disable no-unused-vars */

const HelloHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFirstElement, setShowFirstElement] = useState(true);
  const [showSecondElement, setShowSecondElement] = useState(false); 


  const HandleVisibility = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstElement(false);
      setShowSecondElement(true);
      
    }, 3000);

    const visbility = setTimeout(() => {
      setIsVisible(true);
    }, 500)

    return () => clearTimeout(timer, visbility);
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
              <a
                className="downloadCV"
                href="https://docs.google.com/document/d/1vAV1Zcc6cSSp_SBLvWE7637mKdN788IKIBJq2cJblkI/edit?usp=sharing"
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
