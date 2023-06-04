import React, { useEffect, useState } from 'react';

const HaloMouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div className="cursor" style={{ left: mousePosition.x, top: mousePosition.y }} />
    </div>
  );
};

export default HaloMouseCursor;
