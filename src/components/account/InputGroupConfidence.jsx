import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupConfidence = () => {

    return (
        <div className={styles.inputSection}>
            <label>On a scale from 1 to 10, how confident are you that this is a good investment? 1 is least confident, 10 is most confident.</label>
            <input type='range' min={1} max={10} step={1} defaultValue={5}></input>
        </div>
    )
}