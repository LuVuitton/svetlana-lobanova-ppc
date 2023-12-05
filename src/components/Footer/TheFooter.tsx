// Footer.tsx
import React from 'react';

import styles from './index.module.scss';

const TheFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
      </div>

      <div className={styles.row}>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>

      <div className={styles.row}>
        INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh 
      </div>
    </footer>
  );
};

export default TheFooter;