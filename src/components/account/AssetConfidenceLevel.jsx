import React from 'react';
import styles from './AssetConfidenceLevel.module.css'

export const AssetConfidenceLevel = () => {

    //set conditional css so that it shows as "current" only if no edits have been made and "current" vs "initial" if edits have been made

    return (
        <div className={styles.container}>
            <button className={styles.update}>Update</button>
            <div>Confidence Level</div>
            <div className={styles.ratingContainer}>
                <div>
                    <div>Current</div>
                    <div>X/10</div>
                </div>
                <div>
                    <div>Initial</div>
                    <div>Y/10</div>
                </div>
            </div>
        </div>
    )
}