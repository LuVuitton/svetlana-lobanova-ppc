import { useEffect, useState } from 'react'
import Card from 'react-animated-3d-card'

import CardChild from '~/components/CardChild/CardChild'

import { Options } from '../HelpYouBlock/HelpYouBlock'
import styles from './index.module.scss'

export default function HelpYouOptions({
  callback,
  data,
}: {
  callback: (option: Options) => void
  data: SkillData[]
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent));
    };

    if (typeof window !== 'undefined') {
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile); // Проверяем при изменении размера окна
    }

    return () => {
      window.removeEventListener('resize', checkIsMobile); // Очищаем слушатель при размонтировании компонента
    };
  }, []);

  
  const list = data.map((e) => (
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
      
    >
      <CardChild title={e.title} description={e.description} option={e.optionName} />
    </Card>
  ))

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
