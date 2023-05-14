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
    <div>
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
      <button type="submit">Submit</button>
        </form>
    </div>
    
  );
}

export default Contact;

