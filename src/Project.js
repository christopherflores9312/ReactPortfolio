import React from 'react';

function Project({ title, image, deployedUrl, githubUrl }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={deployedUrl}>Deployed Application</a>
      <a href={githubUrl}>GitHub Repository</a>
    </div>
  );
}

export default Project;
