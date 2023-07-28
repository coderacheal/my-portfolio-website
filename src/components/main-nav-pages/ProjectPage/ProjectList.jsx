import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../../styles/projects.module.css';
// import everest from '../../../assets/Expense-created.png';
// import brookeLarkImage from '../../../assets/brooke-lark-V4MBq8kue3U-unsplash.jpg';
// import ericMartyImage from '../../../assets/eric-marty-MsVZcS1r_ng-unsplash.jpg';
// import violinImage from '../../../assets/violin.png';
import projectData from './Data/projectData';

const ProjectList = () => (
// const [showImage, setShowImage] = useState(false);
// const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// const [hoveredProject, setHoveredProject] = useState(0);

  // const handleMouseEnter = () => {
  //   setShowImage(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowImage(false);
  // };

  // const handleMouseMove = (event) => {
  //   setMousePosition({ x: event.clientX, y: event.clientY });
  // };

  // const handleMouseOverProject = (projectName) => {
  //   setHoveredProject(projectName);
  // };

  // const projectImages = {
  //   1: everest,
  //   2: brookeLarkImage,
  //   3: ericMartyImage,
  //   4: violinImage,
  //   5: brookeLarkImage,
  // };

  // const renderImage = () => {
  //   if (!showImage || !hoveredProject || !projectImages[hoveredProject]) {
  //     return null;
  //   }

  //   return (
  //     <div className={projects.followImageDiv}>
  //       <img
  //         src={projectImages[hoveredProject]}
  //         alt="Following Mouse"
  //         className={projects.followImage}
  //         style={{
  //           left: mousePosition.x - 250 / 2,
  //           top: mousePosition.y - 350 / 2,
  //         }}
  //       />
  //     </div>
  //   );
  // };

  <div
    className={projects.projectListView}
  >
    <div>
      {projectData.map((each) => (
        <div key={each.id} className={projects.linkToProject}>
          <Link to={`/work/${each.urlExtension}`}>
            {/* onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseOverProject(each.id)} */}
            <p>
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
    {/* {renderImage()} */}
  </div>
);
export default ProjectList;
