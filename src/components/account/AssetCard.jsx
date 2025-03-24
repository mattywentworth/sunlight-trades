import React from 'react';
import styles from './AssetCard.module.css';

export const AssetCard = ({img, companyName, ticker, totalGainLoss, todaysGainLoss, currentPrice, purchasePrice}) => {

    //turn soome of this into a table data element?
    return (
        <div className={styles.container}>
            <img src={img}></img>
            <div>
                <p>{ticker}</p>
                <p>{companyName}</p>
            </div>
            <div>
                <p>Total Gain/Loss</p> {/* Make this text conditional based on the positive or negative value of the prop */}
                <p>{totalGainLoss}%</p>
            </div>
            <div>
                <p>Today's Gain/Loss</p> {/* Make this text conditional based on the positive or negative value of the prop */}
                <p>{todaysGainLoss}%</p>
            </div>
            <div>
                <p>Current Value</p> {/* Make this text conditional based on the positive or negative value of the prop */}
                <p>${currentPrice}</p>
            </div>
            <div>
                <p>Cost Basis</p> {/* Make this text conditional based on the positive or negative value of the prop */}
                <p>${purchasePrice}</p>
            </div>
        </div>
    )
}