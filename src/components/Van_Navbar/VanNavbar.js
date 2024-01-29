import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './VanNavbar.module.css';

const VanNavbar = () => {
  return (
    <nav className={styles.host_van_detail_nav}>
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          isActive
            ? `${styles.active} ${styles.host_van_detail_nav_link}`
            : `${styles.host_van_detail_nav_link}`
        }
      >
        Details
      </NavLink>
      <NavLink
        to="pricing"
        className={({ isActive }) =>
          isActive
            ? `${styles.active} ${styles.host_van_detail_nav_link}`
            : `${styles.host_van_detail_nav_link}`
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="photos"
        className={({ isActive }) =>
          isActive
            ? `${styles.active} ${styles.host_van_detail_nav_link}`
            : `${styles.host_van_detail_nav_link}`
        }
      >
        Photos
      </NavLink>
    </nav>
  );
};

export default VanNavbar;
