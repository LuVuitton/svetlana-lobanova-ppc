// Footer.tsx
import Link from 'next/link'
import React from 'react'

import styles from './index.module.scss'

const TheFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <ul>
          <li>Email: info@example.com</li>
          <li>Phone: +1234567890</li>
          <li>Italy, Postal Code</li>
          <li>
            <Link href="./contacts">Contact Me</Link>
          </li>
        </ul>
      </div>

      <div className={styles.row}>
        © 2023 Company Name. All rights reserved.
      </div>
    </footer>
  )
}

export default TheFooter
