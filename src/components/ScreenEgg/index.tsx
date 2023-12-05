import cl from 'classnames'
import { ReactNode } from 'react'

import { PropsWithChild, StandartProps } from '../commonTypes'
import s from './index.module.scss'

const ScreenEgg = ({ className, children, type }: Props) => {
  return (
    <div
      className={cl(
        className,
        s.screenEgg,
        type === 'right' ? s.screenEggRight : s.screenEggLeft,
      )}
    >
      {children}
    </div>
  )
}

export default ScreenEgg

type Props = {
  className?: string
  children: React.ReactNode
  type: 'right' | 'left'
}
