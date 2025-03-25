import React from 'react';
import styles from './SummaryCard.module.css';

export const SummaryCard = ( { test } ) => {

    return (
        <div className={styles.container}>
            <div>{test}</div>
        </div>
    )
}