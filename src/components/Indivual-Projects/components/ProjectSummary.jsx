import React from 'react';
import PropTypes from 'prop-types';
import budget from '../../../assets/budget.png';
import summary from '../../../styles/projects/project-summary.module.css';

const ProjectSummary = ({ projectSummaryOne, projectSummaryTwo, builtFor }) => (
  <div>
    <h3>Project Summary</h3>
    <div className={summary.descriptionAndImage}>
      <div>
        <p className={summary.builtFor}>{builtFor}</p>
        {/* <p className={summary.builtFor}>For all the personal finance lovers</p> */}
        <p className={summary.description}>{projectSummaryOne}</p>
        <p className={summary.description}>{projectSummaryTwo}</p>
      </div>
      <div>
        <img src={budget} alt="Project" className={summary.projectImage} />
      </div>
    </div>
    <div />
  </div>
);

ProjectSummary.propTypes = {
  projectSummaryOne: PropTypes.string.isRequired,
  projectSummaryTwo: PropTypes.string.isRequired,
  builtFor: PropTypes.string.isRequired,

};

export default ProjectSummary;
