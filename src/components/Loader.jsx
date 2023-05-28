import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MouseHalo from './MouseHalo';
import styles from '../styles/styles.module.css';

const Loader = ({ duration = 2000 }) => {
  const [progress, setProgress] = useState(0);
  // const duration = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress <= 100 ? newProgress : 100;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className={styles.loader}>
      <div className={styles.loadingPercentage}>
        <MouseHalo />
        <p className={styles.dynamicPercentage}>
          {progress}
          %
        </p>
        <div className={styles.loadingline}>
          <span
            className={styles.progressBar}
            style={{ width: `${progress - 10}%`, transition: `${duration / 50}ms linear` }}
          />
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Loader;
