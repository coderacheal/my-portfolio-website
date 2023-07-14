import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
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
        RECENT WORK
      </p>
      <div className="wrapper">
        {topThreeProjects.map((eachProject) => (
          <div className="each-project" key={eachProject.id}>
            <div className="project-details">
              <Link to={`{/work/${eachProject.urlExtension}`}>
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
            <div className="parallaxContainer">
              <img
                src={eachProject.projectImage}
                alt=""
                className="parallaxProjectImage"
                onMouseEnter={handleSeeMoreMouseEnter}
                onMouseLeave={handleSeeMoreMouseLeave}
              />
            </div>
            <p className="see-more-halo"> See more</p>
          </div>
        ))}
      </div>
      <div>
        <Link
          to="/work"
          type="button"
          className="legacy-projects"
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
        >
          SEE LEGACY PROJECTS
        </Link>
      </div>
      {showSeeMoreMouse && <SeeMoreMouse />}
    </div>
  );
};

export default ProjectCards;
