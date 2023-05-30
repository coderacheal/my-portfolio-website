import React from 'react';
import Header from './Header';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Hero from './Hero';
import MouseHalo from './MouseHalo';
// import Contact from './Contact';

const HomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      <Hero />
      <section>
        <AboutMe />
        <Projects />
      </section>
      <MouseHalo />
      <div>
        
      </div>
      <Footer />
    </main>
  </div>
);

export default HomePage;
