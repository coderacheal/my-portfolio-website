import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const Foretell = () => {
  const foretell = projectData[4];

  return (
    <div>
      <ProjectTemplate
        projectName={foretell.projectName}
        projectDescription={foretell.projectDescription}
        projectImage={foretell.projectImage}
        projectYear={foretell.projectYear}
        urlExtension={foretell.urlExtension}
        projectGitHub={foretell.projectGitHub}
        projectWebsite={foretell.projectWebsite}
        miniIntro={foretell.miniIntro}
        builtFor={foretell.builtFor}
        projectSummaryOne={foretell.projectSummaryOne}
        projectSummaryTwo={foretell.projectSummaryTwo}
        firstCarouselImage={foretell.firstCarouselImage}
        secondCarouselImage={foretell.secondCarouselImage}
        thirdCarouselImage={foretell.thirdCarouselImage}
        nextProjectName={foretell.nextProjectName}
        route={foretell.route}
        backgroundColor={foretell.backgroundColor}
        viewProject={foretell.viewProject}
        summaryImage={foretell.summaryImage}
        backgroundImage={foretell.backgroundImage}
        viewProjectTextColor={foretell.viewProjectTextColor}
      />
    </div>
  );
};

export default Foretell;
