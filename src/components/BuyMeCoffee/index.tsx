import cl from 'classnames'

import { StandartProps } from '../commonTypes'
import ScreenEgg from '../ScreenEgg'
import s from './index.module.scss'

const BuyMeCoffee = ({ className }: StandartProps) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(s.buyCoffee, className)}>
        <a
          href="#"
          target="_blank"
          className={s.buyCoffeeButton}
          rel="noreferrer"
        >
            hello world ...
        </a>
      
      </div>
    </ScreenEgg>
  )
}

export default BuyMeCoffee
