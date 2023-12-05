import styles from '../styles/layout.module.scss'
import TheFooter from './Footer/TheFooter'
import TheHeader from './Header/TheHeader'

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
