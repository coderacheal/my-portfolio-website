import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              {isLoading ? (<div className="loader"><Loader duration={1000} /></div>
              ) : (
                <div className="content"><HomePage /></div>)}
            </div>
      )}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/sunday" element={<Sunday />} />
        <Route path="/projects/waterfall" element={<Waterfall />} />
        <Route path="/projects/foretell" element={<Foretell />} />
        <Route path="/projects/schoolx" element={<SchoolX />} />
        <Route path="/projects/everest" element={<Everest />} />
      </Routes>
    </Router>
  );
};

export default App;
