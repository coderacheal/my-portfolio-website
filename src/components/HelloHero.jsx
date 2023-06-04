import React, { useEffect, useState } from 'react';

const HelloHero = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [showFirstElement, setShowFirstElement] = useState(true);
  const [showSecondElement, setShowSecondElement] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstElement(false);
      setShowSecondElement(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const scrollThreshold = window.innerHeight * 0.75; // Adjust the threshold as needed

  //     if (scrollTop > scrollThreshold) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <section className="hero-intro">
      <div className="name-job-div">
        <div>
          {showFirstElement && <p className="hello">Hello</p>}
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

// import React, { useState, useEffect } from 'react';

// const ExampleComponent = () => {
//   const [showFirstElement, setShowFirstElement] = useState(true);
//   const [showSecondElement, setShowSecondElement] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFirstElement(false);
//       setShowSecondElement(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {showFirstElement && <div>First Element</div>}
//       {showSecondElement && <div>Second Element</div>}
//     </div>
//   );
// };

// export default ExampleComponent;
