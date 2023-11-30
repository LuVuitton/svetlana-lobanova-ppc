import { IconType } from 'react-icons/lib'
import { StandartProps } from '../commonTypes'
import s from './index.module.scss'
import cl from 'classnames'
import { SiFiverr, SiUpwork, SiLinkedin } from 'react-icons/si'
import { createElement } from 'react'
import ScreenEgg from '../ScreenEgg'

const networksData: NetworksData[] = [
  {
    id: 2,
    href: 'https://www.upwork.com/freelancers/~01bacf83c12a7fe0a3?viewMode=1',
    icon: SiUpwork,
  },
  {
    id: 3,
    href: 'https://www.linkedin.com/in/svetlana-lobanova-67b966142/',
    icon: SiLinkedin,
  },
  { id: 1, href: 'https://www.google.com/', icon: SiFiverr },
]

const SocialNetworks = ({ className }: StandartProps) => {
  return (
    <ScreenEgg type="left">
      <ul className={cl(className, s.list)}>
        {networksData.map((e) => (
          <li key={e.id} className={s.listItem}>
            <a href={e.href} target="_blank" className={s.listLink}>
              {createElement(e.icon, {
                color: 'black',
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks

type NetworksData = {
  id: number
  href: string
  icon: IconType
}
