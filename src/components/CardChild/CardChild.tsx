import { Options } from '../HelpYouBlock/HelpYouBlock'
import styles from './index.module.scss'

const CardChild = ({ title, description, option }: CardChild) => {


  let classOption = ''

  switch (option) {
    case 'analytics':
      classOption = styles.analytics
      break
    case 'ads':
      classOption = styles.ads
      break
    case 'setup':
      classOption = styles.setup
      break
    default:
      classOption = ''
      break
  }

  return (
    <div className={styles.cardChildWrapper}>
      <div className={`${styles.container} ${classOption}`}></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}> {description} </div>
      <div className={styles.more}>more...</div>
    </div>
  )
}

export default CardChild

type CardChild = {
  title: string
  description: string
  option: Options
}
