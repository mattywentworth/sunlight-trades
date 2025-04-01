import React from 'react';
import styles from './AssetTotalChange.module.css';

export const AssetTotalChange = () => {

    //some conditional logic that automatically updates the word "gain" or "loss" based on delta vs cost basis
    //conditionally style the border of this element or some other element based on whether it's a current loss (red) or gain (green)?
    return (
        <div className={styles.container}>
            <div>Total Gain/Loss</div>
            <div>15%</div>
        </div>
    )
}