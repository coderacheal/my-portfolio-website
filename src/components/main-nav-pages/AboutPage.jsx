import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faBrain, faCertificate, faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import workspace from '../../assets/office set up.jpg';
import Footer from '../Home-page/Footer';
import Header from '../Home-page/Header';
import NextProject from './ProjectPage/NextProject';

const AboutPage = () => {
  const words = ['Passionate', 'full stack', 'developer'];
  const techStack = 'Tech Stack';
  const nextProjectName = 'Project Sunday';

  return (
    <div className="about-me-main">
      <Header />
      <span className="long-arrow down-arrow">&darr;</span>
      <h2 className="heroAboutMe">
        {words.map((word, index) => (
          <span key={index}>
            {word.split('').map((letter, index) => (
              <span key={index} className="" aria-hidden="true">{letter}</span>
            ))}
            {index !== words.length - 1 && <br />}
          </span>
        ))}
      </h2>
      <div className="officeSetup-and-text">
        <div className="officeSetup-div">
          <img className="officeSetup" src={workspace} alt="workspace" />
        </div>
        <div className="more-about-me-div">
          <div className="section-description">
            <div>
              <span>01/</span>
              <p className="about-sub-section">Creativity</p>
            </div>
            <p className="more-about-me">
              My creativity lies in creating sleek interactive websites that leverage artificial
              intelligence. I love data as much as the code. I build accessible and helpful
              applications for my community
              {' '}
            </p>
          </div>
          <div className="section-description">
            <div>
              <span>02/</span>
              <p className="about-sub-section">Learning</p>
            </div>
            <p className="more-about-me">
              Lately, I&lsquo;ve been diving into the fascinating realm of blockchain,
              exploring its potential applications. My aim is to merge cutting-edge tech with
              user-friendly experiences, always seeking new challenges and refining my skills.
              {' '}
            </p>
          </div>
          <div className="section-description">
            <div>
              <span>03/</span>
              <p className="about-sub-section">Interests</p>
            </div>
            <p className="more-about-me">
              Oh, and did I mention?
              {' '}
              I&lsquo;m also learning to play the violin trying to create beautiful melodies
              in my spare time.
              {' '}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="techStack">
          {techStack.split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h2>
        <div className="techStackSessions">
          <div className="eachTechStackSessions">
            <div className="fa-container">
              <FontAwesomeIcon icon={faCode} className="tech-fontawesome" />
            </div>
            <h3 className="stackTitle">Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>SQL</li>
              <li>(MySQL, PostgreSQL, SQL Server)</li>
            </ul>
          </div>
          <div className="eachTechStackSessions">
            <div className="fa-container">
              <FontAwesomeIcon icon={faScrewdriverWrench} className="tech-fontawesome" />
            </div>
            <h3 className="stackTitle">Tools & Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Rails</li>
              <li>Git</li>
              <li>APIs</li>
              <li>Linux</li>
            </ul>
          </div>
          <div className="eachTechStackSessions">
            <div className="fa-container">
              <FontAwesomeIcon icon={faBrain} className="tech-fontawesome" />
            </div>
            <h3 className="stackTitle">Machine Learning</h3>
            <ul>
              <li>Scikit Learn</li>
              <li>TensorFlow</li>
              <li>HuggingFace</li>
              <li>Streamlit</li>
              <li>Gradio</li>
            </ul>
          </div>
          <div className="eachTechStackSessions">
            <div className="fa-container">
              <FontAwesomeIcon icon={faCertificate} className="tech-fontawesome" />
            </div>
            <h3 className="stackTitle">Certification</h3>
            <ul>
              <li>AWS Cloud Practitioner</li>
              <li>Certified Scrum Master</li>
            </ul>
          </div>
        </div>
        <NextProject nextProjectName={nextProjectName} route="/projects/sunday" />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
