import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeeMoreMouse from '../Utils/SeeMoreMouse';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const ProjectCards = () => {
  const topThreeProjects = projectData.slice(0, 4);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const HandleVisibility = (projectId) => {
    setIsVisible(true);
    setHoveredProjectId(projectId);
  };

  const HandleInVisibility = () => {
    setIsVisible(false);
    setHoveredProjectId(null);
  };

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
      <div className="ribbon-case-study">
        <p className="underline-on-hover">
          RECENT WORK
        </p>
      </div>
      <div className="wrapper">
        {topThreeProjects.map((eachProject) => {
          const backgroundStyle = {
            backgroundImage: `url(${eachProject.projectCardImage})`,
          };
          return (
            <div className="each-project" key={eachProject.id}>
              <div className="project-details">
                <Link to={`/work/${eachProject.urlExtension}`}>
                  <button
                    type="button"
                    className="projectTitle underline-on-hover"
                  >
                    {eachProject.title}
                  </button>
                </Link>
                <p className="project-brief">
                  {eachProject.miniIntro}
                </p>
              </div>
              <Link
                to={`/work/${eachProject.urlExtension}`}
                className="project-img-link"
                style={backgroundStyle}
                onMouseEnter={() => HandleVisibility(eachProject.id)}
                onMouseLeave={HandleInVisibility}
              >
                <p className={`${isVisible && hoveredProjectId === eachProject.id
                  ? 'project-id' : 'not'}`}
                >
                  0
                  {eachProject.id}
                </p>
              </Link>
            </div>
          );
        })}
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
