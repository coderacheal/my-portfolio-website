import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../../styles/projects.module.css';
import projectData from './Data/projectData';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

const ProjectImageAndInfo = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

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

        {projectData.map((project) => (
          <div
            className={projects.projectPlusInfo}
            key={project.id}
          >
            <Link to={`/projects/${project.url_extension}`}>
            <div>
              <img src={project.image} alt="" className={projects.projectImage} />
            </div>
            </Link>
            <span className={projects.connectingString} />
            <Link to={`/projects/${project.url_extension}`}>
              <div className={projects.projectInfo}>
                <p className={projects.title}>{project.title}</p>
                <div>
                  <p className={projects.eachProjectDescription}>{project.projectDescription}</p>
                </div>
                <div>
                  <div className={projects.techStackDiv}>
                    <div>
                      <p className={projects.techStack}>{project.techStack[0]}</p>
                      <p className={projects.techStack}>{project.techStack[1]}</p>
                    </div>
                    <div>
                      <p className={projects.techStack}>{project.techStack[2]}</p>
                      <p className={projects.techStack}>{project.techStack[3]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectImageAndInfo;
