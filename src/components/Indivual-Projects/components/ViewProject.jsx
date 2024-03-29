import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import view from '../../../styles/projects/view-project.module.css';

const ViewProject = ({
  projectGitHub, projectWebsite, miniIntro, urlExtension, viewProjectbackgroundColor,
  viewProjectTextColor,
}) => {
  const backgroundColor = {
    backgroundColor: viewProjectbackgroundColor,
  };

  return (
    <div className={view.viewProjectsection} style={backgroundColor}>
      <p className={view.projectBackground}>{urlExtension}</p>
      <div className={view.introDiv}>
        <h1 className={view.introRibbon} style={{ color: viewProjectTextColor }}>Introduction</h1>
        <p style={{ color: viewProjectTextColor }}>{miniIntro}</p>
        <div className={view.viewCodeWebsite}>
          <a href={projectGitHub} className={view.viewCode} target="_blank" rel="noreferrer">VIEW CODE</a>
          <a href={projectWebsite} className={view.viewCode} target="_blank" rel="noreferrer">LIVE SITE</a>
        </div>
      </div>
    </div>
  );
};

ViewProject.propTypes = {
  urlExtension: PropTypes.string.isRequired,
  projectGitHub: PropTypes.string.isRequired,
  projectWebsite: PropTypes.string.isRequired,
  miniIntro: PropTypes.string.isRequired,
  viewProjectbackgroundColor: PropTypes.string.isRequired,
  viewProjectTextColor: PropTypes.string.isRequired,
};

export default ViewProject;
