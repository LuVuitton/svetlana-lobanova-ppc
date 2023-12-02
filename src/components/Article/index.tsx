import Link from 'next/link'
import { PropsWithChild } from '../commonTypes'
import s from './index.module.scss'
import cl from 'classnames'
import { AiOutlineArrowLeft } from "react-icons/ai";

const Article = ({ className, children, backUrl }: Props) => {
  return (
    <article className={cl(className, s.article)}>
      <Link href={backUrl}>
        <div className={s.articleBack}>
          <AiOutlineArrowLeft />
        </div>
      </Link>
      <div className={s.articleContent}>{children}</div>
    </article>
  )
}

export default Article

type Props = {
  className?:string
  children: React.ReactNode
  backUrl: string
}
