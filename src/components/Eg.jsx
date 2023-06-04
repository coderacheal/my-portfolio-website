import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [showFirstElement, setShowFirstElement] = useState(true);
  const [showSecondElement, setShowSecondElement] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstElement(false);
      setShowSecondElement(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showFirstElement && <div>First Element</div>}
      {showSecondElement && <div>Second Element</div>}
    </div>
  );
};

export default ExampleComponent;
