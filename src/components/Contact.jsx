import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='form-page'>
      <h1>Get in Touch</h1>
      <p>If you want to chat about a collaboartion or project, or to say hi</p>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <br />
          <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
          <textarea
          value={message}
          placeholder='I would love to hear from you '
          onChange={(e) => setMessage(e.target.value)}
          required
          />
        <br />
        <button className='submit-button' type="submit">Say Hello</button>
      </form>   
    </div>
    
  );
}

export default Contact;

