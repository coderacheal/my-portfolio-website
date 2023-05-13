import React from 'react'

const Projects = () => {
  return (
    <section className='projectSection'>
      <div className='allProjects'>
        <div className='case-study-intro'>
          <p className='case-title'>CASE STUDIES</p>
          <h2 className='my-latest-work'>My Latest Work</h2>
        </div>
        <div className='project1'>
          <p className='project-number'>01</p>
          <h3 className='project-name'>It's Sunday</h3>
          <div className='project-description'>A live messaging app embbeded with a bert model to predict sentiment of your message before you send them</div>
          <button className='view-button'>Case study</button>
        </div>
      </div>
    </section>
  )
}

export default Projects
