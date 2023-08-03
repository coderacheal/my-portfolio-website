import React, { useState, useEffect } from 'react';
import MouseHalo from '../Utils/MouseHalo';
import styles from '../../styles/styles.module.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const startTime = performance.timing.navigationStart;
      const endTime = performance.timing.loadEventEnd;
      const elapsedTime = (endTime - startTime);
      setProgress(elapsedTime);

      return () => clearInterval(interval);
    });
  }, []);

  return (
    <div className={styles.loader}>
      <div className={styles.loaderNameDiv}>
        <p className={styles.loaderMyName}>RACHEAL APPIAH-KUBI</p>
        <p className={styles.loaderMyYear}>PORTFOLIO &copy;2023</p>
      </div>
      <div className={styles.loadingPercentage}>
        <p className={styles.dynamicPercentage}>
          {/* {progress} */}
          10%
        </p>
        <div className={styles.loadingline}>
          <span
            className={styles.progressBar}
            style={{
              width: `${progress}%`,
              transition: 'width 100ms linear',
            }}
          />
        </div>
      </div>
      <MouseHalo />
    </div>
  );
};

export default Loader;
