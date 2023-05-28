import React from 'react';
import Header from './Header';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Hero from './Hero';
import Contact from './Contact';
import MouseHalo from './MouseHalo';

const HomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      <Hero />
      <section>
        <AboutMe />
        <Projects />
        <Contact />
      </section>
      <MouseHalo />
      <Footer />
    </main>
  </div>
);

export default HomePage;
