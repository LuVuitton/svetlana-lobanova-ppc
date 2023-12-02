import Link from 'next/link'
import styles from './index.module.scss'
import cl from 'classnames'
import BgText from '../BgText/BgText'

const SplashPage = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.splash}>
        <div className={styles.splash_logo}>PPC</div>
        <div className={styles.splash_svg}>
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
        <div className={styles.splash_minimize}>
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
      </div>
      <div className={styles.text}>
        {/* <p> Svetlana</p>
        <p> Lobanova</p> */}
        <BgText/>
        <div className={styles.skills}>
          <p className={styles.min}>PPC specialist</p>
          <p className={styles.min}>Google Ads & Shopping</p>
          <p className={styles.min}>Google Tag Manager</p>
          <p className={styles.min}>GA4</p>
        </div>
        <p className={cl(styles.min, styles.aboutMe)}>
          I specialize in Internet marketing and have been working in this field
          for over <b>8 years</b>. As time went on, I focused specifically on{' '}
          <b>setting up and optimizing Google Ads</b>
          campaigns, staying up-to-date with the{' '}
          <b>latest trends and applying only proven strategies</b> that lead to
          conversions for every type of business.
        </p>
        <div className={styles.grid}>
          <Link href={'howcanihelp'}className={styles.gridItem}>How can I help you</Link>
          <Link href={'skills'}className={styles.gridItem}>skills</Link>
          <Link href={'portfolio'}className={styles.gridItem}>Portfolio</Link>
          <Link href={'certifications'}className={styles.gridItem}>Certifications</Link>
          <Link href={'blog'}className={styles.gridItem}>Blog</Link>
          <Link href={'contacts'}className={styles.gridItem}>Contacts</Link>
        </div>
      </div>
    </div>
  )
}

export default SplashPage

