import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    // replace with your own projects
    { title: 'Project 1', image: './path_to_image', deployedUrl: 'https://...', githubUrl: 'https://...' },
    { title: 'Project 2', image: './path_to_image', deployedUrl: 'https://...', githubUrl: 'https://...' },
    // more projects...
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map(project => <Project key={project.title} {...project} />)}
    </section>
  );
}

export default Portfolio;
