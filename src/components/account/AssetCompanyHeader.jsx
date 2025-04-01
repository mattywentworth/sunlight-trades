import React from 'react';
import styles from './AssetCompanyHeader.module.css';

export const AssetCompanyHeader = () => {

    return (
        <div className={styles.container}>
            <img src='placeholder' alt='placeholder alt text'/>
            <div>
                <div>TICKR</div>
                <div>Official Company Name</div>
            </div>
        </div>
    )
}