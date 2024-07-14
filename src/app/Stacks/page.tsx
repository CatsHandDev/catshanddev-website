import React from 'react'
import globalStyles from '../page.module.css'
import styles from './stacks.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import src from '/public/monitor.png'

const Page = () => {
  return (
    <div className={globalStyles.main}>
      <h1 className={globalStyles.h1}>Stacks</h1>
      <ul className={styles.stacksUl}>
          {stacks.map((prevStacks, key) => (
            <li
              key={key}
              className={styles.li}
            >
              <div className={styles.stacksContainer}>
                <h2 className={styles.title}>{prevStacks.title}</h2>
                <ul className={styles.stackUl}>
                  {prevStacks.stack.map((prevStack: any, key: any) => (
                    <li key={key}>
                      <Link
                        href={prevStack.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Image src={prevStack.photo} width={50} height={50} alt={prevStack.name}/>
                        <p>{prevStack.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

const stacks = [
  {
    'title': 'Language',
    'stack': [
      {
        'name': 'HTML5',
        'photo': '/Html5.png',
        'url': 'https://developer.mozilla.org/ja/docs/Web/HTML'
      },
      {
        'name': 'CSS3',
        'photo': '/Css3.png',
        'url': 'https://developer.mozilla.org/ja/docs/Web/CSS'
      },
      {
        'name': 'JavaScript',
        'photo': '/JavaScript.png',
        'url': 'https://developer.mozilla.org/ja/docs/Web/JavaScript'
      },
      {
        'name': 'TypeScript',
        'photo': '/typescript.svg',
        'url': 'https://www.typescriptlang.org/'
      },
      {
        'name': 'Python',
        'photo': '/Python.png',
        'url': 'https://www.python.org/'
      },
      {
        'name': 'MQL4',
        'photo': '/mt4.webp',
        'url': 'https://docs.mql4.com/runtime'
      }
    ]
  },
  {
    'title': 'Libraries / Framework',
    'stack': [
      {
        'name': 'React',
        'photo': '/React.png',
        'url': 'https://ja.react.dev/'
      },
      {
        'name': 'Next',
        'photo': '/nextjs.svg',
        'url': 'https://nextjs.org/'
      },
      {
        'name': 'Material UI',
        'photo': '/mui.png',
        'url': 'https://mui.com/material-ui/react-accordion/'
      },
      {
        'name': 'Material Icons',
        'photo': '/mui.png',
        'url': 'https://mui.com/material-ui/material-icons/'
      }
    ]
  },
  {
    'title': 'Cloud / Utilities',
    'stack': [
      {
        'name': 'GitHub',
        'photo': '/Github.png',
        'url': 'https://github.co.jp/'
      },
      {
        'name': 'Vercel',
        'photo': '/vercel.png',
        'url': 'https://vercel.com/'
      },
      {
        'name': 'Firebase',
        'photo': '/Firebase.svg',
        'url': 'https://firebase.google.com/?hl=ja'
      }
    ]
  },
  {
    'title': 'AI',
    'stack': [
      {
        'name': 'ChatGPT',
        'photo': '/chatGPT.png',
        'url': 'https://chatgpt.com/'
      },
      {
        'name': 'Claude',
        'photo': '/claude-ai-icon.webp',
        'url': 'https://claude.ai/new'
      },
    ]
  },
]

export default Page