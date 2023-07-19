import React from 'react';
import styles from './css/Project.module.css';

function Project({ title, image, deployedUrl, githubUrl }) {
  return (
    <div className={styles.project}>
      <h3 className={styles.title}>{title}</h3>
      <img src={image} alt={title} className={styles.image} />
      <a href={deployedUrl} className={styles.link}>Deployed Application</a>
      <a href={githubUrl} className={styles.link}>GitHub Repository</a>
    </div>
  );
}

export default Project;
