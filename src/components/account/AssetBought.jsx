import React from 'react';
import styles from './AssetBought.module.css';
import { AssetCompanyHeader } from './AssetCompanyHeader';
import { AssetTotalChange } from './AssetTotalChange';
import { AssetConfidenceLevel } from './AssetConfidenceLevel';
import { AssetTodaysChange } from './AssetTodaysChange';
import { AssetDollarValue } from './AssetDollarValue';
import { AssetThesis } from './AssetThesis';
import { AssetAIAnalysis } from './AssetAIAnalysis';

export const AssetBought = () => {

    return (
        <div>
            <AssetCompanyHeader/>
            <div className={styles.performance}>
                <AssetTotalChange/>
                <AssetConfidenceLevel/>
                <AssetTodaysChange/>
                <AssetDollarValue/>
            </div>
            <div className={styles.descriptions}>
                <AssetThesis/>
                <AssetAIAnalysis/>
            </div>
        </div>
    )
}