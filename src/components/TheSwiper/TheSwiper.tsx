import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import img from '../../../public/portfolio1.png'
import img2 from '../../../public/portfolio2.png'
import styles from './index.module.scss'

export const portfolioData = [
  {
    id: 1,
    image: {
      src: img,
    },
    title: 'Google Ads || Online store of spare parts for household appliances',
    description:
      'Installing GA4 using the tag manager, setting goals and audiences in Analytics. Setting up shopping campaigns for different categories of the site. Search campaigns are still in the works.',
  },
  {
    id: 2,
    image: { src: img2 },
    title: 'Google Ads | Power tool parts store',
    description:
      'Setting up search campaigns for categories of the site that were not previously involved in advertising. Attracting buyers during the grass mowing season to buy spare parts for trimmers and lawn mowers. Smart shopping campaigns, Performance Max, and a general search campaign were used.',
  },
]

export default function TheSwiper() {
  const images = portfolioData.map((e) => (
    <SwiperSlide zoom className={styles.swiperSlide} key={e.id}>
      <div className={styles.title}>{e.title}</div>
      <Image src={e.image.src} alt={e.title} />

      <div className={styles.description}>{e.description}</div>
    </SwiperSlide>
  ))
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation
        modules={[Pagination, Navigation, Zoom]}
        className={styles.mySwiper}
        zoom
      >
        {images}
      </Swiper>
    </>
  )
}
