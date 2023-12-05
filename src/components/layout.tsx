import TheHeader from './Header/TheHeader'
import styles from '../styles/layout.module.scss'
import TheFooter from './Footer/TheFooter'

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.bg}></div>
        <div className={styles.header}>
          <TheHeader />
        </div>

        <main className={styles.container}>{children}</main>
        <div className={styles.footer}>
          <TheFooter />
        </div>
      </div>
    </>
  )
}
