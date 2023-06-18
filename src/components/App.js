import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home-page/HomePage';
import Loader from './Home-page/Loader';
import ProjectDetails from './Home-page/ProjectDetails';
import Contact from './Home-page/Contact';
import AboutMe from './Home-page/AboutMe';

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
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
