import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route, useLocation,
} from 'react-router-dom';
import HomePage from './Home-page/HomePage';
import Loader from './Home-page/Loader';
import AboutPage from './main-nav-pages/AboutPage';
import ContactPage from './main-nav-pages/ContactPage';
import ProjectsPage from './main-nav-pages/ProjectPage/ProjectsPage';
import Sunday from './Indivual-Projects/Sunday';
import Everest from './Indivual-Projects/Everest';
import Waterfall from './Indivual-Projects/Waterfall';
import Foretell from './Indivual-Projects/Foretell';
import SchoolX from './Indivual-Projects/SchoolX';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        <Route path="/work/sunday" element={<Sunday />} />
        <Route path="/work/waterfall" element={<Waterfall />} />
        <Route path="/work/foretell" element={<Foretell />} />
        <Route path="/work/schoolx" element={<SchoolX />} />
        <Route path="/work/everest" element={<Everest />} />
      </Routes>
    </Router>
  );
};

export default App;
