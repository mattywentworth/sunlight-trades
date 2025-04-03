import React from 'react';
import styles from './AssetCompanyHeader.module.css';

export const AssetCompanyHeader = ( { ticker, companyName } ) => {

    return (
        <div className={styles.container}>
            <img src='placeholder' alt='placeholder alt text'/>
            <div>
                <div>{ticker}</div>
                <div>{companyName}</div>
            </div>
        </div>
    )
}