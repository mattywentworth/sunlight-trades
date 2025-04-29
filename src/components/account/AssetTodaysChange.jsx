import React, { useState } from 'react';
import styles from './AssetTotalChange.module.css';

export const AssetTodaysChange = () => {

    const [marketOpenToday, setMarketOpenToday] = useState(true);
    
    const todaysDate = new Date();
    const dayOfWeek = todaysDate.getDay();
    let content;
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        content = <p>The market is not open today</p>
    } else {
        content = <p>X%</p>
    }

    return (
        <div className={styles.container}>
            <h3>Today's Gain/Loss</h3>
            {content}
        </div>
    )
}