/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import globalStyles from '@/app/styles.module.scss';
import styles from './contactSection.module.scss';
import { FiCoffee } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';
import Link from 'next/link';

export const ContactSection = () => {
  return (
    <section id='contact' className={`${globalStyles.section} ${globalStyles.contact}`}>
      <div className={globalStyles.container}>
        <div className={styles.contactContent}>
          <h2 className={`${globalStyles.sectionTitle} ${styles.contactTitle}`}>
            <FiCoffee />
            Let's Connect
          </h2>
          <p>
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to chat!
          </p>
          <Link
            href='/Contact'
            className={styles.contactButton}
          >
            <CiMail size={20} />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
