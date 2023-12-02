import React from 'react'
import styles from './index.module.scss'
import { getClient } from '~/lib/sanity.client'
import { useRouter } from 'next/router'

const links = [
  {
    id: 1,
    herf: '/blog',
    linkName: 'blog',
  },
  {
    id: 2,
    herf: '/contacts',
    linkName: 'contacts',
  },
  {
    id: 3,
    herf: '/portfolio',
    linkName: 'portfolio',
  },
  {
    id: 4,
    herf: '/certifications',
    linkName: 'certificate',
  },
]

const TheHeader: React.FC = () => {
  const router = useRouter()

  // console.log(router)

  const linksArr = links.map((e) => {
    console.log("href: ", e.herf);
    console.log("pathname: ", router.pathname);
    
    return (
      <li key={e.id}>
        <a
          href={e.herf}
          className={e.herf === router.pathname ? styles.active : ''}
        >
          {e.linkName}
        </a>
      </li>
    )
  })

  // className={styles.active}
  return (
    <div className={styles.mainWrapper}>
      <header>
        <ul className={styles.menu}>
          {linksArr}
          <li className={styles.slider}></li>
        </ul>
      </header>
    </div>
  )
}

export default TheHeader
