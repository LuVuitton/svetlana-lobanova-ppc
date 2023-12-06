import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import BurgerBtn from '../BurgerBtn/BurgerBtn'
import BurgerMenu from '../BurgerMenu'
import styles from './index.module.scss'

export const headerLinks = [
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
    herf: '/howcanihelp',
    linkName: 'how I can help you',
  },

  {
    id: 4,
    herf: '/certifications',
    linkName: 'certifications',
  },
  {
    id: 5,
    herf: '/portfolio',
    linkName: 'portfolio',
  },
  ,
]

const TheHeader: React.FC = () => {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800)
    }
    handleResize() // Устанавливаем начальное значение при загрузке страницы
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const burgerHandler = () => {
    setShowMenu(!showMenu)
  }

  const linksArr = headerLinks.map((e) => {
    return (
      <li key={e.id}>
        <Link
          href={e.herf}
          className={e.herf === router.pathname ? styles.active : ''}
        >
          {e.linkName}
        </Link>
      </li>
    )
  })
  return (
    <div className={styles.mainWrapper}>
      <header>
        {isMobile ? (
          <ul
            className={
              showMenu
                ? `${styles.mobileMenu} ${styles.showMenu}`
                : styles.mobileMenu
            }
          >
            <div className={styles.userName}>
              <Link href={'./contacts'}>Contact Me</Link>
            </div>
            <BurgerBtn isOpen={showMenu} callback={burgerHandler} />
          </ul>
        ) : (
          <ul className={styles.menu}>{linksArr}</ul>
        )}
      </header>
      <BurgerMenu show={showMenu} callback={burgerHandler} />
    </div>
  )
}

export default TheHeader
