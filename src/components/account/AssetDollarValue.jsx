import React from 'react';
import styles from './AssetDollarValue.module.css';

export const AssetDollarValue = ( { costBasis, currentPrice } ) => {

    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.header}>Current Price</h3>
                <p>${currentPrice}</p>
            </div>
            <div>
                <h3 className={styles.header}>Cost Basis</h3>
                <p>${costBasis}</p>
            </div>
        </div>
    )
}