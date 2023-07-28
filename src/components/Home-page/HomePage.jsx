import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import HelloHero from './HelloHero';
import ProjectCards from './ProjectCards';
import Contact from './Contact';

const HomePage = () => (
  <div className="welcome-page">
    <main className="portfolio-content">
      <Header />
      <HelloHero />
      <ProjectCards />
      <Contact />
      <Footer />
    </main>
  </div>
);

HomePage.propTypes = {
  projectCardImage: PropTypes.string.isRequired,
};

export default HomePage;

// import React, { useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import Header from './Header';
// import Footer from './Footer';
// import HelloHero from './HelloHero';
// import ProjectCards from './ProjectCards';
// import Contact from './Contact';

// const HomePage = ({ projectCardImage }) => {
//   // Separate refs and states for each component
//   const [helloHeroVisible, setHelloHeroVisible] = useState(false);
//   const [projectCardsVisible, setProjectCardsVisible] = useState(false);
//   const [contactVisible, setContactVisible] = useState(false);

//   // Refs for the intersection observer
//   const helloHeroRef = React.useRef();
//   const projectCardsRef = React.useRef();
//   const contactRef = React.useRef();

//   const helloHeroInView = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const projectCardsInView = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const contactInView = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   // When each element comes into view, set the corresponding 'visible' state to true
//   if (helloHeroInView[0].inView) {
//     setHelloHeroVisible(true);
//   }

//   if (projectCardsInView[0].inView) {
//     setProjectCardsVisible(true);
//   }

//   if (contactInView[0].inView) {
//     setContactVisible(true);
//   }

//   return (
//     <div className="welcome-page">
//       <main className="portfolio-content">
//         <Header />
//         <div ref={helloHeroRef}>
//           <HelloHero className={helloHeroVisible ? 'slide-in' : ''} />
//         </div>
//         <div ref={projectCardsRef}>
//           <ProjectCards className={projectCardsVisible ? 'slide-in' : ''}
//            projectCardImage={projectCardImage} />
//         </div>
//         <div ref={contactRef}>
//           <Contact className={contactVisible ? 'slide-in' : ''} />
//         </div>
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default HomePage;
