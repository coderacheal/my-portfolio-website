import React from 'react';
import Header from '../Home-page/Header';
// import SeeMoreMouse from '../Utils/SeeMoreMouse';

const ContactPage = () => (
  <div className="contact-session-page">
    <Header />
    <div>
      <div className="profile-get-in-touch">
        <div className="emai-contact-div">
          <p className="hello-email-ribbon">SEND ME AN EMAIL</p>
          <a
            className="in-touch-comment-large"
            href="mailto:coderacheal@gmail.com"
          >
            HELLO@RACHEAL
            {' '}
            <br />
            APPIAHKUBI.COM
          </a>
          {/* <a href="https://github.com/coderacheal" className="in-touch-comment-mini">HELLO@RACHEAL</a>
            <br />
            <a href="https://github.com/coderacheal" className="in-touch-comment-mini">APPIAHKUBI.COM</a> */}
          <p className="in-touch-comment">A FULL STACK DEVELOPER WITH A BACKGROUND IN DATA SCIENCE AND MACHINE LEARNING</p>
        </div>
      </div>
    </div>
    <p className="connect-via-social-ribbon">OR CONNECT WITH ME ON SOCIALS</p>
    <div className="social-contact">
      <a href="https://github.com/coderacheal" target="blank">GITHUB</a>
      <a href="https://medium.com/@coderacheal" target="blank">LINKEDIN</a>
      <a href="https://wellfound.com/u/racheal-appiah-kubi" target="blank">TWITTER</a>
    </div>
    <div className="contact-footer">
      <div>
        <p>Full-Stack Developer</p>
      </div>
      <div className="footer-links-social">
        <div>
          <a href="https://github.com/coderacheal" target="blank">GITHUB</a>
        </div>
        <div>
          <a href="https://medium.com/@coderacheal" target="blank">LINKEDIN</a>
        </div>
      </div>
      <div>
        <p>Portfolio @2023</p>
      </div>
    </div>
  </div>
);
export default ContactPage;
