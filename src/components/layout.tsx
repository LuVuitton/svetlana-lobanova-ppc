import TheHeader from './Header/TheHeader'
import styles from '../styles/layout.module.scss'
import BurgerBtn from './BurgerBtn/BurgerBtn'

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      <div className={styles.mainWrapper}>
        <main className={styles.container}>{children}</main>
        <div>footer</div>
      </div>
    </>
  )
}
