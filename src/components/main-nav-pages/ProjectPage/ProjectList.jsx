import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../../styles/projects.module.css';
import everest from '../../../assets/everest-mobile.png'
import sage from '../../../assets/sage-hero.png';
import schoolx from '../../../assets/schoolxHero.jpg';
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
    1: everest,
    2: sage,
    3: schoolx,
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
    >
      <div className={projects.align}>
        {projectData.map((each) => (
          <div key={each.id}>
            <Link to={`/work/${each.urlExtension}`}>
              onMouseEnter
              {/* {() => handleMouseOverProject(each.id)} */}
              <p className={projects.linkToProject}>
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
