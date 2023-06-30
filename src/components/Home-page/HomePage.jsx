import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HelloHero from './HelloHero';
import ProjectCards from './ProjectCards';
import Contact from './Contact';
import AboutMe from './AboutMe';
// import ProjectHeader from '../Indivual-Projects/components/ProjectHeader';

const HomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      {/* <ProjectHeader /> */}
      <section>
        <HelloHero />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <ProjectCards />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  </div>
);

export default HomePage;
