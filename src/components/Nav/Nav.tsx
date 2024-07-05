'use client'
import React, { useEffect, useState } from 'react'
import styles from './nav.module.scss'
import Link from 'next/link'

export const Nav = () => {
  const [isSelected, setIsSelected] = useState<string>('Home');

  useEffect(() => {
    const logo = document.getElementById('logo');
    logo?.addEventListener('click', function() {
      setIsSelected('Home');
    });

    return () => {
      logo?.removeEventListener('click', function() {
        setIsSelected('Home');
      });
    };
  }, []);

  return (
    <div className={styles.navContainer}>
      <ul className={styles.ul}>
        {links.map((link, key) => (
          <li
            key={key}
            className={`
              ${styles.li}
              ${isSelected === link.title && styles.active}
            `}
            onClick={() => setIsSelected(link.title)}
          >
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const links = [
  {
    'title': 'Home',
    'url': '/'
  },
  {
    'title': 'Profile',
    'url': '/Profile'
  },
  {
    'title': 'Web Site',
    'url': '/WebSite'
  },
  {
    'title': 'Application',
    'url': '/Application'
  },
  {
    'title': 'Stacks',
    'url': '/Stacks'
  },
  {
    'title': 'Contact',
    'url': '/Contact'
  }
]