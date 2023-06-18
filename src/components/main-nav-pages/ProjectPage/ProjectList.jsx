import React from 'react';
import projects from '../../../styles/projects.module.css';

const ProjectList = () => (
  <div>
    <div className={projects.projectListView}>
      <p>
        {' '}
        <span>01</span>
        {' '}
        IT&apos;S SUNDAY
      </p>
      <p>
        {' '}
        <span>02</span>
        {' '}
        EVEREST
      </p>
      <p>
        {' '}
        <span>03</span>
        {' '}
        WATERFALL
      </p>
      <p>
        {' '}
        <span>04</span>
        {' '}
        SCHOOL X
      </p>
      <p>
        {' '}
        <span>05</span>
        {' '}
        FORETELL
      </p>
    </div>
  </div>
);

export default ProjectList;
