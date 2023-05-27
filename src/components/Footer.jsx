import React from 'react';
// import Socials from './Socials';

const Footer = () => (
  <div>
    <footer className="portfolio-footer">
      <div className="footer-socials">
        {/* <label htmlFor="myInput">Input:</label> */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="https://www.linkedin.com/in/racheal-appiah-kubi/" target="blank"><i className="fa-brands fa-twitter" /></a>
        <a href="https://www.linkedin.com/in/racheal-appiah-kubi/" target="blank"><i className="fa-brands fa-linkedin-in" /></a>
        <a href="https://github.com/coderacheal" target="blank"><i className="fa-brands fa-github" /></a>
        <a href="https://medium.com/@coderachealcheal-appiah-kubi/" target="blank"><i className="fa-brands fa-medium" /></a>
        <a href="https://wellfound.com/u/racheal-appiah-kubi" target="blank"><i className="fa-brands fa-angellist" /></a> 
      </div>
      <p className="reserved-footer">&copy; 2023 My Portfolio. All rights reserved.</p>
    </footer>
  </div>
);

export default Footer;
