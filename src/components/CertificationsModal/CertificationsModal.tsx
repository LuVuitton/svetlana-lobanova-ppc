import React from 'react';
import styles from './index.module.scss'; // Подключаем стили
import Image from 'next/image';

interface CardProps {
    imageSrc: any;
    title: string;
    text: string;
}

const CertificationsModal: React.FC<CardProps> = ({ imageSrc, title, text }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
            <Image src={imageSrc} className={styles.cardImage} alt='certificate image'/>
            </div>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardText}>{text}</p>
            </div>
        </div>
    );
};

export default CertificationsModal;
