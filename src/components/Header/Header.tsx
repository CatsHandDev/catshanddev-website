/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const data = [
  { 'url': '/#about', 'title': 'About' },
  { 'url': '/#projects', 'title': 'Projects' },
  { 'url': '/#experience', 'title': 'Experience' },
  { 'url': '/Contact', 'title': 'Contact' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Link
        className={styles.logo}
        href='/'
      >
        Cat's Hand DEV
      </Link>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        {data.map((prevData, index) => (
          <Link
            key={index}
            className={styles.content}
            href={prevData.url}
          >
            {prevData.title}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`${styles.menuButton} ${isOpen ? styles.openArrow : ''}`}
        onClick={toggleDrawer}
        aria-label="Toggle menu"
      >
        <IoIosArrowForward size={24} />
      </button>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <button
          className={styles.closeButton}
          onClick={toggleDrawer}
          aria-label="Close menu"
        >
          {/* <IoIosArrowBack size={24} /> */}
        </button>
        <nav className={styles.drawerNav}>
          {data.map((prevData, index) => (
            <Link
              key={index}
              className={styles.drawerContent}
              href={prevData.url}
              onClick={toggleDrawer}
            >
              {prevData.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={toggleDrawer}
        />
      )}
    </header>
  )
}