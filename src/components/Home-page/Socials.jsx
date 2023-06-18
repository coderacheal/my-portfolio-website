import React from 'react';
// import linkedIn from '../assets/linkedin.png'
// import twitter from '../assets/twitter.png'
// import medium from '../assets/medium - Copy (2).png'
// import wellfound from '../assets/hand.png'

const Socials = () => (
  <div className="socials-div">
    <div className="social-and-pole">
      <div className="all-socials">
        <a href="https://www.linkedin.com/in/racheal-appiah-kubi/" target="blank"><i aria-label="Input Label" className="fa-brands fa-twitter" /></a>
        <a href="https://www.linkedin.com/in/racheal-appiah-kubi/" target="blank"><i aria-label="Input Label" className="fa-brands fa-linkedin-in" /></a>
        <a href="https://github.com/coderacheal" target="blank"><i aria-label="Input Label" className="fa-brands fa-github" /></a>
        <a href="https://medium.com/@coderacheal" target="blank"><i aria-label="Input Label" className="fa-brands fa-medium" /></a>
        <a href="https://wellfound.com/u/racheal-appiah-kubi" target="blank"><i aria-label="Input Label" className="fa-brands fa-angellist" /></a>
      </div>
      {/* <div className="poles">
        <span className="green-pole one" />
        <span className="green-pole two" />
        <span className="green-pole three" />
        <span className="green-pole four" />
      </div> */}
    </div>
  </div>
);

export default Socials;
