import React from 'react';
import PropTypes from 'prop-types';
import hero from '../../../styles/projects/projectHero.module.css';

const ProjectHero = ({
  projectName,
  projectDescription,
  projectImage,
  projectYear,
  backgroundImage,
  color,

}) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const projectColor = {
    color: color,
  }
  

  return (
    <div className={hero.projectHero} style={backgroundStyle}>
      <div className={hero.mainHeroSection}>
        <div>
          <p className={hero.boldProjectName} style={projectColor}>{projectName}</p>
          <p className={hero.shortProjectDescription} style={projectColor}>{projectDescription}</p>
        </div>
        <div>
          <img src={projectImage} alt="Project Everest" className={hero.ProjectImage} />
        </div>
      </div>
      <div className={hero.developerRole}>
        <div className={hero.eachRole}>
          <p>ROLE</p>
          <p style={projectColor}>FULL-STACK DEVELOPER</p>
        </div>
        <div className={hero.eachRole}>
          <p>CONTEXT</p>
          <p style={projectColor}>PERSONAL PROJECTS</p>
        </div>
        <div className={hero.eachRole}>
          <p>YEAR</p>
          <p style={projectColor}>{projectYear}</p>
        </div>
      </div>
    </div>
  );
};

ProjectHero.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectYear: PropTypes.number.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProjectHero;
