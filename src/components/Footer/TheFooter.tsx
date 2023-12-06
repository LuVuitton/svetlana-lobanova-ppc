// Footer.tsx
import React from 'react';

import styles from './index.module.scss';
import Link from 'next/link';

const TheFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <ul>
          <li>helloworld@gmail.com</li>
          <li>+3900000000</li>
          <li>Rozzano Italy</li>
          <li><Link href="./contacts">Contact Me</Link></li>
          {/* <li><Link href="#">Contact us</Link></li> */}
        </ul>
      </div>

      <div className={styles.row}>
         2023 || Designed By: Me
      </div>
    </footer>
  );
};

export default TheFooter;