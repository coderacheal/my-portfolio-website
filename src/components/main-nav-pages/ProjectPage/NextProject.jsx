import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NextProject = ({ nextProjectName, backgroundColor, route }) => {
  const containerStyle = {
    backgroundColor,
  };

  return (
    <Link to={route}>
      <div className="view-latest-project-div" style={containerStyle}>
        <div className="view-latest-project">
          <div className="centered-content">
            <p className="view-next-ribbon">View Latest Project</p>
            <p className="nextProjectName">{nextProjectName}</p>
          </div>
          <div>
            <span className="long-arrow">&rarr;</span>
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
};

NextProject.defaultProps = {
  backgroundColor: 'black',
};

export default NextProject;
