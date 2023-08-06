import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import HelloHero from './HelloHero';
import ProjectCards from './ProjectCards';
import Contact from './Contact';

const HomePage = () => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="welcome-page">
      <main className="portfolio-content">
        <Header />
        <HelloHero />
        <ProjectCards />
        <Contact />
        <Footer />
      </main>
    </div>
  </motion.div>
);

export default HomePage;
