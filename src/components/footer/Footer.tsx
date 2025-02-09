import React from 'react'
import globalStyles from '@/app/styles.module.scss';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={globalStyles.container}>
        <p>© 2025 Cat Hands Service. All rights reserved.</p>
      </div>
    </footer>  )
}
