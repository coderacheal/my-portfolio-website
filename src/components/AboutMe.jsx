import React, {useState} from 'react'

const AboutMe = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div>
      <section className='about-me-section'>
        <div>
          <h1 className='about-me text-animation'>About me</h1>
        </div>
        <div className='my-skills-div'>
          <p className='my-skills'>Full Stack Developer with a love for ML & AI, Block Chain, Interactive Websites with React, and Cloud Computing. Learning to play the violin. </p>
        </div>
        <div className='pubbles-div' >
          <div className='awsBubble'>AWS</div>
          <div className='mlBubble'>ML</div>
          <div className='pythonBubble'>Python</div>
          <div className='rubyBubble'>Ruby</div>
          <div className='sqlBubble'>SQL</div>
          <div className='javascriptBubble'>JavaScript</div>
          <div className='reactBubble'>React</div>
        </div>
        <div className='fav-quote-div'>
          <p className='fav-quote'>I am because we are</p>
          <p className='fav-quote-source'>-Ubuntu </p>
        </div>
      </section>
    </div>
  )
}

export default AboutMe
