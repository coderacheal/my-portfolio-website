import React from 'react';
import ProjectTemplate from './components/ProjectTemplate';
import projectData from '../main-nav-pages/ProjectPage/Data/projectData';

const SchoolX = () => {
  const schoolx = projectData[3];

  return (
    <div>
      <ProjectTemplate
        projectName={schoolx.projectName}
        projectDecription={schoolx.projectDecription}
        projectImage={schoolx.projectImage}
        projectYear={schoolx.projectYear}
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
      />
    </div>
  );
};

export default SchoolX;
