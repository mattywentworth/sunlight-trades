import React from 'react';
import styles from './Bought.module.css';
import { AssetCard } from './AssetCard';
import { AccountHeader } from './AccountHeader';
import { testBoughtArray } from '../../utils/testBoughtList';

export const Bought = () => {

    const element = testBoughtArray[0];
    const testArray = ['card 1', 'card 2', 'card 3', 'card 4', 'card 5', 'card 6', 'card 7']

    return (
        <div>
            <AccountHeader/>
            <div className={styles.assetCardContainer}>
                {/*<AssetCard img={element.img} companyName={element.companyName} ticker={element.ticker} totalGainLoss={element.totalGainLoss} todaysGainLoss={element.todaysGainLoss} currentPrice={element.currentPrice} purchasePrice={element.purchasePrice}/>*/}
                {testBoughtArray.map(element => {
                    return <AssetCard img={element.img} companyName={element.companyName} ticker={element.ticker} totalGainLoss={element.totalGainLoss} todaysGainLoss={element.todaysGainLoss} currentPrice={element.currentPrice} purchasePrice={element.purchasePrice}/>
                })}
            </div>
        </div>
    )
}

