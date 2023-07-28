import React, { useState } from 'react';
import SeeMoreMouse from '../Utils/SeeMoreMouse';

const Contact = () => {
  const [showSendEmailMouse, setSendEmailMouse] = useState(false);
  const seeAction = 'Say hello';

  const handleShowSendEmailMouseEnter = () => {
    setSendEmailMouse(true);
  };

  const handleShowSendEmailMouseLeave = () => {
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
          href="mailto:hello@rachealappiahkubi.com"
          className="email"
          onMouseEnter={handleShowSendEmailMouseEnter}
          onMouseLeave={handleShowSendEmailMouseLeave}
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
