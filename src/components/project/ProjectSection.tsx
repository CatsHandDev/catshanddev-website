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
    'image': '',
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
    'image': '',
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
    'image': '/multi.png',
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
    'image': '/advance.png',
    'description': 'Developed for my own training.',
    'stacks': [
      'React',
      'Vite',
    ]
  },
  {
    'name': 'G-select Co., Ltd. Web site',
    'url': 'https://gojo-motors.vercel.app/',
    'github': 'https://github.com/CatsHandDev/gojo-motors',
    'image': '/gselect.png',
    'description': 'Developed for my own training.',
    'stacks': [
      'Next.js',
    ]
  },
  {
    'name': 'Command Generator',
    'url': 'https://command-generator-zeta.vercel.app/',
    'github': 'https://github.com/CatsHandDev/command-generator',
    'image': '/commandGenerator.png',
    'description': 'Assists with the complicated installation of libraries for windows.',
    'stacks': [
      'Vite',
    ]
  },
  {
    'name': 'Takiron serial-image-search ',
    'url': 'https://serial-image-search.vercel.app/',
    'github': 'https://github.com/CatsHandDev/serial-image-search',
    'image': '/takiron.png',
    'description': 'A convenient tool to quickly search and download Takiron product drawings by product code. Boost efficiency in design and construction!',
    'stacks': [
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
                  <Link
                    href={project.url}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                  <Image
                    src={project.image || `/photo-1460925895917-afdab827c52f.jpeg`}
                    width={800}
                    height={400}
                    alt={project.name}
                  />
                  <div className={styles.projectOverlay}>

                      <FiExternalLink size={22} />
                  </div>
                  </Link>

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
                    className={styles.githubLink}
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
