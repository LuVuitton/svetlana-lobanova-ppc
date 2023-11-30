import { PropsWithChild } from '../commonTypes'
import s from './index.module.scss'

import cl from 'classnames'

const Title = ({ className, children, type }: Props) => {

  if (type==='small') {
  return <h3 className={cl(className, s.title, s.titleSmall)}>{children}</h3>
    
  }
  return <h2 className={cl(className, s.title, s.titleMedium)}>{children}</h2>
}

export default Title

type Props = {
  className?: string
  children: React.ReactNode
  type: 'medium' | 'small'
}
