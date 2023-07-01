import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import newImage from '../../../assets/budget.png';
import carousel from '../../../styles/projects/carousel.module.css'

const ProjectCarousel = () => {
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
      // infiniteLoop={true}
      className={carousel.carouselDiv}
    >
      <div onClick={() => handleImageClick(1)}>
        <img src={newImage} alt="Image 1"  className={carousel.oneProjectImage}/>
      </div>
      <div onClick={() => handleImageClick(2)}>
        <img src={newImage} alt="Image 2" className={carousel.oneProjectImage}/>
      </div>
      <div onClick={() => handleImageClick(0)}>
        <img src={newImage} alt="Image 3" className={carousel.oneProjectImage}/>
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;



