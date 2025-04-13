import React from 'react';
import styles from './AssetSell.module.css'

export const AssetSell = ( { handleSell, sellInProgress, handleUpdateClick, thesisSaved, confidenceLevelSaved, updateInProgress, nextAction } ) => {

    let buttonText;
    if (sellInProgress) {
        buttonText = `Cancel ${nextAction}`;
    } else {
        buttonText = `${nextAction}`;
    }

    const completeSellButton = document.getElementById('complete-sell-button');
    if ( sellInProgress && thesisSaved && confidenceLevelSaved) {
        completeSellButton.disabled = false;
    } else if (sellInProgress && !thesisSaved || sellInProgress && !confidenceLevelSaved) {
        completeSellButton.disabled = true;
    }

    return (
        <>
            <button className={styles.sellButton} onClick={handleUpdateClick}>{buttonText}</button>
            <button id='complete-sell-button' onClick={handleSell} className={sellInProgress ? styles.completeSellButtonShow : styles.completeSellButtonHide}>Complete {nextAction}</button>
        </>
    )
}