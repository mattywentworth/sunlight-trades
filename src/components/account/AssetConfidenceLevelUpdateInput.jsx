import React from 'react';
import styles from './AssetConfidenceLevelUpdateInput.module.css';
export const AssetConfidenceLevelUpdateInput = ( { updateInProgress, updatedConfidenceLevel, setUpdatedConfidenceLevel, handleConfidenceLevelSave, confidenceLevelSaved, handleUpdateClick }) => {

    const handleChange = (e) => {
        setUpdatedConfidenceLevel(e.target.value);
    }

    let submitText;
    if (confidenceLevelSaved) {
        submitText = 'Edit Level';
    } else {
        submitText = 'Save Level';
    }

    return (
        <form className={updateInProgress ? styles.containerShow : styles.containerHide}>
            <label for='confidence-level-update'>New confidence level:</label>
            <input className={styles.rangeInput} type='range' id='confidence-level-update' name='confidence-level-update' min={1} max={10} step={1} value={updatedConfidenceLevel}  onChange={handleChange} list='markers-confidence-level-update'></input>
            <p>{updatedConfidenceLevel}</p>
            {/*<datalist id='markers-confidence-level-update'>
                <option value={1}></option>
                <option value={2}></option>
                <option value={3}></option>
                <option value={4}></option>
                <option value={5}></option>
                <option value={6}></option>
                <option value={7}></option>
                <option value={8}></option>
                <option value={9}></option>
                <option value={10}></option>
            </datalist>*/}
            <div className={styles.actionsShow}> {/* confidenceLevelSaved ? styles.actionsHide :  */}
                {/* BG color update below isn't working - is there something about input bg color that prevents that from happening? */}
                <input className={confidenceLevelSaved ? styles.buttonBGColorSaved : styles.buttonBGColorUnsaved}type='submit' value={submitText} onClick={handleConfidenceLevelSave}></input>
                <button onClick={handleUpdateClick}>Cancel</button>
            </div>
        </form>
    )
}