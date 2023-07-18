import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SeeMoreMouse from '../Utils/SeeMoreMouse';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const ProjectCards = () => {
  const topThreeProjects = projectData.slice(0, 3);
  // const [projectID, setprojectID] = useState('');

  const seeAction = 'See more';

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
            <Link to={`{/work/${eachProject.urlExtension}`} className="project-img-link">
              <p className="project-id">
                0
                {eachProject.id}
              </p>
            </Link>
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
          RECENT WORK GALLERY
        </Link>
      </div>
      {showSeeMoreMouse && <SeeMoreMouse seeAction={seeAction} />}
    </div>
  );
};

export default ProjectCards;
