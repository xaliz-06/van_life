import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import styles from './Root.module.css';

const Root = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={`${styles.nav_link} ${styles.site_logo}`}>
          #VanLife
        </Link>
        <Link to="/about" className={styles.nav_link}>
          About
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
