import React, { useState } from 'react';
import SeeMoreMouse from './SeeMoreMouse';

const ProjectCards = () => {
  const [showSeeMoreMouse, setShowSeeMoreMouse] = useState(false);

  const handleSeeMoreMouseEnter = () => {
    setShowSeeMoreMouse(true);
  };

  const handleSeeMoreMouseLeave = () => {
    setShowSeeMoreMouse(false);
  };

  return (
    <div>
      <div className="each-project">
        <div className="project-details">
          <button
            type="button"
            className="projectTitle underline-reveal"
            onMouseEnter={handleSeeMoreMouseEnter}
            onMouseLeave={handleSeeMoreMouseLeave}
          >
            IT&apos;S SUNDAY
          </button>
          <p className="project-brief">
            A CHAT APP EMBEDDED WITH A DEEP LEARNING MODEL
            TO PREDICT THE SENTIMENT OF YOUR TEXT BEFORE YOU SHOOT YOURSELF IN THE FOOT.
            <u>AGAIN</u>
          </p>
        </div>
        <button
          aria-label="first project"
          type="button"
          className="project-image-div"
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
        />
      </div>
      <div className="each-project">
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
          >
            EVEREST
          </button>
          <p className="project-brief">A CHAT APP EMBEDDED WITH A DEEP LEARNING MODEL</p>
        </div>
      </div>
      <div className="each-project">
        <div className="project-details">
          <button
            type="button"
            className="projectTitle underline-reveal"
            onMouseEnter={handleSeeMoreMouseEnter}
            onMouseLeave={handleSeeMoreMouseLeave}
          >
            WATER FALL
          </button>
          <p className="project-brief">A CHAT APP EMBEDDED WITH A DEEP LEARNING MODEL</p>
        </div>
        <button
          aria-label="third project"
          type="button"
          className="project-image-div"
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
        />
      </div>
      <div className="">
        <p
          type="button"
          className="legacy-projects"
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
        >
          SEE LEGACY PROJECTS
        </p>
      </div>
      {showSeeMoreMouse && <SeeMoreMouse />}
    </div>
  );
};

export default ProjectCards;
