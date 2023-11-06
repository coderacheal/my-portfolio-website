import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const Sunday = () => {
  const sunday = projectData[0];

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
        summaryImage={sunday.summaryImage}
        backgroundImage={sunday.backgroundImage}
        color={sunday.color}
        height={sunday.summaryImageHeight}
        width={sunday.summaryImageWidth}
        role={sunday.role}
        viewProjectbackgroundColor={sunday.viewProjectbackgroundColor}
        viewProjectTextColor={sunday.viewProjectTextColor}
      />
    </div>
  );
};

export default Sunday;
