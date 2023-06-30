import React from 'react';
import ProjectHeader from './components/ProjectHeader';
import ProjectFooter from './components/ProjectFooter';
import NextProject from '../main-nav-pages/ProjectPage/NextProject';

const Everest = () => {
  const nextProjectName = 'Project Waterfall';

  return (
    <div className="each-project-page">
      <ProjectHeader />
      <NextProject nextProjectName={nextProjectName} backgroundColor='black'/>
      <ProjectFooter />
  </div>
  )
}
  
export default Everest;
