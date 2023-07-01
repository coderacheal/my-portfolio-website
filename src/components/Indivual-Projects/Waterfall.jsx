import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const Waterfall = () => {
  const waterfall = projectData[2];

  return (
    <div>
      <ProjectTemplate
        projectName={waterfall.projectName}
        projectDescription={waterfall.projectDescription}
        projectImage={waterfall.projectImage}
        projectYear={waterfall.projectYear}
        projectGitHub={waterfall.projectGitHub}
        projectWebsite={waterfall.projectWebsite}
        miniIntro={waterfall.miniIntro}
        builtFor={waterfall.builtFor}
        projectSummaryOne={waterfall.projectSummaryOne}
        projectSummaryTwo={waterfall.projectSummaryTwo}
        firstCarouselImage={waterfall.firstCarouselImage}
        secondCarouselImage={waterfall.secondCarouselImage}
        thirdCarouselImage={waterfall.thirdCarouselImage}
        nextProjectName={waterfall.nextProjectName}
        route={waterfall.route}
        backgroundColor={waterfall.backgroundColor}
        viewProject={waterfall.viewProject}
      />
    </div>
  );
};

export default Waterfall;
