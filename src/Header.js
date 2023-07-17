import React from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Christopher Flores</h1>
      <Navigation />
    </header>
  );
}

export default Header;
