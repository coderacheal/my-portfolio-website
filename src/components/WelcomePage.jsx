import React from 'react';
import Header from './Header';
import Socials from './Socials';
import Floating from './Floating';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <main className="portfolio-content">
        <Header />
        <Floating />
        <section className='intro-section'>
            <div className='my-name-intro'>
              <p className='name'>Racheal Appiah-kubi</p>
              <p className='tagline'>Remote Full Stack Web Developer with a love for AI & ML </p>
            </div>
            <Socials />
        </section>
        <section>
          <AboutMe />
          <Projects />
        </section>
        <Footer />
      </main>
    </div>
  );
};


export default WelcomePage;
