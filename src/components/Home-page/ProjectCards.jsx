import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeeMoreMouse from '../Utils/SeeMoreMouse';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const ProjectCards = () => {
  const topThreeProjects = projectData.slice(0, 3);

  const [showSeeMoreMouse, setShowSeeMoreMouse] = useState(false);

  const handleSeeMoreMouseEnter = () => {
    setShowSeeMoreMouse(true);
  };

  const handleSeeMoreMouseLeave = () => {
    setShowSeeMoreMouse(false);
  };

  return (
    <div className="homeProjectsImageAndDescription">
      <p className="ribbon-case-study">
        CASE STUDIES
      </p>
      {topThreeProjects.map((eachProject) => (
        <div className="each-project" key={eachProject.id}>
          <div className="project-details">
            <Link to="/projects/sunday">
              <button
                type="button"
                className="projectTitle underline-reveal"
                onMouseEnter={handleSeeMoreMouseEnter}
                onMouseLeave={handleSeeMoreMouseLeave}
              >
                {eachProject.title}
              </button>
            </Link>
            <p className="project-brief">
              {eachProject.miniIntro}
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
          {/* <div className="see-more-halo">
            <p>See</p>
            <p>more</p>
          </div> */}
          <p className="see-more-halo"> See more</p>
        </div>
      ))}

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
