import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Loader from './Loader';
import ProjectDetails from './ProjectDetails';
// import Contact from './Contact';
import AboutMe from './AboutMe';
// import ProjectsPage from './ProjectsPage'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
                <div className="content"><Loader /></div>)}
            </div>
      )}
        />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectDetails />} />
        {/* <Route path="/contact" element={<ProjectsPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
