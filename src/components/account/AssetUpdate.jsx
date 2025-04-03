import React from 'react';
import styles from './AssetUpdate.module.css';

export const AssetUpdate = ( {handleUpdateClick, updateInProgress } ) => {

    let buttonText;
    updateInProgress ? buttonText = 'Cancel Update' : buttonText = 'Update';

    //Is it semantically correct to have a button element acting in place of what should maybe be an input of type = button, since this is sort of to submit a form?
    return (
        <>
            <button onClick={handleUpdateClick} className={updateInProgress ? styles.submitUpdateShow : styles.submitUpdateHide}>Submit Update</button>
            <button onClick={handleUpdateClick} className={updateInProgress ? styles.updateInProgressTrue : styles.updateInProgressFalse}>{buttonText}</button>
        </>
    )
}