import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const Everest = () => {
  const everest = projectData[1];

  return (
    <div>
      <ProjectTemplate
        projectName={everest.projectName}
        projectDescription={everest.projectDescription}
        projectImage={everest.projectImage}
        projectYear={everest.projectYear}
        projectGitHub={everest.projectGitHub}
        projectWebsite={everest.projectWebsite}
        miniIntro={everest.miniIntro}
        builtFor={everest.builtFor}
        projectSummaryOne={everest.projectSummaryOne}
        projectSummaryTwo={everest.projectSummaryTwo}
        firstCarouselImage={everest.firstCarouselImage}
        secondCarouselImage={everest.secondCarouselImage}
        thirdCarouselImage={everest.thirdCarouselImage}
        nextProjectName={everest.nextProjectName}
        route={everest.route}
        backgroundColor={everest.backgroundColor}
        viewProject={everest.viewProject}
      />
    </div>
  );
};

export default Everest;
