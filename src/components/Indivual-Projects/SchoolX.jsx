import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const SchoolX = () => {
  const schoolx = projectData[2];

  return (
    <div>
      <ProjectTemplate
        projectName={schoolx.projectName}
        projectDescription={schoolx.projectDescription}
        projectImage={schoolx.projectImage}
        projectYear={schoolx.projectYear}
        urlExtension={schoolx.urlExtension}
        projectGitHub={schoolx.projectGitHub}
        projectWebsite={schoolx.projectWebsite}
        miniIntro={schoolx.miniIntro}
        builtFor={schoolx.builtFor}
        projectSummaryOne={schoolx.projectSummaryOne}
        projectSummaryTwo={schoolx.projectSummaryTwo}
        firstCarouselImage={schoolx.firstCarouselImage}
        secondCarouselImage={schoolx.secondCarouselImage}
        thirdCarouselImage={schoolx.thirdCarouselImage}
        nextProjectName={schoolx.nextProjectName}
        route={schoolx.route}
        backgroundColor={schoolx.backgroundColor}
        viewProject={schoolx.viewProject}
        summaryImage={schoolx.summaryImage}
        backgroundImage={schoolx.backgroundImage}
        color={schoolx.color}
        height={schoolx.summaryImageHeight}
        width={schoolx.summaryImageWidth}
        role={schoolx.role}
        viewProjectbackgroundColor={schoolx.viewProjectbackgroundColor}
      />
    </div>
  );
};

export default SchoolX;
