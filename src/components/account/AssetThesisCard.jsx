import React from 'react';
import styles from './AssetThesisCard.module.css';

export const AssetThesisCard = ( { thesisDate, thesisText, confidence, action } ) => {

    return (
        <div className={styles.container}>
            <div className={styles.dateAndConfidenceContainer}>
                <div>{thesisDate}</div>
                {/*<div>Action: {action}</div>*/}
                <div>Confidence: {confidence.level}</div>
            </div>
            <div>{thesisText}</div>
        </div>
    )
}