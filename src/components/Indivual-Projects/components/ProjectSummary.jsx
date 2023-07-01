import React from 'react';
import budget from '../../../assets/budget.png';
import summary from '../../../styles/projects/project-summary.module.css';

const ProjectSummary = () => (
  <div>
    <h3>Project Summary</h3>
    <div className={summary.descriptionAndImage}>
      <div>
        <p className={summary.builtFor}>For all the personal finance lovers</p>
        <p className={summary.description}>
          Everest is built with security and
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptate numquam repellendus quas quisquam, aspernatur commodi facere,
          labore minima maxime explicabo, iste reiciendis quia inventore saepe delectus
          laudantium voluptatibus tempore nemo.
        </p>
        <p className={summary.description}>
          Everest is built with security and
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptate numquam repellendus quas quisquam, aspernatur commodi facere,
          labore minima maxime explicabo, iste reiciendis quia inventore saepe delectus
          laudantium voluptatibus tempore nemo.
        </p>
      </div>
      <div>
        <img src={budget} alt="Project" className={summary.projectImage} />
      </div>
    </div>
    <div />
  </div>
);

export default ProjectSummary;
