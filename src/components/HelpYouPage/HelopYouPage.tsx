import { SkillData } from '../HelpYouOptions/HelpYouOptions'
import styles from './index.module.scss'

const HelpYouPage = ({ data, callback }: Props) => {
  const { description, title, list2, list } = data

  return (
    <div className={styles.mainWrapper}>
      <article className={styles.post}>
        <div>
          <div
            className={styles.absoluteBg}
            // style={{
            //   backgroundImage:
            //     "url('https://www.primal.co.th/wp-content/uploads/23-Dec-Content-pic1.jpg')",
            // }}
          ></div>
        </div>
        <div className={styles.postContainer}>
          <div className={styles.postContent}>
            <span className={styles.postCategory}>
              <div>How I can help you</div>
              <div onClick={callback}>
                <button className={styles.btn}>back</button>
              </div>
            </span>

            <header>
              <h1 className={styles.postHeader}>
                <span>{title}</span>
              </h1>
            </header>

            <div className={styles.postText}>
              <div className={styles.description}> {description}</div>
              <div className={styles.list}>
                {list && (
                  <>
                    <h3>{list.title}</h3>
                    <ul>
                      {list.data.map((e) => (
                        <li key={e.id}>{e.text}</li>
                      ))}
                    </ul>
                  </>
                )}
                {list2 && (
                  <>
                    <h3>{list2.title}</h3>
                    <ul>
                      {list2.data.map((e) => (
                        <li key={e.id}>{e.text}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.postLink}>
            {/* <button className={styles.btn}>back</button> */}
          </div>
        </div>
      </article>
    </div>
  )
}

export default HelpYouPage

type Props = {
  data: SkillData
  callback: () => void
}
