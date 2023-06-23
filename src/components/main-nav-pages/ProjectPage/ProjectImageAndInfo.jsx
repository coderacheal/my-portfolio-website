import React, { useState } from 'react';
import projects from '../../../styles/projects.module.css';
import projectData from './Data/projectData';
import Everest from '../../Indivual-Projects/Everest';
import Foretell from '../../Indivual-Projects/Foretell';
import SchoolX from '../../Indivual-Projects/SchoolX';
import Sunday from '../../Indivual-Projects/Sunday';
import Waterfall from '../../Indivual-Projects/Waterfall';


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

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    // Render the selected project's page component
    let selectedComponent = null;

    if (selectedProject.id === 1) {
      selectedComponent = <Sunday />;
    } else if (selectedProject.id === 2) {
      selectedComponent = <Everest />;
    } else if (selectedProject.id === 3) {
      selectedComponent = <Waterfall />;
    } else if (selectedProject.id === 4) {
      selectedComponent = <SchoolX />;
    } else if (selectedProject.id === 5) {
      selectedComponent = <Foretell />;
    }

    return (
      <div>
        <button className="backity" type="button" onClick={handleBack}>Back</button>
        {selectedComponent}
      </div>
    );
  }

  return (
    <div>
      <div className={projects.allProjectsImages} onWheel={handleScroll}>

        {projectData.map((project) => (
          <div
            className={projects.projectPlusInfo}
            key={project.id}
            onClick={() => handleClick(project)}
          >
            <div>
              <img src={project.image} alt="" className={projects.projectImage} />
            </div>
            <span className={projects.connectingString} />
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectImageAndInfo;
