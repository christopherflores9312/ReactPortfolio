import React from 'react';
import styles from './About.module.css';
// import avatar from './path_to_your_image'; // replace with the path to your image

function About() {
  return (
    <section className={styles.about}>
      {/* <img src={avatar} alt="Your Name" /> */}
      <h2>About Me</h2>
      <p>Your bio goes here...</p>
    </section>
  );
}

export default About;
