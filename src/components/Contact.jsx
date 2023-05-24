import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

function Contact() { (
  <div className="form-page">
      <div className="contact-intro">
        <h1>Say Hello</h1>
        {/* <p>If you want to chat about a collaboartion or project, or to say hi</p> */}
      </div>
      <form >
        <input
          type="text"
          placeholder="Name"
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          required
        />
        <br />
        <textarea
          placeholder="I would love to hear from you "
          required
        />
        <br />
        <button className="submit-button" type="submit">Send</button>
      </form>
      <div className="mainPage">Back to Main Page</div>
    </div>

  );
}

export default Contact;
