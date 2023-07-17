import { useLocation, Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? styles.activeLink : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? styles.activeLink : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? styles.activeLink : ''}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? styles.activeLink : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
