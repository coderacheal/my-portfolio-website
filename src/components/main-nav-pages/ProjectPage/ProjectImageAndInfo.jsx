import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../../styles/projects.module.css';
import projectData from './Data/projectData';
import SeeMoreMouse from '../../Utils/SeeMoreMouse';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable  react/jsx-one-expression-per-line */

const ProjectImageAndInfo = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (e) => {
    if (e.deltaY !== 0 && e.deltaX === 0) {
      // Scroll horizontally only if deltaY (vertical scroll) is zero
      e.preventDefault();
      const container = e.currentTarget;
      setScrollLeft(scrollLeft + e.deltaY);
      container.scrollLeft = scrollLeft + e.deltaY;
    }
  };


  const handleSeeMoreMouseEnter = () => {
    setShowSeeMoreMouse(true);
  };

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div id={projects.main}>
      <div
        className={projects.allProjectsImages}
        onWheel={handleScroll}
        // onMouseEnter={handleSeeMoreMouseEnter}
      >
        {projectData.map((project, index) => (
          <div
            className={`${projects.projectPlusInfo} ${hoveredImage !== null && hoveredImage !== index ? projects.greyedOut : ''}`}
            key={project.id}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={handleImageLeave}
          >
            <Link
              to={`/work/${project.urlExtension}`}
              className={projects.projectLinkTag}
            >
              <div
                className={projects.imageContainer}
                key={project.id}
              >
                <div
                  className={projects.projectImageDiv}
                />
                <p style={{ width: '75%', margin: '0 auto' }}>0{index + 1} </p>
                <img
                  src={project.projectImage}
                  alt={project.projectName}
                  className={projects.projectImage}
                  style={index % 2 === 0 ? { width: '90%', height: '90%' } : { width: '70%', height: '70%' }}
                />

                <p style={{ textAlign: 'right', width: '85%' }}>{project.title}</p>
              </div>

            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProjectImageAndInfo;
