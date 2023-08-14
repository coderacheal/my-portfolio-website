import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
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
    urlExtension,
    projectDescription,
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
    backgroundImage,
    color,
    summaryImage,
    height,
    width,
    role,
    viewProjectbackgroundColor,
  } = props;

  return (
    <div>
      <Header />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5 }}
      >
        <ProjectHero
          projectName={projectName}
          projectDescription={projectDescription}
          projectImage={projectImage}
          projectYear={projectYear}
          backgroundImage={backgroundImage}
          color={color}
          role={role}
        />
        <ViewProject
          urlExtension={urlExtension}
          projectGitHub={projectGitHub}
          projectWebsite={projectWebsite}
          miniIntro={miniIntro}
          viewProjectbackgroundColor={viewProjectbackgroundColor}
        />
        <ProjectSummary
          projectSummaryOne={projectSummaryOne}
          projectSummaryTwo={projectSummaryTwo}
          builtFor={builtFor}
          summaryImage={summaryImage}
          height={height}
          width={width}
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
      </motion.div>
    </div>
  );
};

ProjectTemplate.propTypes = {
  projectName: PropTypes.string.isRequired,
  urlExtension: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
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
  backgroundImage: PropTypes.string.isRequired,
  summaryImage: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  viewProjectbackgroundColor: PropTypes.string.isRequired,
};

export default ProjectTemplate;
