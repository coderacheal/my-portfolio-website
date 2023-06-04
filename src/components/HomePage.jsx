import React from 'react';
import Header from './Header';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Hero from './Hero';
import MouseHalo from './MouseHalo';
import Contact from './Contact';
import HelloHero from './HelloHero';

const HomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      <HelloHero />
      <Hero />
      <section>
        <AboutMe />
        <Projects />
      </section>
      <Contact />
      <Footer />
    </main>
  </div>
);

export default HomePage;
