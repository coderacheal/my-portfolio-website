import React, { useEffect, useState } from 'react';

const HelloHero = () => { 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = window.innerHeight * 0.75; // Adjust the threshold as needed

      if (scrollTop > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section className="hero-intro">
      <div className="name-job-div">
        <div>
          <p className='hello'>Hello</p>
          <div className='about-my-portfolio'>
            <p className='tiny-about-me'> /About me </p>
            <p className='description'>I am RACHEAL, I create</p>
            <p className='description'>interactive websites that</p>
            <p className='description'>leverage AI and ML</p>
            <p> <u>Full Stack</u> Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default HelloHero
