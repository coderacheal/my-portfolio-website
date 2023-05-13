import React from 'react';
import Header from './Header';
import Socials from './Socials';
import Floating from './Floating';

const WelcomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      <Floating />
      <section className="intro-section">
        <div className="my-name-intro">
          <p className="name">Racheal Appiah-kubi</p>
          <p>Full Stack Web Developer with a love for AI & Block Chain </p>
          {/* <img src={logo} alt="" /> */}
          {/* <img src={logo} alt="Image" class="colorized-image" /> */}
        </div>
        <Socials />
      </section>
    </main>
    <footer className="portfolio-footer">
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </footer>
  </div>
);

export default WelcomePage;
