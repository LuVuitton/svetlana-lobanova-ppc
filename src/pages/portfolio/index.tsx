import { useState } from 'react'
import CertificationsModal from '~/components/CertificationsModal/CertificationsModal'
import ModalDialog from '~/components/Modal/Modal'
import imgAds from '../../../public/Google_Ads_logo.png'
import imgSearch from '../../../public/Google_Search_logo.png'
import imgShoping from '../../../public/Google_Shoping_logo.png'

const certificateData = [
  {
    imageSrc: imgAds,
    text: 'The Display Advertising exam covers advanced concepts and best practices for creating, managing, measuring, and optimizing Display campaigns. Learn more',
    title: 'Google Ads Display Certification',
  },
  {
    imageSrc: imgSearch,
    text: 'The Search Advertising exam covers basic and advanced concepts, including best practices for creating, managing, measuring, and optimizing search ad campaigns across the Search Network. Learn more',
    title: 'Google Ads Search Certification',
  },
  {
    imageSrc: imgShoping,
    text: 'As described by Google, the holders of the Shopping Ads Certification know how to create and optimize Shopping campaigns that maximize reach and conversions. Among their skills: understanding how Shopping campaigns can promote online and local inventory and how Smart Shopping campaigns can meet marketing objectives; using Local Inventory and Local Catalog ads to drive online and in-store traffic; optimizing Google solutions to help connect retailers with shoppers and boost business; leveraging the impact of Showcase Shopping ads on consumers at the start of their purchase journey.',
    title: 'Shopping Ads Certification',
  },
]

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false)

  const onclickHandler = () => {
    setShowModal(true)
  }

  return (
    <div>
      <button onClick={onclickHandler}>click</button>
      <ModalDialog show={showModal} onClose={() => setShowModal(false)}>
        <CertificationsModal
          imageSrc={imgAds}
          text="description"
          title="GOOOOGLE"
        />
      </ModalDialog>
    </div>
  )
}
