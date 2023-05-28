import React from 'react';
import Socials from './Socials';

const Hero = () => (
  <div>
    <section className="intro-section">
      <div className="my-case-study-intro">
        <div className="navigate-numbers">
          <p className="navigate-numbers-each">01</p>
          <p className="navigate-numbers-each">02</p>
          <p className="navigate-numbers-each">03</p>
          <p className="navigate-numbers-each">04</p>
        </div>
        <div className="navigate">
          <p>CASE STUDIES</p>
          <p>AI & ML</p>
          <p>RESUME</p>
          <p>SAY HI!</p>
        </div>
      </div>
      <div className="name-job-div">
        <p className="name animated-text">RACHEAL</p>
        <p className="name surname animated-text">APPIAH-KUBI</p>
        <p className="tagline">Remote full stack developer</p>
      </div>
      <Socials />
    </section>
  </div>
);

export default Hero;
