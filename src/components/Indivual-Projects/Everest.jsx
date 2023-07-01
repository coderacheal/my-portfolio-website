import React from 'react';
// import ProjectHeader from './components/ProjectHeader';
import ProjectFooter from './components/ProjectFooter';
import NextProject from './components/NextProject';
import ProjectHero from './components/ProjectHero';
import Header from '../Home-page/Header';
import ViewProject from './components/ViewProject';

const Everest = () => {
  const nextProjectName = 'Project Waterfall';

  return (
    <div>
      <Header />
      {/* <ProjectHeader /> */}
      <ProjectHero />
      <ViewProject />
      <NextProject route="/projects/waterfall" nextProjectName={nextProjectName} />
      <ProjectFooter />
    </div>
  );
};

export default Everest;
