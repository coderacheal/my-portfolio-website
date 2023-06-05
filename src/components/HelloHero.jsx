import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const HelloHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFirstElement, setShowFirstElement] = useState(true);
  const [showSecondElement, setShowSecondElement] = useState(false);

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


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstElement(false);
      setShowSecondElement(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-intro">
      <div className="name-job-div">
        <div>
          {showFirstElement && <p className={`hello fade-in ${isVisible ? 'visible' : ''}`}>Hello</p>}
          {showSecondElement && (
          <div className="about-my-portfolio">
            <p className="tiny-about-me"> &lt; /About me/ &gt; </p>
            <p className="description">I am RACHEAL, I create</p>
            <p className="description">interactive websites that</p>
            <p className="description">leverage AI and ML</p>
            <p>
              {' '}
              <u>Full Stack</u>
              {' '}
              Developer
            </p>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HelloHero;
