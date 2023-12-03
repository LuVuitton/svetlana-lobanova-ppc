import BlogCard from '~/components/BlogCard/BlogCard'

import img1 from '../../../public/demo.jpeg'
import img2 from '../../../public/bgText.jpeg'
import img3 from '../../../public/demo1.avif'
import Link from 'next/link'

const data = [
  {
    id: 1,
    img: img1,
    date: '25 octobre',
    title: 'Exploring the Unseen Wonders',
    shortDescription:
      'Embark on an adventure to discover hidden gems, breathtaking landscapes, and untold stories across the globe. Unveil the beauty of the unknown.',
  },
  {
    id: 2,
    img: img2,
    date: '24 may',
    title: 'Journey Through Time and Culture',
    shortDescription:
      'Immerse yourself in diverse cultures, ancient traditions, and modern marvels. Experience history and innovation intertwine in captivating destinations. marvels. Experience history and innovation intertwine in captivating destinations. marvels. Experience history and innovation intertwine in captivating destinations.',
  },
  {
    id: 3,
    img: img3,
    date: '10 August',
    title: "Nature's Serenit",
    shortDescription:
      'Embark on an adventure through nature’s serene landscapes and breathtaking beauty. Explore lush forests, tranquil rivers, and majestic mountains, offering an escape to peaceful solitude and harmony.',
  }
]

export default function Portfolio() {
  // const list = data.map((e) => (

  //   <BlogCard
  //     date={e.date}
  //     description={e.shortDescription}
  //     img={e.img}
  //     title={e.title}
  //   />

  // ))

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     flexWrap: 'wrap',
    //     gap: '20px',
    //   }}
    // >
    //   {list}
    // </div>
    <div>portfolio</div>
  )
}
