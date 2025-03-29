import React from 'react'
import globalStyles from '@/app/styles.module.scss';
import styles from './project.module.scss';
import { FaCode } from 'react-icons/fa';
import { ProjectCard } from './ProjectCard';
import { CgWebsite } from "react-icons/cg";

const data = [
  {
    'type': 'site',
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
    'type': 'site',
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
    'type': 'app',
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
    'type': 'app',
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
    'type': 'site',
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
    'type': 'app',
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
    'type': 'app',
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
        <h3 className={styles.sectionSubtitle}>
          <CgWebsite size={30} />
          Web Site
        </h3>
        <div className={styles.projectsGrid}>
          {data.map((project, index) => (
            project.type === 'site' && (
              <div key={index}>
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            )
          ))}
        </div>

        <h3 className={styles.sectionSubtitle}>
          <CgWebsite size={30} />
          Applications
        </h3>
        <div className={styles.projectsGrid}>
          {data.map((project, index) => (
            project.type === 'app' && (
              <div key={index}>
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}