import React from 'react';
// import projectImage from '../../../assets/finance-app.png';
import PropTypes from 'prop-types';
import hero from '../../../styles/projects/projectHero.module.css';

const ProjectHero = ({
  projectName, projectDescription, projectImage, projectYear,
}) => (
  <div className={hero.projectHero}>
    <div className={hero.mainHeroSection}>
      <div>
        <p className={hero.boldProjectName}>{projectName}</p>
        <p className={hero.shortProjectDescription}>{projectDescription}</p>
      </div>
      <div>
        <img src={projectImage} alt="Project Everest" className={hero.ProjectImage} />
      </div>
    </div>
    <div className={hero.developerRole}>
      <div className={hero.eachRole}>
        <p>ROLE</p>
        <p>FULL-STACK DEVELOPER</p>
      </div>
      <div className={hero.eachRole}>
        <p>CONTEXT</p>
        <p>PERSONAL PROJECTS</p>
      </div>
      <div className={hero.eachRole}>
        <p>YEAR</p>
        <p>{projectYear}</p>
      </div>
    </div>
  </div>
);

ProjectHero.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectYear: PropTypes.number.isRequired,
};

export default ProjectHero;
// A rails app for managing your finances
