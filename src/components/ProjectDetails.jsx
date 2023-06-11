import React, { useState } from 'react';
import projects from '../styles/projects.module.css';
import Header from './Header';
import project2 from '../assets/brooke-lark-V4MBq8kue3U-unsplash.jpg';

const ProjectDetails = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [divVisibility, setVisibility] = useState(true);
  const [displayText, setDisplayText] = useState('LIST VIEW');

  const handleScroll = (e) => {
    if (e.deltaY !== 0 && e.deltaX === 0) {
      // Scroll horizontally only if deltaY (vertical scroll) is zero
      e.preventDefault();
      const container = e.currentTarget;
      setScrollLeft(scrollLeft + e.deltaY);
      container.scrollLeft = scrollLeft + e.deltaY;
    }
  };

  const handleClick = () => {
    setVisibility(!divVisibility);
  };

  const handleTextChange = () => {
    setDisplayText((currentText) => {
      if (currentText === 'LIST VIEW') {
        return 'IMAGE VIEW';
      }
      return 'LIST VIEW';
    });
  };

  return (
    <div className={projects.ProjectDiv}>
      <Header />
      <div>
        { divVisibility ? (
          <div className={projects.allProjectsImages} onWheel={handleScroll}>
            <div>
              <img src={project2} alt="" className={projects.projectImage} />
            </div>
            <div>
              <img src={project2} alt="" className={projects.projectImage} />
            </div>
            <div>
              <img src={project2} alt="" className={projects.projectImage} />
            </div>
            <div>
              <img src={project2} alt="" className={projects.projectImage} />
            </div>
            <div>
              <img src={project2} alt="" className={projects.projectImage} />
            </div>
          </div>
        ) : (
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
        )}
      </div>
      <div className={projects.projectsFooter}>
        <p>PROFESSIONAL PORTFOLIO</p>
        <p
          className={projects.listView}
          onClick={() => { handleClick(); handleTextChange(); }}
        >
          {displayText}
        </p>
        <p>&copy;2023</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
