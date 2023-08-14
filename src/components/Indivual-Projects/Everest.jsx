import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';
// import imgg from '../../assets/bubbles.png';

const Everest = () => {
  const everest = projectData[0];

  return (
    <div>
      <ProjectTemplate
        projectName={everest.projectName}
        projectDescription={everest.projectDescription}
        projectImage={everest.projectImage}
        projectYear={everest.projectYear}
        urlExtension={everest.urlExtension}
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
        summaryImage={everest.summaryImage}
        backgroundImage={everest.backgroundImage}
        color={everest.color}
        height={everest.summaryImageHeight}
        width={everest.summaryImageWidth}
        role={everest.role}
        viewProjectbackgroundColor={everest.viewProjectbackgroundColor}
      />
    </div>
  );
};

export default Everest;
