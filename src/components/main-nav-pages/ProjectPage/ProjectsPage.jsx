import React, { useState } from 'react';
import projects from '../../../styles/projects.module.css';
import Header from '../../Home-page/Header';
import ProjectImageAndInfo from './ProjectImageAndInfo';
import ProjectList from './ProjectList';

const ProjectsPage = () => {
  const [divVisibility, setVisibility] = useState(true);
  const [displayText, setDisplayText] = useState('LIST VIEW');

  const handleProjectVisibility = () => {
    setVisibility(!divVisibility);
  };

  const handleTextChange = () => {
    setDisplayText((currentText) => {
      if (currentText === 'LIST VIEW') {
        return 'IMAGE VIEW';
      }
      return 'LIST VIEW';
    });
  };

  return (
    <div className={projects.ProjectDiv}>
      <Header />
      <div>
        {divVisibility ? (<ProjectImageAndInfo />) : (<ProjectList />)}
      </div>
      <div className={projects.projectsFooter}>
        <p>PROFESSIONAL PORTFOLIO</p>
        {/* eslint-disable jsx-a11y/click-events-have-key-events */}
        {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
        <p
          className={projects.listView}
          onClick={() => {
            handleProjectVisibility();
            handleTextChange();
          }}
        >
          {' '}
          {displayText}
        </p>
        <p>&copy;2023</p>
      </div>
    </div>
  );
};

export default ProjectsPage;
