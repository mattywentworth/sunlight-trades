import React from 'react';
import styles from './PagePlaceholder.module.css';

export const PagePlaceholder = () => {

    return (
        <div>
            <div className={styles.firstContainer}>
                <h1>This is page content.</h1>
            </div>
            <div className={styles.secondContainer}>
                <h2>This is more page content.</h2>
            </div>
        </div>
    )
}