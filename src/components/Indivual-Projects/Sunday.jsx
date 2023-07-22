import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const Sunday = () => {
  const sunday = projectData[3];

  return (
    <div>
      <ProjectTemplate
        projectName={sunday.projectName}
        projectDescription={sunday.projectDescription}
        projectImage={sunday.projectImage}
        projectYear={sunday.projectYear}
        urlExtension={sunday.urlExtension}
        projectGitHub={sunday.projectGitHub}
        projectWebsite={sunday.projectWebsite}
        miniIntro={sunday.miniIntro}
        builtFor={sunday.builtFor}
        projectSummaryOne={sunday.projectSummaryOne}
        projectSummaryTwo={sunday.projectSummaryTwo}
        firstCarouselImage={sunday.firstCarouselImage}
        secondCarouselImage={sunday.secondCarouselImage}
        thirdCarouselImage={sunday.thirdCarouselImage}
        nextProjectName={sunday.nextProjectName}
        route={sunday.route}
        backgroundColor={sunday.backgroundColor}
        viewProject={sunday.viewProject}
      />
    </div>
  );
};

export default Sunday;
