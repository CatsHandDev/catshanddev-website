import React from 'react'
import globalStyles from '@/app/styles.module.scss';
import styles from './project.module.scss';
import { FaCode } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithubAlt } from 'react-icons/fa';

const data = [
  {
    'name': 'Taishin Co., Ltd. Web Site',
    'url': 'https://taishin1977.jp/#',
    'github': '',
    'photo': '',
    'description': 'A full-stack web application built with Next.js, postgres, and Xserver. Management is currently being transferred.',
    'stacks': [
      'Next.js',
      'sql',
      'Xserver',
    ]
  },
  {
    'name': 'Taishin Co., Ltd. E-Commerce',
    'url': 'https://www.taneha-honten.com/',
    'github': '',
    'photo': '',
    'description': 'Created using html, css, and javascript on the makeshop platform.',
    'stacks': [
      'html',
      'css',
      'javascript',
    ]
  },
  {
    'name': 'Utility App for mobile',
    'url': 'https://app-portal-chi.vercel.app/',
    'github': 'https://github.com/CatsHandDev/app-portal',
    'photo': '',
    'description': 'I was interested in mobile app development and developed a simple mobile app in a familiar environment before starting.',
    'stacks': [
      'Next.js',
      'Firebase',
    ]
  },
  {
    'name': 'StopWatch App for mobile',
    'url': 'https://advanced-stop-watch.vercel.app/',
    'github': 'https://github.com/CatsHandDev/AdvancedStopWatch',
    'photo': '',
    'description': 'Developed for your own training.',
    'stacks': [
      'React',
      'Vite',
    ]
  },
];

export const ProjectSection = () => {
  return (
    <section id='projects' className={`${globalStyles.section} ${globalStyles.projects}`}>
      <div className={globalStyles.container}>
        <h2 className={globalStyles.sectionTitle}>
          <FaCode />
          Featured Projects
        </h2>
        <div className={styles.projectsGrid}>
          {data.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div>
                <div className={styles.projectImage}>
                  <Image
                    src={`/photo-1460925895917-afdab827c52f.jpeg`}
                    width={800}
                    height={400}
                    alt={project.name}
                  />
                  <div className={styles.projectOverlay}>
                    <Link
                      href={project.url}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <FiExternalLink size={22} />
                    </Link>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.name}</h3>
                  <p>
                    {project.description}
                  </p>
                </div>
              </div>

              <div className={styles.tagContainer}>
                <div className={styles.tags}>
                  {project.stacks.map((stack) => (
                    <span key={index}>{stack}</span>
                  ))}
                </div>
                {project.github && (
                  <Link
                    href={project.github}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <FaGithubAlt size={24} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
