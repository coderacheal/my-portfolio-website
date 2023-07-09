import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import nextProject from '../../../styles/projects/nextProject.module.css';

const NextProject = ({
  nextProjectName, backgroundColor, route, viewProject,
}) => {
  const containerStyle = {
    backgroundColor,
  };

  return (
    <Link to={route}>
      <div className={nextProject.viewLatestProjectDiv} style={containerStyle}>
        <div className={nextProject.viewLatestProject}>
          <div className={nextProject.centeredContent}>
            <p className={nextProject.viewNextRibbon}>{viewProject}</p>
            <p className={nextProject.nextProjectName}>{nextProjectName}</p>
          </div>
          <div>
            <span className={nextProject.longArrow}>&rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

NextProject.propTypes = {
  nextProjectName: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  viewProject: PropTypes.string,
};

NextProject.defaultProps = {
  backgroundColor: 'black',
  viewProject: 'View Next Project',
};

export default NextProject;
