import React from 'react';
import styles from './AssetThesisUpdateInput.module.css';

export const AssetThesisUpdateInput = ( { updateInProgress, sellInProgress, updatedThesis, setUpdatedThesis, thesisSaved, handleThesisSave, handleUpdateClick } ) => {

    const placeholder = 'Write a concise yet descriptive update to your thesis. Be honest and reflective. Address what you got wrong, what you got right, what you missed, what has changed, and if there is anything you would do differently with this investment.';

    const handleChange = (e) => {
        setUpdatedThesis(e.target.value);        
    }

    let buttonText;
    if (thesisSaved) {
        buttonText = 'Edit Thesis';
    } else {
        buttonText = 'Save Thesis';
    }

    return (
        <form className={updateInProgress || sellInProgress ? styles.containerShow : styles.containerHide}>
            <label htmlFor='thesis-update'>Write an update to your thesis:</label>
            <textarea id='thesis-update' name='thesis-update' value={updatedThesis} onChange={handleChange} placeholder={placeholder} rows={15}></textarea>
            <div className={styles.actions}>
                <input className={thesisSaved ? styles.submitInputSaved : styles.submitInputUnsaved} type='submit' value={buttonText} onClick={handleThesisSave}></input>
                <button onClick={handleUpdateClick}>Cancel</button>
            </div>
        </form>
    )
}