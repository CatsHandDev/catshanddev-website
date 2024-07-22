import React from 'react'
import globalStyles from '../page.module.css'
import styles from './application.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import src from '/public/monitor.png'

const Page = () => {
  return (
    <div className={globalStyles.main}>
      <div className={styles.applicationsContainer}>
        <h1 className={globalStyles.h1}>Application</h1>
        <ul className={styles.applicationsUl}>
          {applications.map((application, key) => (
            <li
              key={key}
              className={styles.li}
            >
              <Link
                className={styles.linkWrapper}
                href={application.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className={styles.image}
                  width={200}
                  height={200}
                  src={application.image}
                  alt={application.title}
                />
              </Link>
              <h2 className={styles.title}>{application.title}</h2>
              <p>{application.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const applications = [
  {
    'title': 'Stop Watch',
    'image': '/stopwatch.png',
    'description': 'This app is a stop watch.',
    'url': 'https://stop-watch-nu-ecru.vercel.app/'
  },
  {
    'title': 'Pomodoro Timer',
    'image': '/pomodoro.png',
    'description': 'This app is a pomodoro timer.',
    'url': 'https://pomodoro-timer-black.vercel.app/'
  },
  {
    'title': 'Utility App',
    'image': '/utilityApp.png',
    'description': 'Web app for mobile',
    'url': 'https://app-portal-chi.vercel.app/'
  }
]

export default Page