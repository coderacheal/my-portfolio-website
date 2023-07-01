import React from 'react';
// import projectImage from '../../../assets/headshot.jpg';
// import projectImage from '../../../assets/finance-app.png';
import hero from '../../../styles/projects/projectHero.module.css';
import PropTypes from 'prop-types';


const ProjectHero = ({projectName, projectDecription, projectImage, projectYear}) => (
  <div className={hero.projectHero}>
    <div className={hero.mainHeroSection}>
      <div>
        <p className={hero.boldProjectName}>{projectName}</p>
        <p className={hero.shortProjectDescription}>{projectDecription}</p>
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
  projectName: PropTypes.string,
  projectDecription: PropTypes.string,
  projectImage: PropTypes.string,
  projectYear: PropTypes.string,
};

export default ProjectHero;
// A rails app for managing your finances