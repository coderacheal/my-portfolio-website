import React from 'react';
import ProjectHeader from './components/ProjectHeader';
import ProjectFooter from './components/ProjectFooter';
import NextProject from './components/NextProject';

const Everest = () => {
  const nextProjectName = 'Project Waterfall';

  return (
    <div className="each-project-page">
      <ProjectHeader />
      <NextProject route='/projects/waterfall' nextProjectName={nextProjectName}/>
      <ProjectFooter />
    </div>
  );
};

export default Everest;
