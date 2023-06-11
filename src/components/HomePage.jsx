import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HelloHero from './HelloHero';
import Cards from './Cards';

const HomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      <HelloHero />
      <section>
        <Cards />
      </section>
      <Footer />
    </main>
  </div>
);

export default HomePage;
