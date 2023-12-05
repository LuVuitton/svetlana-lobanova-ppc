import React from 'react';

import styles from './index.module.scss';

interface BurgerMenuProps {
  show: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ show }) => {

  return (
    <div className={styles.container}>
      <nav>
        <ul style={{ visibility: show ? 'visible' : 'hidden', opacity: show ? '1' : '0' }}>
          <li>
            <a href="#chapter1">Chapter 01</a>
          </li>
          <li>
            <a href="#chapter2">Chapter 02</a>
          </li>
          <li>
            <a href="#chapter3">Chapter 03</a>
          </li>
          <li>
            <a href="#chapter4">Chapter 04</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
