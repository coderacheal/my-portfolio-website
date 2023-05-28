import React from 'react';
import Header from './Header';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Hero from './Hero';
import Contact from './Contact';
import MouseHalo from './MouseHalo';
import AnimatedTextScroll from './AnimatedTextScroll';

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
      <AnimatedTextScroll />
      <Footer />
    </main>
  </div>
);

export default HomePage;
