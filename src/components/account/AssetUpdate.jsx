import React from 'react';
import styles from './AssetUpdate.module.css';

export const AssetUpdate = ( {handleUpdateClick, updateInProgress, sellInProgress, thesisSaved, confidenceLevelSaved, handleSubmitUpdate } ) => {

    let buttonText;
    updateInProgress ? buttonText = 'Cancel Update' : buttonText = 'Update';

    const updateAssetSubmitButton = document.getElementById('update-asset-submit-button');
    const updateAssetButton = document.getElementById('update-asset-button');
    if (updateInProgress && confidenceLevelSaved && thesisSaved) {
        updateAssetSubmitButton.disabled = false;
        //alert('a pretend thing is successfully happening')
    } else if (updateInProgress) {
        updateAssetSubmitButton.disabled = true;
        //alert('a pretend thing is being prevented')
    }/* else if (!sellInProgress) {
        updateAssetButton.disabled = false;
    } else if (sellInProgress) {
        updateAssetButton.disabled = true;
    }*/

    //Is it semantically correct to have a button element acting in place of what should maybe be an input of type = button, since this is sort of to submit a form?
    return (
        <>
            <button id='update-asset-submit-button' onClick={handleSubmitUpdate} className={updateInProgress ? styles.submitUpdateShow : styles.submitUpdateHide}>Submit Update</button>
            <button id='update-asset-button' onClick={handleUpdateClick} className={updateInProgress ? styles.updateInProgressTrue : styles.updateInProgressFalse}>{buttonText}</button>
        </>
    )
}