import { PropsWithChild } from '../commonTypes'
import s from './index.module.scss'
import cl from 'classnames'

const Article = ({ className, children }:PropsWithChild) => {


  return <article className={cl(className, s.article)}>{children}</article>
}

export default Article



