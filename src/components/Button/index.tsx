import cl from 'classnames'

import s from './index.module.scss'

const Button = ({ className, children, disabled, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cl(className, s.button)}
      disabled={disabled}
    >
      <span className={s.spinner}></span>
      {children}
    </button>
  )
}

export default Button

type Props = {
  className?: string
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

// ;<button className={styles.button}>Configure</button>
