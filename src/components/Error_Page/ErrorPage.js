import React from 'react';
import { useRouteError } from 'react-router-dom';

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className={styles.error_page}>
      <h1>Error : {error.message}</h1>
    </div>
  );
};

export default ErrorPage;
