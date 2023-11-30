import { PropsWithChild, StandartProps } from '../commonTypes'
import s from './index.module.scss'
import cl from 'classnames'


const PostGrid = ({ className, children}:PropsWithChild) => {
    return <div className={cl(className, s.postGrid)}>{children}</div>
  }
  
  export default PostGrid
  