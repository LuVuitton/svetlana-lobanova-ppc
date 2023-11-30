import { StandartProps } from '../commonTypes'
import s from './index.module.scss'
import cl from 'classnames'

const Button = ({ className, children, disabled, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cl(className, s.button)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

type Props = {
  className: string
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}
