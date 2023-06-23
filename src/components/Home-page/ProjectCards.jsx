import React, { useState } from 'react';
import SeeMoreMouse from '../Utils/SeeMoreMouse';
import Sunday from '../Indivual-Projects/Sunday';
import Everest from '../Indivual-Projects/Everest';
import Waterfall from '../Indivual-Projects/Waterfall';
import SchoolX from '../Indivual-Projects/SchoolX';
import Foretell from '../Indivual-Projects/Foretell';

const ProjectCards = () => {
  const [showSeeMoreMouse, setShowSeeMoreMouse] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSeeMoreMouseEnter = () => {
    setShowSeeMoreMouse(true);
  };

  const handleSeeMoreMouseLeave = () => {
    setShowSeeMoreMouse(false);
  };

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
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
        <button className="backity" type="button" onClick={handleBack}>
          Back
        </button>
        <div className="each-project-page">
          {selectedComponent}
          <button type="button" className="close-button" onClick={handleBack}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="ribbon-case-study">
        CASE STUDIE
        <u>S</u>
      </p>
      <div className="each-project">
        <div className="project-details">
          <button
            type="button"
            className="projectTitle underline-reveal"
            onMouseEnter={handleSeeMoreMouseEnter}
            onMouseLeave={handleSeeMoreMouseLeave}
            onClick={() => handleClick({ id: 1 })}
            key={1}
          >
            IT&apos;S SUNDAY
          </button>
          {/* ... */}
        </div>
        {/* ... */}
      </div>
      <div className="each-project">
        {/* ... */}
        <button
          aria-label="second project"
          type="button"
          className="project-image-div"
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
        />
        <div className="project-details">
          <button
            type="button"
            className="projectTitle underline-reveal"
            onMouseEnter={handleSeeMoreMouseEnter}
            onMouseLeave={handleSeeMoreMouseLeave}
            onClick={() => handleClick({ id: 2 })}
            key={2}
          >
            EVEREST
          </button>
          {/* ... */}
        </div>
      </div>
      {/* ... */}
    </div>
  );
};

export default ProjectCards;

