import React from 'react';
import styles from './HomePlaceholder.module.css';

export const HomePlaceholder = () => {

    return (
        <div className={styles.container}>
            <div className={styles.secondContainer}>
                <h1>This is homepage content</h1>
            </div>
            <div className={styles.thirdContainer}>
                <h2>Some more homepage content</h2>
            </div>
        </div>
    )
}