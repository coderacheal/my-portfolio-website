import React from 'react';
import style from '../../../styles/projects/project-header.module.css';

const ProjectHeader = () => (
  <header className={style.ProjectHeader}>
    <nav className={style.navBar}>
      <h1 className={style.logo}>Racheal</h1>
      <ul className={style.navList}>
        <li className={style.navItem}>Home</li>
        <li className={style.navItem}>About</li>
        <li className={style.navItem}>Contact</li>
      </ul>
    </nav>
  </header>
);

export default ProjectHeader;
