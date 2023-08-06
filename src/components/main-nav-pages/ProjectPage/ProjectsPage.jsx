import { React, useState} from 'react';
import { motion } from 'framer-motion';
import projects from '../../../styles/projects.module.css';
import Header from '../../Home-page/Header';
import ProjectImageAndInfo from './ProjectImageAndInfo';
import ProjectList from './ProjectList';
// import { useState } from 'react';
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <ProjectList />
      </motion.div>
      <div>
        {divVisibility ? (<ProjectImageAndInfo />) : (<ProjectList />)}
        <ProjectList />
      </div>
      <div className={projects.projectsFooter}>
        <p>PROFESSIONAL PORTFOLIO</p>
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
        <p>Portfolio &copy;2023</p>
      </div>
    </div>
  );
};
export default ProjectsPage;
