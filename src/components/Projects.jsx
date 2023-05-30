import React from 'react';

const Projects = () => (
  <section id="projectSection" className="projectSection">
    <div className="case-study-intro">
      {/* <p className="case-title">CASE STUDIES</p> */}
      <h2 className="my-latest-work">My Latest Work</h2>
    </div>
    <div className="allProjects">
      <div className="project1">
        <p className="project-number-odd">01</p>
        <div className="about-case-study-odd">
          <h3 className="project-name-odd">Its Sunday</h3>
          <div className="project-description-odd">A live messaging app embbeded with a bert model to predict sentiment of your message before you send them</div>
          <button type="button" className="view-button-odd">
            Case study
             <i className="fa-sharp fa-solid fa-forward fa-beat-fade" />
          </button>
        </div>

      </div>
      <div className="project2">
        <p className="project-number">02</p>
        <div className="about-case-study">
          <h3 className="project-name">Its Sunday</h3>
          <div className="project-description">A live messaging app embbeded with a bert model to predict sentiment of your message before you send them</div>
          <button type="button" className="view-button">
            Case study
             <i className="fa-sharp fa-solid fa-forward fa-beat-fade" />
          </button>
        </div>
      </div>
      <div className="project3">
        <p className="project-number-odd">03</p>
        <h3 className="project-name-odd">Its Sunday</h3>
        <div className="project-description-odd">A live messaging app embbeded with a bert model to predict sentiment of your message before you send them</div>
        <button type="button" className="view-button-odd">
          Case study
           <i className="fa-sharp fa-solid fa-forward fa-beat-fade" />
        </button>
      </div>
    </div>
  </section>
);

export default Projects;
