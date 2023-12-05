import Card from 'react-animated-3d-card'
import CardChild from '~/components/CardChild/CardChild'
import { Options } from '../HelpYouBlock/HelpYouBlock'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import { useWindowSize } from '~/hooks/useWindowsSize'

export default function HelpYouOptions({
  callback,
  data,
}: {
  callback: (option: Options) => void
  data: SkillData[]
}) {
  const [list, setList] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const size = useWindowSize()

  useEffect(() => {
    if (typeof window !== 'undefined' && size.width !== undefined) {
      console.log(typeof window !== 'undefined')
      console.log(size.width !== undefined)
      console.log(size.width)

      const arr = data.map((e) => (
        <Card
          key={e.id}
          style={{
            backgroundColor: '#213922',
            width: '320px',
            height: '450px',
            cursor: 'pointer',
          }}
          isStatic={size.width < 800}
          shineStrength={0.07}
          onClick={() => callback(e.optionName)}
          className={styles.card}
        >
          <CardChild
            title={e.title}
            description={e.description}
            option={e.optionName}
          />
        </Card>
      ))

      setList(arr)
    }
  }, [size.width])

  return <div className={styles.mainWrapper}>{list}</div>
}

export type SkillData = {
  optionName: Options
  id: number
  title: string
  description: string
  list?: {
    title: string
    data: {
      id: string
      text: string
    }[]
  }
  list2?: {
    title: string
    data: {
      id: string
      text: string
    }[]
  }
}
