import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Home-page/Header';
import ViewProject from './ViewProject';
import ProjectHero from './ProjectHero';
import ProjectSummary from './ProjectSummary';
import NextProject from './NextProject';
import Footer from '../../Home-page/Footer';
import ProjectCarousel from './ProjectCarousel';

const ProjectTemplate = (props) => {
  const {
    projectName,
    projectDecription,
    projectImage,
    projectYear,
    projectGitHub,
    projectWebsite,
    miniIntro,
    projectSummaryOne,
    projectSummaryTwo,
    builtFor,
    firstCarouselImage,
    secondCarouselImage,
    thirdCarouselImage,
    nextProjectName,
    route,
    backgroundColor,
    viewProject,
  } = props;

  return (
    <div>
      <Header />
      <ProjectHero
        projectName={projectName}
        projectDecription={projectDecription}
        projectImage={projectImage}
        projectYear={projectYear}
      />
      <ViewProject
        projectGitHub={projectGitHub}
        projectWebsite={projectWebsite}
        miniIntro={miniIntro}
      />
      <ProjectSummary
        projectSummaryOne={projectSummaryOne}
        projectSummaryTwo={projectSummaryTwo}
        builtFor={builtFor}
      />
      <ProjectCarousel
        firstCarouselImage={firstCarouselImage}
        secondCarouselImage={secondCarouselImage}
        thirdCarouselImage={thirdCarouselImage}
      />
      <NextProject
        nextProjectName={nextProjectName}
        route={route}
        backgroundColor={backgroundColor}
        viewProject={viewProject}
      />
      <Footer />
    </div>
  );
};

ProjectTemplate.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDecription: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectYear: PropTypes.number.isRequired,
  projectGitHub: PropTypes.string.isRequired,
  projectWebsite: PropTypes.string.isRequired,
  miniIntro: PropTypes.string.isRequired,
  projectSummaryOne: PropTypes.string.isRequired,
  projectSummaryTwo: PropTypes.string.isRequired,
  builtFor: PropTypes.string.isRequired,
  firstCarouselImage: PropTypes.string.isRequired,
  secondCarouselImage: PropTypes.string.isRequired,
  thirdCarouselImage: PropTypes.string.isRequired,
  nextProjectName: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  viewProject: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default ProjectTemplate;
