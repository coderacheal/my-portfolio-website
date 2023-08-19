import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faBrain, faCertificate, faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import workspace from '../../assets/office set up.jpg';
import Footer from '../Home-page/Footer';
import Header from '../Home-page/Header';
import NextProject from '../Indivual-Projects/components/NextProject';

const AboutPage = () => {
  const words = ['Passionate', 'full stack', 'developer'];
  const techStack = 'Tech Stack';
  const nextProjectName = 'Project Everest';
  const color = 'black';
  // const [visibleLetters, setVisibleLetters] = useState([]);

  const [isInView1, setIsInView1] = useState(false);
  const [ref1, inView1] = useInView({
    threshold: 0.5,
  });

  const [isInView2, setIsInView2] = useState(false);
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  const [isInView3, setIsInView3] = useState(false);
  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  // Set the state to true when each element comes into view
  useEffect(() => {
    if (inView1) {
      setIsInView1(true);
    }
    if (inView2) {
      setIsInView2(true);
    }
    if (inView3) {
      setIsInView3(true);
    }

    // setVisibleLetters();
  }, [inView1, inView2, inView3]);

  return (
    <div className="about-me-main">
      <Header color={color} />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="long-arrow down-arrow">&darr;</span>
        <h2 className="heroAboutMe">
          {words.map((word, index) => (
            <span key={words}>
              {word.split('').map((letter) => (
                <span
                  key={word + letter}
                  className="passionate-dev"
                  aria-hidden="true"
                >
                  {letter}
                </span>
              ))}
              {index !== words.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="officeSetup-and-text">
          <div className="officeSetup-div">
            <img className="officeSetupImage" src={workspace} alt="workspace" />
          </div>
          <RoughNotationGroup show className="roughNotation">
            <div className="more-about-me-div">
              <div className="section-description">
                <div>
                  <span>01/</span>
                  <p className="about-sub-section">Creativity</p>
                </div>

                <p className="more-about-me" ref={ref1}>
                  I am a
                  {' '}
                  {isInView1 ? (
                    <RoughNotation type="highlight" color="pink">
                      data scientist
                    </RoughNotation>
                  ) : null}
                  {' '}
                  who fell in love with web development. As someone with a background in
                  {' '}
                  {isInView1 ? (
                    <RoughNotation type="circle" color="green" strokeWidth={3}>
                      data science and AI
                    </RoughNotation>
                  ) : null}
                  {' '}
                  , I love data the data as
                  much as the code. I enjoy creating sleek apps that leverage
                  {' '}
                  {isInView1 ? (
                    <RoughNotation type="highlight" color="yellow">
                      AI and ML
                    </RoughNotation>
                  ) : null}
                  {' '}
                </p>
              </div>
              <div className="section-description">
                <div>
                  <span>02/</span>
                  <p className="about-sub-section">Career</p>
                </div>
                <p className="more-about-me" ref={ref2}>
                  My work experience includes
                  {' '}
                  {isInView2 ? (
                    <RoughNotation type="bracket" color="red" strokeWidth={3}>
                      database management, curriculum design with academic content
                      creation, and project management.
                    </RoughNotation>
                  ) : null}
                  {' '}
                  I have overseen professional cohorts of close 150 learners where I
                  implement
                  {' '}
                  {isInView2 ? (
                    <RoughNotation type="highlight" color="#CCFF00">
                      Scrum
                    </RoughNotation>
                  ) : null}
                  {' '}
                  methodologies, ensuring that projects consistently meet the
                  definition of done for all Sprints.
                  {' '}
                </p>
              </div>
              <div className="section-description">
                <div>
                  <span>03/</span>
                  <p className="about-sub-section">Interests</p>
                </div>
                <p className="more-about-me" ref={ref3}>
                  I&lsquo;m  learning to play the
                  {' '}
                  {isInView3 ? (
                    <RoughNotation type="highlight" color="yellow">
                      violin
                    </RoughNotation>
                  ) : null}
                  {' '}
                  because it transports me to a realm of pure magic and wonder.
                  I love to
                  {' '}
                  {isInView3 ? (
                    <RoughNotation type="underline" color="blue" strokeWidth={3}>
                      sketch
                    </RoughNotation>
                  ) : null }
                  {' '}
                  on slow days. I also enjoy technical writing.
                </p>
              </div>
            </div>
          </RoughNotationGroup>
        </div>
        <div>
          <h2 className="techStack">
            {techStack.split('').map((letter) => (
              <span key={techStack + letter}>{letter}</span>
            ))}
          </h2>
          <div className="techStackSessions">
            <div className="eachTechStackSessions">
              <div className="flip-card-inner">
                <div className="fa-container flip-card-front">
                  <FontAwesomeIcon icon={faCode} className="tech-fontawesome" />
                  <br />
                  <h3 className="stackTitle">Languages</h3>
                  <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Ruby</li>
                    <li>SQL (MySQL, PostgreSQL, SQL Server)</li>
                  </ul>
                </div>
                <div className="flip-card-back">
                  <p className="easterEgg">I am because we are - Ubuntu</p>
                </div>
              </div>
            </div>
            <div className="eachTechStackSessions">
              <div className="flip-card-inner">
                <div className="fa-container flip-card-front">
                  <FontAwesomeIcon
                    icon={faScrewdriverWrench}
                    className="tech-fontawesome"
                  />
                  <br />
                  <h3 className="stackTitle">Tools/Frameworks</h3>
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Rails</li>
                    <li>Git</li>
                    <li>APIs</li>
                    <li>Linux</li>
                  </ul>
                </div>
                <div className="flip-card-back">
                  <p className="easterEgg">What ever you do, give a 100%, unless you are donating blood - Bill Murray</p>
                </div>
              </div>
            </div>
            <div className="eachTechStackSessions">
              <div className="flip-card-inner">
                <div className="fa-container flip-card-front">
                  <FontAwesomeIcon icon={faBrain} className="tech-fontawesome" />
                  <br />
                  <h3 className="stackTitle">AI/ML</h3>
                  <ul>
                    <li>Scikit Learn</li>
                    <li>TensorFlow</li>
                    <li>HuggingFace</li>
                    <li>Streamlit</li>
                    <li>Gradio</li>
                  </ul>
                </div>
                <div className="flip-card-back">
                  <p className="easterEgg">I truly believe the internet is the greatest invention of my generation</p>
                </div>
              </div>
            </div>
            <div className="eachTechStackSessions">
              <div className="flip-card-inner">
                <div className="fa-container flip-card-front">
                  <FontAwesomeIcon icon={faCertificate} className="tech-fontawesome" />
                  <br />
                  <h3 className="stackTitle">Certifications</h3>
                  <ul>
                    <li>Certified AWS Cloud Practitioner</li>
                    <li>Certified Scrum Master (PSM I)</li>
                  </ul>
                </div>
                <div className="flip-card-back">
                  <p className="easterEgg">Did you find this easter egg? Send me an email. Let me know.</p>
                </div>
              </div>
            </div>
          </div>
          <NextProject
            nextProjectName={nextProjectName}
            route="/everest"
            viewProject="View latest Project"
          />
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default AboutPage;
