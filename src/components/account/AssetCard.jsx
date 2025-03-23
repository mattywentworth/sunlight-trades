import React from 'react';
import styles from './AssetCard.module.css';

export const AssetCard = ({text}) => {

    return (
        <div className={styles.container}>
            <div>{text}</div>
        </div>
    )
}