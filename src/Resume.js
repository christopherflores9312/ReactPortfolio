import React from 'react';
import styles from './css/Resume.module.css';
import resume from './Resume.pdf'; // replace with the path to your resume

function Resume() {
  const proficiencies = [
    // replace with your own proficiencies
    'JavaScript', 'HTML', 'CSS', 'React', 'Node.js',
  ];

  return (
    <section className={styles.resume}>
      <h2 className={styles.title}>Resume</h2>
      <a href={resume} download className={styles.link}>Download my Resume</a>
      <h3 className={styles.title}>Proficiencies</h3>
      <ul className={styles.proficiencies}>
        {proficiencies.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
      </ul>
    </section>
  );
}

export default Resume;
