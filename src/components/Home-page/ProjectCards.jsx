import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeeMoreMouse from '../Utils/SeeMoreMouse';

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
      <p className="ribbon-case-study">
        CASE STUDIES
      </p>
      <div className="each-project">
        <div className="project-details">
          <Link to="/projects/sunday">
            <button
              type="button"
              className="projectTitle underline-reveal"
              onMouseEnter={handleSeeMoreMouseEnter}
              onMouseLeave={handleSeeMoreMouseLeave}
            >
              SUNDAY
            </button>
          </Link>
          <p className="project-brief">
            A CHAT APP EMBEDDED WITH A DEEP LEARNING BERT MODEL
            TO PREDICT THE SENTIMENT OF YOUR TEXT BEFORE YOU SHOOT YOURSELF IN THE FOOT.
            <u>AGAIN</u>
          </p>
        </div>
        <Link to="/projects/sunday">
          <button
            aria-label="first project"
            type="button"
            className="project-image-div"
            onMouseEnter={handleSeeMoreMouseEnter}
            onMouseLeave={handleSeeMoreMouseLeave}
          />
        </Link>
      </div>
      <div className="each-project">
        <Link to="/projects/everest">
          <button
            aria-label="second project"
            type="button"
            className="project-image-div"
            onMouseEnter={handleSeeMoreMouseEnter}
            onMouseLeave={handleSeeMoreMouseLeave}
          />
        </Link>
        <div className="project-details">
          <Link to="/projects/everest">
            <button
              type="button"
              className="projectTitle underline-reveal"
              onMouseEnter={handleSeeMoreMouseEnter}
              onMouseLeave={handleSeeMoreMouseLeave}
            >
              EVEREST
            </button>
            {' '}

          </Link>
          <p className="project-brief">
            A FINANCE APP THAT ENABLES YOU TO TRACK YOUR
            EXPENSES BASED ON THE TYPE OF EXPENSES YOU DEFINE. COMPLETE WITH AUTHENTICATION,
            IT HELPS YOU STAY ON TOP OF THE DOLLAR
          </p>
        </div>
      </div>
      <div className="each-project">
        <div className="project-details">
          <Link to="/projects/waterfall">
            <button
              type="button"
              className="projectTitle underline-reveal"
              onMouseEnter={handleSeeMoreMouseEnter}
              onMouseLeave={handleSeeMoreMouseLeave}
            >
              WATER FALL
            </button>
          </Link>
          <p className="project-brief">I CERTIFED AS A SCRUM MASTER TO BECOME A BETTER TEAM PLAYER AND DECIDED TO BUILD A PRODUCT MANAGEMENT TOOL FOR MY COMPANY WITH PURE JAVASCRIPT</p>
        </div>
        <Link to="/projects/waterfall">
          <button
            aria-label="third project"
            type="button"
            className="project-image-div"
            onMouseEnter={handleSeeMoreMouseEnter}
            onMouseLeave={handleSeeMoreMouseLeave}
          />
        </Link>
      </div>
      <div className="">
        <div
          type="button"
          className="legacy-projects"
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
        >
          SEE LEGACY PROJECTS
        </div>
      </div>
      {showSeeMoreMouse && <SeeMoreMouse />}
    </div>
  );
};

export default ProjectCards;
