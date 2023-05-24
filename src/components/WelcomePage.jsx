import React, {useState} from 'react';
import Header from './Header';
// import Socials from './Socials';
// import Floating from './Floating';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Hero from './Hero';
import Contact from './Contact';
import MouseHalo from './MouseHalo'

const WelcomePage = () => {
  

  return (
    <div className="welcome-page">
      <main className="portfolio-content">
        <Header />
        <Hero />
        <section>
          <AboutMe />
          <Projects />
          <Contact />
          <section id='contact-me-section'>
            <div className='contact-me-div'><p className='contact-anime'>Contact Me</p> </div>
          </section>
        </section>
        <MouseHalo />
        <Footer />
      </main>
    </div>
  );
};


export default WelcomePage;
