import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router, Routes, Route, useLocation,
} from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import HomePage from './Home-page/HomePage';
import Loader from './Home-page/Loader';
import AboutPage from './main-nav-pages/AboutPage';
import ContactPage from './main-nav-pages/ContactPage';
import ProjectsPage from './main-nav-pages/ProjectPage/ProjectsPage';
import Sunday from './Indivual-Projects/Sunday';
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
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              {isLoading ? (<div className="loader"><Loader duration={4000} /></div>
              ) : (
                <div className="content"><HomePage /></div>)}
            </div>
        )}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work/sage" element={<Sage />} />
        <Route path="/work/schoolx" element={<SchoolX />} />
        <Route path="/work/everest" element={<Everest />} />
      </Routes>
    </Router>
  );
};
export default App;
