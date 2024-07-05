import React from 'react';
import styles from './heroSection.module.scss';

export const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.greetContainer}>
        {/* <h1 className={styles.h1}>Shiki<br/>Amakusa</h1>
        <p>hey, guys!</p>
        <p>my name is Shiki!</p> */}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.bigSquare}></div>
        <div className={styles.smallSquare}></div>
      </div>
    </div>
  )
}
