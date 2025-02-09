/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import globalStyles from '@/app/styles.module.scss';
import styles from './heroSection.module.scss';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

export const HeroSection = () => {
  return (
    <header id='#home' className={styles.hero}>
      <div className={globalStyles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Cat's Hand .DEV
          </h1>
          <p className={styles.heroSubtitle}>
            Full Stack Web Engineer, <br />Programmer
          </p>
          <div className={styles.socialLinks}>
            <Link
              href='https://github.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FaGithubAlt size={30} />
            </Link>
            <Link
              href='https://linkedin.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <BsTwitterX size={30} />
            </Link>
            <Link href='/Contact'>
              <MdOutlineMailOutline size={30} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
