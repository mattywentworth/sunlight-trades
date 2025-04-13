import React from 'react';
import styles from './AssetConfidenceLevel.module.css'
import { AssetConfidenceLevelUpdateInput } from './AssetConfidenceLevelUpdateInput';

export const AssetConfidenceLevel = ( { confidenceLevel, updateInProgress, sellInProgress, handleUpdateClick, updatedConfidenceLevel, setUpdatedConfidenceLevel, handleConfidenceLevelSave, confidenceLevelSaved } ) => {

    //set conditional css so that it shows as "current" only if no edits have been made and "current" vs "initial" if edits have been made
    const numConfidenceLevels = confidenceLevel.length;
    const initialConfidenceLevel = confidenceLevel[0].level;
    const mostRecentConfidenceLevel = confidenceLevel[numConfidenceLevels - 1].level;

    return (
        <div className={styles.container}>
            
            <div className={styles.header}>
                <div className={styles.headerSides}></div>
                <div>Confidence Level</div>
                <div className={styles.headerSides}>
                    <button className={styles.update} onClick={handleUpdateClick}>Update</button>
                </div>
            </div>
            <AssetConfidenceLevelUpdateInput updateInProgress={updateInProgress} sellInProgress={sellInProgress} updatedConfidenceLevel={updatedConfidenceLevel} setUpdatedConfidenceLevel={setUpdatedConfidenceLevel} handleConfidenceLevelSave={handleConfidenceLevelSave} confidenceLevelSaved={confidenceLevelSaved} handleUpdateClick={handleUpdateClick}/>
            <div className={styles.ratingContainer}>
                <div>
                    <h3>Current</h3>
                    <p>{mostRecentConfidenceLevel}/10</p>
                </div>
                <div>
                    <h3>Initial</h3>
                    <p>{initialConfidenceLevel}/10</p>
                </div>
            </div>
        </div>
    )
}