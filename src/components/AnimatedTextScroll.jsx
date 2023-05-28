import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const AnimatedTextScroll = () => {
  const textRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.5 });

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
      <h1 ref={textRef} style={{ opacity: 0, transform: 'translateY(-50px)' }}>
        Animated Text on Scroll
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, tortor eget...</p>
    </div>
  );
};

export default AnimatedTextScroll;
