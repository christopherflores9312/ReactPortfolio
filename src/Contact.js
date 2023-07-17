import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  // function for handling form submission
  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission...
  }

  // function for handling changes in form input fields
  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formState.name} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} value={formState.email} required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" onChange={handleChange} value={formState.message} required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
