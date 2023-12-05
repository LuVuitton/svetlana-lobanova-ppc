import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import styles from './index.module.scss' // Или имя вашего SCSS файла

// Import required modules
import { Pagination, Navigation } from 'swiper/modules'
import img from '../../../public/portfolio1.png'
import img2 from '../../../public/portfolio2.png'
import Image from 'next/image'

export const imagesData = [
  { src: img, alt: 'First' },
  { src: img2, alt: 'Second' },
]

export default function TheSwiper() {
  const images = imagesData.map((e) => (
    <SwiperSlide className={styles.swiperSlide}>
      <div className={styles.title}>title</div>
      <Image src={e.src} alt={e.alt} />

      <div className={styles.description}>
        Project description Installing GA4 using the tag manager, setting goals
        and audiences in Analytics. Setting up shopping campaigns for different
        categories of the site. Search campaigns are still in the works.
      </div>
    </SwiperSlide>
  ))
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {images}
      </Swiper>
    </>
  )
}
