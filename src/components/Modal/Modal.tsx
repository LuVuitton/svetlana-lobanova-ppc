// ModalDialog.tsx

import React from 'react'
import { IoMdClose } from 'react-icons/io'

import styles from './index.module.scss'

interface ModalDialogProps {
  show?: boolean
  onClose: () => void
  children?: React.ReactNode
}

const ModalDialog: React.FC<ModalDialogProps> = ({
  show,
  onClose,
  children,
}) => {
  const modalClassName = show
    ? `${styles.modalOverlay} ${styles.show}`
    : styles.modalOverlay
  const contentClassName = show
    ? `${styles.modalContent} ${styles.show}`
    : styles.modalContent

  return (
    <div className={modalClassName} onClick={onClose}>
      <div className={contentClassName} onClick={(e) => e.stopPropagation()}>
        {children}
        <button
          onClick={onClose}
          aria-label="close"
          className={styles.closeButton}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  )
}

export default ModalDialog
