import React, { useState } from 'react';
import SeeMoreMouse from '../Utils/SeeMoreMouse';

const Contact = () => {
  const [showSendEmailMouse, setSendEmailMouse] = useState(false);
  const seeAction = 'Say             hello';

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
          {' '}
          <br />
          APPIAHKUBI.COM
        </a>

      </div>
      {showSendEmailMouse && <SeeMoreMouse seeAction={seeAction} />}
    </div>
  );
};

export default Contact;
