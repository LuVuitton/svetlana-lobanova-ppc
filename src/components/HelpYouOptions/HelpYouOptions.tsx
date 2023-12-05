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
  console.log('rerender')

  useEffect(() => {
    if (size.width < 800) {
      console.log('true')

      setIsMobile(true)
    }
  }, [size.width])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const arr = data.map((e) => (
        <Card
          key={e.id}
          style={{
            backgroundColor: '#213922',
            width: '320px',
            height: '450px',
            cursor: 'pointer',
          }}
          isStatic={isMobile}
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
  }, [isMobile])

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
