import React, { useState } from 'react';
import SeeMoreMouse from '../Utils/SeeMoreMouse';

const Contact = () => {
  const [showSendEmailMouse, setSendEmailMouse] = useState(false);
  const seeAction = 'Send mail';

  const handleShowSenEmailMouseEnter = () => {
    setSendEmailMouse(true);
  };

  const handleShowSenEmailMouseLeave = () => {
    setSendEmailMouse(false);
  };

  return (
    <div className="contact-session">
      <div className="work-together">
        <p>WANT TO WORK TOGETHER</p>
        <p>SEND ME A MESSAGE</p>
      </div>
      <div className="email-div">
        <a
          href="mailto:coderacheal@gmail.com"
          className="email"
          onMouseEnter={handleShowSenEmailMouseEnter}
          onMouseLeave={handleShowSenEmailMouseLeave}
        >
          HELLO@RACHEAL
        </a>
        <a
          href="mailto:coderacheal@gmail.com"
          className="email"
          onMouseEnter={handleShowSenEmailMouseEnter}
          onMouseLeave={handleShowSenEmailMouseLeave}
        >
          APPIAHKUBI.COM
        </a>
      </div>
      {showSendEmailMouse && <SeeMoreMouse seeAction={seeAction} />}
    </div>
  );
};

export default Contact;
