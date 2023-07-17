import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/your_github_username">GitHub</a>
      <a href="https://linkedin.com/in/your_linkedin_username">LinkedIn</a>
      <a href="https://twitter.com/your_twitter_username">Twitter</a>
    </footer>
  );
}

export default Footer;
