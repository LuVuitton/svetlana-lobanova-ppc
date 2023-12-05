import cl from 'classnames'

import { PropsWithChild } from '../commonTypes'
import s from './index.module.scss'

const Section = ({ className, children}: PropsWithChild) => {
    return <section className={cl(className, s.section)}>{children}</section>
  }
  
  export default Section
  
