import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MouseHalo from '../Utils/MouseHalo';
import styles from '../../styles/styles.module.css';

const Loader = ({ duration = 1000 }) => {
  const [progress, setProgress] = useState(0);
  // const duration = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 3;
        return newProgress <= 100 ? newProgress : 100;
      });
    }, duration / 40);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className={styles.loader}>
      <div className={styles.loaderNameDiv}>
        <p className={styles.loaderMyName}>RACHEAL APPIAH-KUBI</p>
        <p className={styles.loaderMyYear}>PORTFOLIO &copy;2023</p>
      </div>
      <div className={styles.loadingPercentage}>
        <MouseHalo />
        <p className={styles.dynamicPercentage}>
          {progress}
          %
        </p>
        <div className={styles.loadingline}>
          <span
            className={styles.progressBar}
            style={{ width: `${progress - 10}%`, transition: `${duration / 40}ms linear` }}
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
