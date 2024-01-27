import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={`${styles.nav_link} ${styles.site_logo}`}>
        #VanLife
      </Link>
      <Link to="/about" className={styles.nav_link}>
        About
      </Link>
      <Link to="/host" className={styles.nav_link}>
        Host
      </Link>
      <Link to="/vans" className={styles.nav_link}>
        Vans
      </Link>
    </nav>
  );
};

export default Navbar;
