import React from 'react'
import styles from './header.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import Link from 'next/link'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.containerWrapper}>
        <div className={styles.leftContainer}>
          <Link
            id='logo'
            className={styles.Logo}
            href='/'
          >
            Cat Hands Service
          </Link>
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.whiteContainer}></div>
          <div className={styles.blackContainer}></div>
        </div>
        <div className={styles.rightContainer}>
          <Link
            className={styles.snsWrapper}
            href='https://github.com/CatHandsService'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon className={styles.sns} />
          </Link>
          <Link
            className={styles.snsWrapper}
            href='/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <XIcon className={styles.sns} />
          </Link>
          <Link
            className={styles.snsWrapper}
            href='/Contact'
          >
            <EmailIcon className={styles.sns} />
          </Link>
        </div>
      </div>
    </div>
  )
}
