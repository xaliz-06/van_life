import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import loginAvatar from '../../assets/images/avatar-icon.png';

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
      <Link to="login" className={styles.nav_link}>
        <img src={loginAvatar} className={styles.login_img} alt="login" />
      </Link>
    </nav>
  );
};

export default Navbar;
