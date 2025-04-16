import React from 'react';
import styles from './AssetThesis.module.css';
import { AssetThesisCard } from '../account/AssetThesisCard';

export const AssetAIAnalysis = ( { aiAnalysis, confidenceLevel } ) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerSides}></div>
                <h3>AI Thesis Analysis</h3>
                <div className={styles.headerSides}>
                    <button className={styles.update}>Update</button>
                </div>
            </div>
            {aiAnalysis.map((analysisElement, index) => {
                //alert(index);
                return <AssetThesisCard thesisDate={analysisElement.dateAddedReadable} thesisText={analysisElement.aiAnalysis} confidence={confidenceLevel[index]} action={analysisElement.action}/> 
            })}
        </div>
    )
}