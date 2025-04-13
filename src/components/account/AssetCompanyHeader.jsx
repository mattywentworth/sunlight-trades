import React from 'react';
import styles from './AssetCompanyHeader.module.css';

export const AssetCompanyHeader = ( { ticker, companyName, logo } ) => {

    return (
        <div className={styles.container}>
            <img className={styles.rowImage} src={logo} alt={`Logo for ${companyName}`}/>
            <div>
                <div>{ticker}</div>
                <div>{companyName}</div>
            </div>
        </div>
    )
}