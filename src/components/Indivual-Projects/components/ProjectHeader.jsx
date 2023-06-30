import React from 'react';
// import '../../../styles/projects/shared.css';
import style from '../../../styles/projects/shared.css';

const ProjectHeader = () => (
  <header className={style.ProjectHeader}>
    <h1 className="logo">My Website</h1>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  </header>
);

export default ProjectHeader;
