import React, { useEffect, useState } from 'react';
import seemore from '../styles/see-more-mouse.module.css'

const SeeMoreMouse = () => {
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
      <div className={seemore.cursor} style={{ left: mousePosition.x, top: mousePosition.y }}>
        <p>See more</p>
      </div>
    </div>
  );
};
export default SeeMoreMouse
