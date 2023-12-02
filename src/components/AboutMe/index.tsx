import s from './index.module.scss'
import cl from 'classnames'


const aboutMeText = {
  title: 'Let me introduce myself briefly:',
  description:
    'I specialize in Internet marketing and have been working in this field for over 8 years. As time went on, I focused specifically on setting up and optimizing Google Ads campaigns, staying up-to-date with the latest trends and applying only proven strategies that lead to conversions for every type of business.',
}

const AboutMe = ({ className }: Props) => {
  return (
    <div className={cl(className, s.article)}>
      <div className={s.articleTitle}>{aboutMeText.title}</div>
      <div className={s.articleContent}>{aboutMeText.description}</div>
    </div>
  )
}

export default AboutMe

type Props = {
  className?: string
}
