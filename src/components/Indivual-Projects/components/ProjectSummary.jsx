import React from 'react';
import PropTypes from 'prop-types';
import summary from '../../../styles/projects/project-summary.module.css';

const ProjectSummary = ({
  projectSummaryOne, projectSummaryTwo, builtFor, summaryImage, height, width,
}) => {
  const summaryStyles = {
    height,
    width,
  };

  return (
    <div className={summary.summaryDiv}>
      <h3>Project Summary</h3>
      <div className={summary.descriptionAndImage}>
        <div>
          <p className={summary.builtFor}>{builtFor}</p>
          <p className={summary.description}>{projectSummaryOne}</p>
          <p className={summary.description}>{projectSummaryTwo}</p>
        </div>
        <div>
          <img
            src={summaryImage}
            alt="Project"
            className={summary.projectSummaryImage}
            style={summaryStyles}
          />
        </div>

      </div>
      <p className={summary.carouselRibbon}>More from this project</p>
    </div>
  );
};

ProjectSummary.propTypes = {
  projectSummaryOne: PropTypes.string.isRequired,
  projectSummaryTwo: PropTypes.string.isRequired,
  builtFor: PropTypes.string.isRequired,
  summaryImage: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,

};

export default ProjectSummary;
