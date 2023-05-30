import React from 'react';
import styles from '../styles/styles.module.css'

const HorizontalProjectsScroll = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Pop-up Content</h2>
            <p>This is the content of the pop-up.</p>
            <button>Close</button>
          </div>
        </div>
    </div>
  )
}

export default HorizontalProjectsScroll;
