import React from 'react';
import Header from '../Home-page/Header';
import Footer from '../Home-page/Footer';
import headshot from '../../assets/headshot.jpg';
// import headshot from '../../assets/'

const AboutPage = () => (
  <div className="about-me-main">
    <Header />
    <diva className="professional-photo-and-text">
      <div className="headshot-div">
        <img className="headshot" src={headshot} alt="headshot" />
      </div>
      <div className="more-about-me-div">
        <p className="more-about-me">
          MY CREATIVITY LIES IN CREATING SLEEK INTERACTIVE WEBSITES THAT LEVERAGE ARTIFICIAL
          INTELLIGENCE. I LOVE DATA AS MUCH AS THE CODE. I BUILD ACCESSIBLE AND HELPFUL
          APPLICATIONS FOR MY COMMUNITY
          {' '}
        </p>
        <p className="more-about-me">
          LATELY, I&lsquo;VE BEEN DIVING INTO THE FASCINATING REALM OF BLOCKCHAIN,
          EXPLORING ITS POTENTIAL APPLICATIONS. MY AIM IS TO MERGE CUTTING-EDGE TECH WITH
          USER-FRIENDLY EXPERIENCES, ALWAYS SEEKING NEW CHALLENGES AND REFINING MY SKILLS.
          {' '}
        </p>
        <p className="more-about-me">
          OH, AND DID I MENTION?
          {' '}
          I&lsquo;M ALSO LEARNING TO PLAY THE VIOLIN TRYING TO CREATE BEAUTIFUL MELODIES
          IN MY SPARE TIME.
          {' '}
        </p>
      </div>
    </diva>
    <div>
      <div />
      <div>
        <div>Languages</div>
        <div>Tools * FrameWork</div>
        <div>Certification</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
