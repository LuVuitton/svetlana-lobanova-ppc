import TheHeader from './Header/TheHeader'
import styles from '../styles/layout.module.scss'
import TheFooter from './Footer/TheFooter'

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      <div className={styles.mainWrapper}>
        <main className={styles.container}>{children}</main>
      </div>
        {/* <TheFooter /> */}
    </>
  )
}
