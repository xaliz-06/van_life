import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HostHeader.module.css';

const HostHeader = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/host" className={`${styles.nav_link}`}>
        Dashboard
      </Link>
      <Link to="/host/income" className={styles.nav_link}>
        Income
      </Link>
      <Link to="/host/reviews" className={styles.nav_link}>
        Reviews
      </Link>
    </nav>
  );
};

export default HostHeader;
