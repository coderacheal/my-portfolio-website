import React from 'react';

const ContactPage = () => (
  <section className="form-page">
    <div className="contact-intro">
      <h1>Say Hello</h1>
    </div>
    <form>
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
  </section>
);

export default ContactPage;
