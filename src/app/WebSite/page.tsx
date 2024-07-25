import React from 'react'
import globalStyles from '../page.module.css'
import styles from './website.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import src from '/public/monitor.png'

const Page = () => {
  return (
    <div className={globalStyles.main}>
      <div className={styles.worksContainer}>
        <h1 className={globalStyles.h1}>Web Site</h1>
        <ul className={styles.worksUl}>
          {website.map((work, key) => (
            <li
              key={key}
              className={styles.li}
            >
              <Link
                className={styles.linkWrapper}
                href={work.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className={styles.image}
                  width={200}
                  height={200}
                  src={work.image}
                  alt={work.title}
                />
              </Link>
              <h2 className={styles.title}>{work.title}</h2>
              <p>{work.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const website = [
  {
    'title': 'website01',
    'image': '/fakeSite01.png',
    'description': 'This site is a fake site. Made for production training.',
    'url': 'https://applications-106b1.web.app/'
  },
  {
    'title': 'website02',
    'image': '/fakeSite02.png',
    'description': 'This site is a fake site. Made for production training.',
    'url': 'https://website02-eight.vercel.app/'
  },
  {
    'title': 'website03',
    'image': src,
    'description': 'description',
    'url': ''
  }
]

export default Page