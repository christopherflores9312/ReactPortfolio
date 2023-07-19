import React from 'react';
import Project from './Project';
import styles from './css/Portfolio.module.css';

function Portfolio() {
  const projects = [
    // replace with your own projects
    { title: 'Project 1', image: './path_to_image', deployedUrl: 'https://...', githubUrl: 'https://...' },
    { title: 'Project 2', image: './path_to_image', deployedUrl: 'https://...', githubUrl: 'https://...' },
    // more projects...
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.projectContainer}>
        {projects.map(project => <Project key={project.title} {...project} className={styles.projectItem}/>)}
      </div>
    </section>
  );
}

export default Portfolio;
