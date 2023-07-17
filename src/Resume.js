import React from 'react';
// import resume from './path_to_your_resume'; // replace with the path to your resume

function Resume() {
  const proficiencies = [
    // replace with your own proficiencies
    'JavaScript', 'HTML', 'CSS', 'React', 'Node.js',
  ];

  return (
    <section>
      <h2>Resume</h2>
      {/* <a href={resume} download>Download my Resume</a> */}
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
      </ul>
    </section>
  );
}

export default Resume;
