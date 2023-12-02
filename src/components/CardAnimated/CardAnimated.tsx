import { useState } from 'react'
import CertificationsModal from '../CertificationsModal/CertificationsModal'
import ModalDialog from '../Modal/Modal'
import styles from './index.module.scss'
// import imgAds from '../../../public/Google_Ads_logo.png'
import imgAds from '../../../public/Google_Ads_logo-min.png'
// import imgSearch from '../../../public/Google_Search_logo.png'
import imgSearch from '../../../public/Google_Search_logo-min.png'
// import imgShoping from '../../../public/Google_Shoping_logo.png'
import imgShoping from '../../../public/Google_Shoping_logo-min.png'

const cards: Card[] = [
  {
    id: 1,
    className: styles.card0,
    title: 'Google Ads Display',
    shortDesription:
      'The Display Advertising exam covers advanced concepts and best practices for optimizing Display campaigns',
    detailedDescription:
      'The Display Advertising exam covers advanced concepts and best practices for creating, managing, measuring, and optimizing Display campaigns. Learn more',
    img: imgAds,
  },
  {
    id: 2,
    className: styles.card1,
    title: 'Google Ads Search',
    shortDesription:
      'The Search Advertising exam covers essential and advanced concepts, focusing on optimizing search ad campaigns',
    detailedDescription:
      'The Search Advertising exam covers basic and advanced concepts, including best practices for creating, managing, measuring, and optimizing search ad campaigns across the Search Network. Learn more',
    img: imgSearch,
  },
  {
    id: 3,
    className: styles.card2,
    title: 'Shopping Ads',
    shortDesription:
      'Shopping Ads Certification holders excel in creating, optimizing, and leveraging various ads to connect retailers with shoppers for increased traffic and conversions.',
    detailedDescription:
      'Shopping Ads Certification holders excel in creating and optimizing campaigns to expand reach and drive conversions. They expertly  manage Shopping and Smart Shopping campaigns, leverage Local  Inventory and Catalog ads to boost online and in-store traffic,  optimize Google solutions for retailer-shopper connections, and  harness the influence of Showcase Shopping ads on consumers.',
    img: imgShoping,
  },
]

const CardAnimated: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  const handleCardClick = (card) => {
    setSelectedCard(card)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCard(null)
  }

  const mappedCards = cards.map((e) => (
    <div
      className={`${styles.card} ${e.className}`}
      key={e.id}
      onClick={() => handleCardClick(e)}
    >
      <div className={styles.border}>
        <h2 className={styles.title}>{e.title}</h2>
        <div className={styles.icons}>{e.shortDesription}</div>
      </div>
    </div>
  ))

  return (
    <>
      <div className={styles.container}>{mappedCards}</div>
      {showModal && selectedCard && (
        <ModalDialog show={showModal} onClose={closeModal}>
          <CertificationsModal
            imageSrc={selectedCard.img}
            text={selectedCard.detailedDescription}
            title={selectedCard.title}
          />
        </ModalDialog>
      )}
    </>
  )
}

export default CardAnimated

interface Card {
  id: number
  className: string
  title: string
  shortDesription: string
  detailedDescription: string
  img: any
}
