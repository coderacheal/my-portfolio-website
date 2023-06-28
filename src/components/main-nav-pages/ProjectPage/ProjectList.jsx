import React, { useState } from 'react';
import projects from '../../../styles/projects.module.css';
// import projects from '../../../styles/projects.module.css';
import catsImage from '../../../assets/cats.jpg';
import brookeLarkImage from '../../../assets/brooke-lark-V4MBq8kue3U-unsplash.jpg';
import ericMartyImage from '../../../assets/eric-marty-MsVZcS1r_ng-unsplash.jpg';
import violinImage from '../../../assets/violin.png';

const ProjectList = () => {
  const [showImage, setShowImage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState('');

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // const handleMouseMove = (event) => {
  //   const containerOffset = event.currentTarget.getBoundingClientRect().top;
  //   setMousePosition({ x: event.clientX, y: event.clientY - containerOffset });
  // };
  

  const handleMouseOverProject = (projectName) => {
    setHoveredProject(projectName);
  };

  const projectImages = {
    '01': catsImage,
    '02': brookeLarkImage,
    '03': ericMartyImage,
    '04': violinImage,
    '05': brookeLarkImage,
  };
  
  

  const renderImage = () => {
    if (!showImage || !hoveredProject || !projectImages[hoveredProject]) {
      return null;
    }

    return (
      <img
        src={projectImages[hoveredProject]}
        alt="Following Mouse"
        className={projects.followImage}
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y,
          // transform: 'translate(-50%, 0)',
        }}
      />
    );
  };


  return (
    <div
      className={projects.projectListView}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p onMouseMove={handleMouseMove} onMouseEnter={() => handleMouseOverProject('01')}>
        <span>01</span>IT&apos;S SUNDAY
      </p>
      <p onMouseMove={handleMouseMove} onMouseEnter={() => handleMouseOverProject('02')}>
        <span>02</span>EVEREST
      </p>
      <p onMouseMove={handleMouseMove} onMouseEnter={() => handleMouseOverProject('03')}>
        <span>03</span>WATERFALL
      </p>
      <p onMouseMove={handleMouseMove} onMouseEnter={() => handleMouseOverProject('04')}>
        <span>04</span>SCHOOL X
      </p>
      <p onMouseMove={handleMouseMove} onMouseEnter={() => handleMouseOverProject('05')}>
        <span>05</span>FORETELL
      </p>
      {renderImage()}
    </div>
  );
};

export default ProjectList;

