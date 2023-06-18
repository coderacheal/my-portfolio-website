import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import headshot from '../../assets/headshot.jpg';

const AboutMe = () => {
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5, triggerOnce: true, // Threshold for element 1
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5, triggerOnce: true, // Threshold for element 2
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
      <section className="about-me-section">
        <div ref={ref1}>
          <h1 className="about-me" ref={element1Ref} style={{ opacity: 0, transform: 'translateY(-50px)' }}>Hi there!</h1>
        </div>
        <div ref={ref2} className="my-skills-div">
          <p
            className="my-skills"
            ref={element2Ref}
            style={{ opacity: 0, transform: 'translateY(-0px)' }}
          >
            I&lsquo;m a full stack developer with a background in data science and machine learning,
            who fell in love with web development.
          </p>
        </div>
        <div className="professional-photo-and-text">
          <div className="headshot-div">
            <img className="headshot" src={headshot} alt="headshot" />
          </div>
          <div className="more-about-me-div">
            <p className="more-about-me">
              MY CREATIVITY LIES IN CREATING SLEEK INTERACTIVE WEBSITES THAT LEVERAGE ARTIFICIAL
              INTELLIGENCE. I LOVE DATA AS MUCH AS THE CODE. I BUILD ACCESSIBLE AND HELPFUL
              APPLICATIONS FOR MY COMMUNITY
              {' '}
            </p>
            <p className="more-about-me">
              LATELY, I&lsquo;VE BEEN DIVING INTO THE FASCINATING REALM OF BLOCKCHAIN,
              EXPLORING ITS POTENTIAL APPLICATIONS. MY AIM IS TO MERGE CUTTING-EDGE TECH WITH
              USER-FRIENDLY EXPERIENCES, ALWAYS SEEKING NEW CHALLENGES AND REFINING MY SKILLS.
              {' '}
            </p>
            <p className="more-about-me">
              OH, AND DID I MENTION?
              {' '}
              I&lsquo;M ALSO LEARNING TO PLAY THE VIOLIN TRYING TO CREATE BEAUTIFUL MELODIES
              IN MY SPARE TIME.
              {' '}
            </p>
            .
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
