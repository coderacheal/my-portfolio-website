import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import Socials from './Socials';

const Hero = () => {
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      gsap.to(element1Ref.current, {
        opacity: 1, y: 0, duration: 1, delay: 0.5,
      });
    } else {
      gsap.to(element1Ref.current, { opacity: 0, y: -50, duration: 1 });
    }

    if (inView2) {
      gsap.to(element2Ref.current, {
        opacity: 1, y: 0, duration: 3, delay: 0.5,
      });
    } else {
      gsap.to(element2Ref.current, { opacity: 0, y: -50, duration: 1 });
    }
  }, [inView1, inView2]);

  return (
    <div>
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
          <div ref={ref1}>
            <p className="name animated-text firstname" ref={element1Ref} style={{ opacity: 0, transform: 'translateY(-50px)', color: 'white' }}>RACHEAL</p>
          </div>
          <div ref={ref2}>
            <p className="name surname animated-text" ref={element2Ref} style={{ opacity: 0, transform: 'translateY(-50px)', color: 'white' }}>APPIAH-KUBI</p>
          </div>
          {/* <p className="name surname animated-text">KUBI</p> */}
          <p className="tagline">Remote full stack developer</p>
        </div>
        <Socials />
      </section>
    </div>
  );
};

export default Hero;
