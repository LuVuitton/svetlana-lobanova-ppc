import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import BurgerBtn from '../BurgerBtn/BurgerBtn'
import BurgerMenu from '../BurgerMenu'

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

  const burgerHandler = ()=> {
    setShowMenu(!showMenu)
  }

  const linksArr = links.map((e) => {
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
  return (
    <div className={styles.mainWrapper}>
      <header>
        {isMobile ? (
          <ul className={styles.mobileMenu}>
            <BurgerBtn isOpen={showMenu} callback={burgerHandler} />
            <div className={styles.userName}>Svetlana Lobanova</div>
          </ul>
        ) : (
          <ul className={styles.menu}>
            {linksArr}
            <li className={styles.slider}></li>
          </ul>
        )}
      </header>
      <BurgerMenu show={showMenu}/>

    </div>
  )
}

export default TheHeader
