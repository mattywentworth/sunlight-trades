import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupThesis = ( { thesis, setThesis } ) => {

    const thesisPlaceholder = 'Be honest and descriptive yet concise. For example, if your investment decision is purely based on FOMO, state that and why you think there is anything to miss out on with this asset. If it\'s simply that you\'re a customer and believe in the company, state that and why the company is one that warrants your confidence. If it\'s based on fundamentals, list the fundamentals and why you think they indicate a promising investment.'

    const handleChange = (e) => {
        setThesis(e.target.value);
        //alert(thesis);
    }

    return (
        <div className={styles.inputSection}>
            <label htmlFor='addAssetThesis'>What is your investment thesis?</label>
            <textarea value={thesis} onChange={handleChange} id='addAssetThesis' name='thesis' placeholder={thesisPlaceholder} minlength='10' maxlength='5000' cols={30} rows={15} wrap='hard' className={styles.thesisTextArea}></textarea>
        </div>
    )
}