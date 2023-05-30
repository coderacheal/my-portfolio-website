import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Loader from './Loader';
import Contact from './Contact'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader"><Loader /></div>
      ) : (
        <div className="content">
          <HomePage />
        </div>
      )}
    </div>
  );
};

export default App;
