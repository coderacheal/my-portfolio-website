import React from 'react';
import projectImage from '../../../assets/headshot.jpg';
// import projectImage from '../../../assets/finance-app.png';
import hero from '../../../styles/projects/projectHero.module.css';

const ProjectHero = () => (
  <div className={hero.projectHero}>
    <div className={hero.mainHeroSection}>
      <div>
        <p className={hero.boldProjectName}>Project Everest</p>
        <p className={hero.shortProjectDescription}>A rails app for managing your finances</p>
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
        <p>2023</p>
      </div>
    </div>
  </div>
);

export default ProjectHero;
