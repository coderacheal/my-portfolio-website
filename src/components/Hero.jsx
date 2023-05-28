import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import Socials from './Socials';

const Hero = () => {
  const textRef = useRef(null);
  const { ref, inView } = useInView({
    // triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Set the threshold for when the element is considered in view
  });

  useEffect(() => {
    if (inView) {
      gsap.to(textRef.current, {
        opacity: 1, y: 0, duration: 1, delay: 0.5,
      });
    } else {
      gsap.to(textRef.current, { opacity: 0, y: -50, duration: 1 });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <section className="intro-section">
        <div className="my-case-study-intro">
          <div className="navigate-numbers">
            <p className="navigate-numbers-each">01</p>
            <p className="navigate-numbers-each">02</p>
            <p className="navigate-numbers-each">03</p>
            <p className="navigate-numbers-each">04</p>
          </div>
          <div className="navigate">
            <p className="eachNavigate">PROJECTS</p>
            <p className="eachNavigate">AI & ML</p>
            <p className="eachNavigate">RESUME</p>
            <p className="eachNavigate">SAY HI!</p>
          </div>
        </div>
        <div className="name-job-div">
          <p className="name animated-text firstname" ref={textRef} style={{ opacity: 0, transform: 'translateY(-50px)', color: 'white' }}>RACHEAL</p>
          <p className="name surname animated-text" ref={textRef} style={{ opacity: 0, transform: 'translateY(-50px)', color: 'white' }}>APPIAH-KUBI</p>
          {/* <p className="name surname animated-text">KUBI</p> */}
          <p className="tagline">Remote full stack developer</p>
        </div>
        <Socials />
      </section>
    </div>
  );
};

export default Hero;
