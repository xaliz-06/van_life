import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './HostHeader.module.css';

const HostHeader = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) =>
          isActive
            ? `${styles.nav_link} ${styles.active}`
            : `${styles.nav_link}`
        }
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default HostHeader;
