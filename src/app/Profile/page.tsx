import React from 'react'
import globalStyles from '../page.module.css'
import styles from './profile.module.scss'
import Image from 'next/image'

const Page = () => {
  return (
    <div className={globalStyles.main}>
      <h1 className={globalStyles.h1}>Profile</h1>
      <div className={styles.profileContainer}>
        <Image
          className={styles.image}
          width={150}
          height={150}
          src='/cathand.png'
          alt='profile image'
        />
        <div>
          <p>Hi guys!</p>
          <p>My name is Genba Cat.</p>
          <p>I&apos;m web and software engineer.</p>
          <p>Here I will introduce the Stacks and works that I use in my work.</p>
          <p>Welcome to my website !!</p>
        </div>
      </div>
    </div>
  )
}

export default Page