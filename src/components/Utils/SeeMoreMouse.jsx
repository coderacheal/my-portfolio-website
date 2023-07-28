import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import seemore from '../../styles/see-more-mouse.module.css';

const SeeMoreMouse = ({ seeAction }) => {
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
        {seeAction}
      </div>
    </div>
  );
};

SeeMoreMouse.propTypes = {
  seeAction: PropTypes.string.isRequired,
  // mouseStyles: PropTypes.shape = {
  //   backgroundColor: PropTypes.string.isRequired,
  //   color: PropTypes.string.isRequired,
  // },
};

export default SeeMoreMouse;
