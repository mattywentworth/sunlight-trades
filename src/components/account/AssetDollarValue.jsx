import React from 'react';
import styles from './AssetDollarValue.module.css';

export const AssetDollarValue = () => {

    return (
        <div className={styles.container}>
            <div>
                <div>Current Price</div>
                <div>$110</div>
            </div>
            <div>
                <div>Cost Basis</div>
                <div>$109</div>
            </div>
        </div>
    )
}