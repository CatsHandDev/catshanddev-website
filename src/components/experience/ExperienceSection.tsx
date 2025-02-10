import React from 'react'
import globalStyles from '@/app/styles.module.scss';
import styles from './experienceSection.module.scss';
import { FiBriefcase } from 'react-icons/fi';

const data = [
  {
    role: 'Web Engineer',
    company: 'Taishin Co,. Ltd.',
    period: '2022 - Present',
    description: 'Led development of multiple web applications.',
  },
  {
    role: 'Personal Developer',
    company: '',
    period: '2004 - 2011',
    description: 'Developing and providing trading software add-ons using the MQL language to 2channel users.',
  },
  {
    role: 'Personal Developer',
    company: '',
    period: '1997 - Present',
    description: 'When he was in junior high school, he learned the C language and jumped into the world of programming.',
  },
];

export const ExperienceSection = () => {
  return (
    <section id='experience' className={`${globalStyles.section} ${globalStyles.experience}`}>
      <div className={globalStyles.container}>
        <h2 className={globalStyles.sectionTitle}>
          <FiBriefcase />
          Experience
        </h2>
        <div>
          {data.map((job, index) => (
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
