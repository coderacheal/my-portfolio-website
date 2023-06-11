import React, { useState } from 'react';
import project from '../assets/food.jpg';
import SeeMoreMouse from './SeeMoreMouse';

const Cards = () => {
  const [showSeeMoreMouse, setShowSeeMoreMouse] = useState(false);

  const handleSeeMoreMouseEnter = () => {
    setShowSeeMoreMouse(true);
  };

  const handleSeeMoreMouseLeave = () => {
    setShowSeeMoreMouse(false);
  };

  return (
    <div>
      <div className='each-project'>
        <div className='project-details' >
          <button
          className='projectTitle underline-reveal'
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
          >IT&apos;S SUNDAY</button>
          <p className='project-brief'>A CHAT APP EMBEDDED WITH A DEEP LEARNING MODEL 
          TO PREDICT THE SENTIMENT OF YOUR TEXT BEFORE YOU SHOOT YOURSELF IN THE FOOT. <u>AGAIN</u> </p>
        </div>
        <div className='project-image-div' onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}>
        </div>
      </div>
      <div className='each-project'>
        <div className='project-image-div' onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}>
        </div>
        <div className='project-details' >
          <button
          className='projectTitle underline-reveal'
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
          >EVEREST</button>
          <p className='project-brief'>A CHAT APP EMBEDDED WITH A DEEP LEARNING MODEL</p>
        </div>
      </div>
      <div className='each-project'>
        <div className='project-details' >
          <button
          className='projectTitle underline-reveal' 
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}
          >WATER FALL</button>
          <p className='project-brief'>A CHAT APP EMBEDDED WITH A DEEP LEARNING MODEL</p>
        </div>
        <div className='project-image-div' 
          onMouseEnter={handleSeeMoreMouseEnter}
          onMouseLeave={handleSeeMoreMouseLeave}>
        </div>
      </div>
      <p className='legacy-projects'
        onMouseEnter={handleSeeMoreMouseEnter}
        onMouseLeave={handleSeeMoreMouseLeave}
        >SEE LEGACY DATA PROJECTS</p>
      {showSeeMoreMouse && <SeeMoreMouse />}
    </div>
  );
};

export default Cards;

