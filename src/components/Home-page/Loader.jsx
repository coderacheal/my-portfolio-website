import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MouseHalo from '../Utils/MouseHalo';
import styles from '../../styles/styles.module.css';

const Loader = ({ duration = 1000 }) => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadingStartTime, setLoadingStartTime] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      setLoadingComplete(true);
    };

    setLoadingStartTime(Date.now()); // Record the time when loading starts
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      return undefined;
    };
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (loadingComplete) {
      // If loading is complete, set progress to 100%
      setProgress(100);
    } else {
      const interval = setInterval(() => {
        // Calculate the loading progress based on the time elapsed
        const elapsedTime = Date.now() - loadingStartTime;
        const newProgress = (elapsedTime / duration) * 100;
        setProgress(newProgress <= 100 ? newProgress : 100);
      }, duration / 40);

      return () => clearInterval(interval);
    }
  }, [duration, loadingComplete, loadingStartTime]);

  return (
    <div className={styles.loader}>
      <div className={styles.loaderNameDiv}>
        <p className={styles.loaderMyName}>RACHEAL APPIAH-KUBI</p>
        <p className={styles.loaderMyYear}>PORTFOLIO &copy;2023</p>
      </div>
      <div className={styles.loadingPercentage}>
        <p className={styles.dynamicPercentage}>
          {Math.round(progress)}
          %
          {/* Round the progress to a whole number */}
        </p>
        <div className={styles.loadingline}>
          <span
            className={styles.progressBar}
            style={{
              width: loadingComplete ? '100%' : `${progress - 10}%`,
              transition: `${duration / 40}ms linear`,
            }}
          />
        </div>
      </div>
      <MouseHalo />
    </div>
  );
};

Loader.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Loader;
