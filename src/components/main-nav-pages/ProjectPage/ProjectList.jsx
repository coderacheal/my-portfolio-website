import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../../styles/projects.module.css';
import catsImage from '../../../assets/cats.jpg';
import brookeLarkImage from '../../../assets/brooke-lark-V4MBq8kue3U-unsplash.jpg';
import ericMartyImage from '../../../assets/eric-marty-MsVZcS1r_ng-unsplash.jpg';
import violinImage from '../../../assets/violin.png';
import projectData from './Data/projectData';

const ProjectList = () => {
  const [showImage, setShowImage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(0);

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseOverProject = (projectName) => {
    setHoveredProject(projectName);
  };

  const projectImages = {
    1: catsImage,
    2: brookeLarkImage,
    3: ericMartyImage,
    4: violinImage,
    5: brookeLarkImage,
  };

  const renderImage = () => {
    if (!showImage || !hoveredProject || !projectImages[hoveredProject]) {
      return null;
    }

    return (
      <div className={projects.followImageDiv}>
        <img
          src={projectImages[hoveredProject]}
          alt="Following Mouse"
          className={projects.followImage}
          style={{
            left: mousePosition.x - 250 / 2,
            top: mousePosition.y - 350 / 2,
          }}
        />
      </div>
    );
  };

  return (
    <div
      className={projects.projectListView}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {projectData.map((each) => (
          <div key={each.id}>
            <Link to={`/work/${each.urlExtension}`}>
              <p onMouseMove={handleMouseMove} onMouseEnter={() => handleMouseOverProject(each.id)}>
                <span>
                  0
                  {each.id}
                </span>
                {each.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
      {renderImage()}
    </div>
  );
};

export default ProjectList;
