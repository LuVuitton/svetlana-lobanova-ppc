import React from 'react'

import styles from './index.module.scss'
import { headerLinks } from '../Header/TheHeader'
import Link from 'next/link'

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

  return <div className={burgerClasses}>{linksArr}</div>
}

export default BurgerMenu

interface BurgerMenuProps {
  show: boolean
  callback: () => void
}
