import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <img src="/path/to/your/photo.jpg" alt="Your Name" className={styles.image} />
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla, nibh id bibendum rutrum, nulla augue vestibulum nulla, eget bibendum erat sapien ac libero. Sed eget turpis nec ipsum mollis pellentesque. Integer vel turpis at sapien facilisis ultricies.
      </p>
    </div>
  );
}

export default Home;
