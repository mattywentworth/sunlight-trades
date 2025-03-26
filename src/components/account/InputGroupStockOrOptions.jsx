import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupStockOrOptions = () => {

    return (
        <div className={styles.inputSection}>
            <legend >Are you watching or buying stock or options?</legend>{/* have the value oof stock or options change based on what user selected */}
            <div className={styles.radioDuo}>
                <input id='addAssetStock' name='stockOrOptions' type='radio' value='Stock' defaultChecked></input>
                <label htmlFor='addAssetStock'>Stock</label>
            </div>
            <div className={styles.radioDuo}>
                <input id='addAssetOptions' name='stockOrOptions' type='radio' value='Options'></input>
                <label htmlFor='addAssetOptions'>Options</label>
            </div>
        </div>
    )
}