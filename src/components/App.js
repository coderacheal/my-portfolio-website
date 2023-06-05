import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Loader from './Loader';
import ProjectDetails from './ProjectDetails';
import Contact from './Contact';
import AboutMe from './AboutMe';

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
                <div className="content"><HomePage /></div>)}
            </div>
      )}
        />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import Loader from './Loader';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulating an asynchronous task
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home isLoading={isLoading} />} />
//         <Route path="/about-me" component={AboutMe}/>
//         <Route path="/projects" component={ProjectDetails}/>
//         <Route path="/contacts" component={Contact}/>
//       </Routes>
//     </Router>
//   );
// };

// const Home = ({ isLoading }) => {
//   return (
//     <div>
//       {isLoading ? (
//         <div className="loader"><Loader /></div>
//       ) : (
//         <div className="content">
//           <HomePage />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
