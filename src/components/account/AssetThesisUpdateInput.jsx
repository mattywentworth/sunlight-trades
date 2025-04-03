import React from 'react';
import styles from './AssetThesisUpdateInput.module.css';

export const AssetThesisUpdateInput = ( { updateInProgress, handleUpdateClick } ) => {

    const placeholder = 'Write a concise yet descriptive update to your thesis. Be honest and reflective. Address what you got wrong, what you got right, what you missed, what has changed, and if there is anything you would do differently with this investment.';

    return (
        <form className={updateInProgress ? styles.containerShow : styles.containerHide}>
            <label for='thesis-update'>Write an update to your thesis:</label>
            <textarea id='thesis-update' name='thesis-update' placeholder={placeholder} rows={15}></textarea>
            <div className={styles.actions}>
                <input type='submit' value='Save Update'></input>
                <button onClick={handleUpdateClick}>Cancel</button>
            </div>
        </form>
    )
}