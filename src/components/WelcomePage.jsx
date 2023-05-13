import React from 'react';
import Header from './Header';
import Socials from './Socials';
import Floating from './Floating';
import Projects from './Projects';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <main className="portfolio-content">
        <Header />
        <Floating />
        <section className='intro-section'>
            <div className='my-name-intro'>
              <p className='name'>Racheal Appiah-kubi</p>
              <p className='tagline'>Full Stack Web Developer with a love for AI & Block Chain </p>
            </div>
            <Socials />
        </section>
        <section>
          <Projects />
        </section>
      </main>
      <footer className="portfolio-footer">
        <p className='reserved-footer'>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
