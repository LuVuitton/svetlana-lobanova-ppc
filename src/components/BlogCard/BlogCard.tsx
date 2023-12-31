// CardComponent.tsx

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { formatDate } from '~/utils'

import styles from './index.module.scss'

const BlogCard: React.FC<Props> = ({ title, description, img, date, link }) => {
  return (

   <Link href={link} className={styles.mainWrapper}>
      <div className={styles.imgWrapper}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            src={img}
            alt="article cover"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.date}>{formatDate(date)}</div>
      </Link>

  )
}

export default BlogCard

interface Props {
  title: string
  description: string
  img: any
  date: string
  link: string
}
