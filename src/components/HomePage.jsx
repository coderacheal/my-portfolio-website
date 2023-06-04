import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import HelloHero from './HelloHero';

const HomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      <HelloHero />
      <section>
        <Projects />
      </section>
      <Footer />
    </main>
  </div>
);

export default HomePage;
