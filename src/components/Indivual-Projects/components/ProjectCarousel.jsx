import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import newImage from '../../../assets/budget.png';
import carousel from '../../../styles/projects/carousel.module.css';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

const ProjectCarousel = ({firstProject, secondProject, thirdProject}) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const carouselRef = useRef(null);

  const handleImageClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <Carousel
      selectedItem={selectedItem}
      onChange={setSelectedItem}
      showThumbs={false}
      showStatus={false}
      ref={carouselRef}
      className={carousel.carouselDiv}
    >
      <div onClick={() => handleImageClick(1)}>
        <img src={firstProject} alt="First Project" className={carousel.oneProjectImage} />
      </div>
      <div onClick={() => handleImageClick(2)}>
        <img src={secondProject} alt="Second Project" className={carousel.oneProjectImage} />
      </div>
      <div onClick={() => handleImageClick(0)}>
        <img src={thirdProject} alt="Third Project" className={carousel.oneProjectImage} />
      </div>
    </Carousel>
  );
};


ProjectCarousel.propTypes = {
  firstProject: PropTypes.string,
  secondProject: PropTypes.string,
  thirdProject: PropTypes.string,
};

export default ProjectCarousel;
