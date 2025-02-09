import React from 'react'
import globalStyles from '@/app/styles.module.scss';
import styles from './experienceSection.module.scss';
import { FiBriefcase } from 'react-icons/fi';

export const ExperienceSection = () => {
  return (
    <section id='experience' className={`${globalStyles.section} ${globalStyles.experience}`}>
      <div className={globalStyles.container}>
        <h2 className={globalStyles.sectionTitle}>
          <FiBriefcase />
          Experience
        </h2>
        <div>
          {[
            {
              role: 'Web Engineer',
              company: 'Taishin Co,. Ltd.',
              period: '2022 - Present',
              description: 'Led development of multiple high-traffic web applications.',
            },
            {
              role: 'Personal Developer',
              company: '',
              period: '1997 - Present',
              description: 'When he was in junior high school, he learned the C language and jumped into the world of programming.',
            },
          ].map((job, index) => (
            <div key={index} className={styles.experienceCard}>
              <h3>{job.role}</h3>
              <div className={styles.jobMeta}>
                <span>{job.company}</span>
                <span>{job.period}</span>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
