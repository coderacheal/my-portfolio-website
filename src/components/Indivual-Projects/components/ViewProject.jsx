import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import view from '../../../styles/projects/view-project.module.css';

const ViewProject = ({ projectGitHub, projectWebsite, miniIntro }) => (
  <div className={view.viewProjectsection}>
    <p className={view.projectBackground}>Everest</p>
    <div className={view.introDiv}>
      <h1>Introduction</h1>
      <p>{miniIntro}</p>
      <div className={view.viewCodeWebsite}>
        <Link to={projectGitHub} className={view.viewCode}>VIEW CODE</Link>
        <Link to={projectWebsite} className={view.viewCode}>VIEW WEBSITE</Link>
      </div>
    </div>
  </div>
);

ViewProject.propTypes = {
  projectGitHub: PropTypes.string.isRequired,
  projectWebsite: PropTypes.string.isRequired,
  miniIntro: PropTypes.string.isRequired,
};

// A finance app that enables you to track your expenses based on the type of expenses
// you define. Complete with authentication, it helps you stay on top of the dollar.

export default ViewProject;
