import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={`${styles.nav_link}  ${styles.site_logo}`}>
        #VanLife
      </Link>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/host"
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
      >
        Host
      </NavLink>
      <NavLink
        to="/vans"
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
      >
        Vans
      </NavLink>
    </nav>
  );
};

export default Navbar;
