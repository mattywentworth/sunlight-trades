import React from 'react';
import styles from './SectionTwoCard.module.css';

export const SectionTwoCard = ( {textTitle, textText} ) => {

    const contentTitle = textTitle;
    const contentText = textText;

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.title}>{contentTitle}</div>
                <div>{contentText}</div>
            </div>
        </div>
    )
}