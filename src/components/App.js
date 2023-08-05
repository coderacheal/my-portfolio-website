import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router, Routes, Route, useLocation,
} from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import HomePage from './Home-page/HomePage';
import Loader from './Home-page/Loader';
import AboutPage from './main-nav-pages/AboutPage';
import ContactPage from './main-nav-pages/ContactPage';
import ProjectsPage from './main-nav-pages/ProjectPage/ProjectsPage';
import Everest from './Indivual-Projects/Everest';
import Foretell from './Indivual-Projects/Foretell';
import SchoolX from './Indivual-Projects/SchoolX';
import Sage from './Indivual-Projects/Sage';

/* eslint-disable import/no-extraneous-dependencies */

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  // const location = useLocation()
  const [isLoading, setIsLoading] = useState(true);

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); // When loading is complete, set progress to 100%
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div>
        {isLoading ? (<div className="loader"><Loader /></div>
        ) : (
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/work/sage" element={<Sage />} />
              <Route path="/work/foretell" element={<Foretell />} />
              <Route path="/work/schoolx" element={<SchoolX />} />
              <Route path="/work/everest" element={<Everest />} />
            </Routes>
          </AnimatePresence>
        )}
      </div>
    </Router>
  );
};

export default App;
