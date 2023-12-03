import TheHeader from './Header/TheHeader'
import styles from '../styles/layout.module.scss'
import TheFooter from './Footer/TheFooter'

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.mainWrapper}>
      <TheHeader /> 
        <main className={styles.container}>{children}</main>
        {/* <TheFooter /> */}
      </div>
    </>
  )
}
