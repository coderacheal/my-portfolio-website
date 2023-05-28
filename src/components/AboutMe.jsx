import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const AboutMe = () => {
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5, // Threshold for element 1
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5, // Threshold for element 2
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
          <h1 className="about-me" ref={element1Ref} style={{ opacity: 0, transform: 'translateY(-50px)' }}>About me</h1>
        </div>
        <div ref={ref2} className="my-skills-div">
          <p className="my-skills" ref={element2Ref} style={{ opacity: 0, transform: 'translateY(-50px)' }}>Full Stack Developer with a love for ML & AI, Block Chain, Interactive Websites with React, and Cloud Computing. Learning to play the violin. </p>
        </div>
        {/* <div className="pubbles-div">
        <div className="awsBubble">AWS</div>
        <div className="mlBubble">ML</div>
        <div className="pythonBubble">Python</div>
        <div className="rubyBubble">Ruby</div>
        <div className="sqlBubble">SQL</div>
        <div className="javascriptBubble">JavaScript</div>
        <div className="reactBubble">React</div>
      </div>
      <div className="fav-quote-div">
        <p className="fav-quote">I am because we are</p>
        <p className="fav-quote-source">-Ubuntu </p>
      </div> */}
      </section>
    </div>
  );
};

export default AboutMe;
