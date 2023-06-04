import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Loader from './Loader';
import ExampleComponent from './Eg';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader"><Loader /></div>
      ) : (
        <div className="content">
          <HomePage />
          {/* <ExampleComponent /> */}
        </div>
      )}
    </div>
  );
};

export default App;
