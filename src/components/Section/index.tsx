import { PropsWithChild } from '../commonTypes'
import s from './index.module.scss'

import cl from 'classnames'

const Section = ({ className, children}: PropsWithChild) => {
    return <section className={cl(className, s.section)}>{children}</section>
  }
  
  export default Section
  
