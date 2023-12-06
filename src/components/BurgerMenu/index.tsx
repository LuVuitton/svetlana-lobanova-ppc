import Link from 'next/link'
import React from 'react'

import { headerLinks } from '../Header/TheHeader'
import styles from './index.module.scss'

const BurgerMenu: React.FC<BurgerMenuProps> = ({ show, callback }) => {
  const linksArr = headerLinks.map((e) => {
    return (
      <Link
        href={e.herf}
        onClick={() => callback()}
        className={styles.item}
        key={e.id}
      >
        <li>{e.linkName}</li>
      </Link>
    )
  })

  const burgerClasses = show ? `${styles.burger} ${styles.show}` : styles.burger

  return (
    <div className={burgerClasses}>
      {linksArr} <li className={styles.item}></li>
    </div>
  )
}

export default BurgerMenu

interface BurgerMenuProps {
  show: boolean
  callback: () => void
}
