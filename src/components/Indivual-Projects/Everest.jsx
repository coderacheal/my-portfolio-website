import React from 'react';
import ProjectFooter from './components/ProjectFooter';
import NextProject from './components/NextProject';
import ProjectHero from './components/ProjectHero';
import Header from '../Home-page/Header';
import ViewProject from './components/ViewProject';
import ProjectSummary from './components/ProjectSummary';
import ProjectCarousel from './components/ProjectCarousel';

const Everest = () => {
  const nextProjectName = 'Project Waterfall';
  const projectGitHub = 'https://github.com/coderacheal/everest';
  const projectWebsite = '/';

  return (
    <div>
      <Header />
      <ProjectHero />
      <ViewProject projectGitHub={projectGitHub} projectWebsite={projectWebsite} />
      <ProjectSummary />
      <ProjectCarousel />
      <NextProject route="/projects/waterfall" nextProjectName={nextProjectName} />
      <ProjectFooter />
    </div>
  );
};

export default Everest;
