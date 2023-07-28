import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const Sage = () => {
  const sage = projectData[1];

  return (
    <div>
      <ProjectTemplate
        projectName={sage.projectName}
        projectDescription={sage.projectDescription}
        projectImage={sage.projectImage}
        projectYear={sage.projectYear}
        urlExtension={sage.urlExtension}
        projectGitHub={sage.projectGitHub}
        projectWebsite={sage.projectWebsite}
        miniIntro={sage.miniIntro}
        builtFor={sage.builtFor}
        projectSummaryOne={sage.projectSummaryOne}
        projectSummaryTwo={sage.projectSummaryTwo}
        firstCarouselImage={sage.firstCarouselImage}
        secondCarouselImage={sage.secondCarouselImage}
        thirdCarouselImage={sage.thirdCarouselImage}
        nextProjectName={sage.nextProjectName}
        route={sage.route}
        backgroundColor={sage.backgroundColor}
        viewProject={sage.viewProject}
        summaryImage={sage.summaryImage}
        backgroundImage={sage.backgroundImage}
        color={sage.color}
      />
    </div>
  );
};

export default Sage;
