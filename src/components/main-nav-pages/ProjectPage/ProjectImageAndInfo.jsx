import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../../styles/projects.module.css';
import projectData from './Data/projectData';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable  react/jsx-one-expression-per-line */

const ProjectImageAndInfo = () => {
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

  return (
    <div>
      <div className={projects.allProjectsImages} onWheel={handleScroll}>
        {projectData.map((project, index) => (
          <div
            className={projects.projectPlusInfo}
            key={project.id}
          >
            <Link to={`/projects/${project.urlExtension}`}>
              <div>
                <p>0{index + 1}</p>
                <img src={project.projectImage} alt="" className={projects.projectImage} />
                <p className="">{project.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectImageAndInfo;
