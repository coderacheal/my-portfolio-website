import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HelloHero from './HelloHero';
import ProjectCards from './ProjectCards';
import Contact from './Contact';

const HomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      <HelloHero />
      <ProjectCards />
      <Contact />
      <Footer />
    </main>
  </div>
);

export default HomePage;
