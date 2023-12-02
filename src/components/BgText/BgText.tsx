import React from 'react';
import styles from './index.module.scss';

const BgText: React.FC = () => {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.text}>
        Svetlana Lobanova
      </h1>
    </div>
  );
};

export default BgText;