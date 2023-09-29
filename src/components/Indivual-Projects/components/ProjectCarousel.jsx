import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import newImage from '../../../assets/budget.png';
import PropTypes from 'prop-types';
// import carousel from '../../../styles/projects/carousel.module.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from './CarouselArrows';

import projects from '../../main-nav-pages/ProjectPage/Data/projectData';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// firstCarouselImage, secondCarouselImage, thirdCarouselImage ,
const ProjectCarousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  // const carouselRef = useRef(null);

  // const handleImageClick = (index) => {
  //   setSelectedItem(index);
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="sliderDiv">
      <Slider {...settings} className="slider">
        {projects.map((project) => (
          <div>
            {project.carouselImages.map((image, index) => (
              <img key={index} src={image} alt={`carousel image ${index}`} />
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

ProjectCarousel.propTypes = {
  carouselImages: PropTypes.string.isRequired,
  // firstCarouselImage: PropTypes.string.isRequired,
  // secondCarouselImage: PropTypes.string.isRequired,
  // thirdCarouselImage: PropTypes.string.isRequired,
};

export default ProjectCarousel;
