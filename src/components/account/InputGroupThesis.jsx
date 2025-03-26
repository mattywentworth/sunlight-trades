import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupThesis = () => {

    return (
        <div className={styles.inputSection}>
            <label htmlFor='addAssetThesis'>What is your investment thesis?</label>
            <textarea id='addAssetThesis' name='thesis' placeholder='Be honest and descriptive. ' minlength='10' maxlength='5000' cols={30} rows={15} wrap='hard' className={styles.thesisTextArea}></textarea>
        </div>
    )
}