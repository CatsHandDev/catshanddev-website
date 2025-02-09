/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import globalStyles from '@/app/styles.module.scss';
import styles from './aboutSection.module.scss';
import { FaRegUser } from 'react-icons/fa';

export const AboutSection = () => {
  return (
    <section id='about' className={`${globalStyles.section} ${globalStyles.about}`}>
      <div className={globalStyles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={globalStyles.sectionTitle}>
              <FaRegUser />
              About Me
            </h2>
            <p>
              I'm a web engineer with 3+ years of experience building modern web applications.
              I specialize in React, Node.js, and cloud technologies.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source projects,
              writing technical articles, and mentoring aspiring developers.
            </p>
          </div>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Frontend</h3>
              <p>React, Next.js, TypeScript</p>
            </div>
            <div className={styles.skillCard}>
              <h3>Backend</h3>
              <p>Node.js, python, SQL</p>
            </div>
            <div className={styles.skillCard}>
              <h3>Cloud</h3>
              <p>Firebase, Vercel, CI/CD</p>
            </div>
            <div className={styles.skillCard}>
              <h3>Tools</h3>
              <p>Git, VS Code, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
