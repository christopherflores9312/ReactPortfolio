import React from 'react';
import styles from './css/Resume.module.css';
import resume from './Resume.pdf'; // replace with the path to your resume
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function Resume() {
  const proficiencies = [
    // replace with your own proficiencies
    'JavaScript', 'HTML', 'CSS', 'React', 'Node.js',
  ];

  return (
    <Box
      mb={2}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        padding: '40px',
        borderRadius: '8px',
        width: '20%',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <section className={styles.resume}>
        <h2 className={styles.title}>Resume</h2>
        <Button
          variant="contained"
          href={resume}
          download
          sx={{
            fontWeight: 'bold',
            margin: '0 auto',
            display: 'center',
          }}
        >
          Download my Resume
        </Button>
        <h3 className={styles.title}>Proficiencies</h3>
        <ul className={styles.proficiencies}>
          {proficiencies.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
        </ul>
      </section>
    </Box>
  );
}

export default Resume;
