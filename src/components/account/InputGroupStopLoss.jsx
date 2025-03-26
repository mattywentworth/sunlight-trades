import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupStopLoss = () => {

    return (
        <div className={styles.inputSection}>
            <legend >Do you have a stop loss order?</legend>
            <div className={styles.radioDuo}>
                <input id='addAssetStopLossNo' name='stopLoss' type='radio' value='No' defaultChecked></input>
                <label htmlFor='addAssetStopLossNo'>No</label>
            </div>
            <div className={styles.radioDuo}>
                <input id='addAssetStopLossYes' name='stopLoss' type='radio' value='Yes'></input>
                <label htmlFor='addAssetStopLossYes'>Yes</label>
            </div>
            
            <div> {/* if use selects yes to stop loss, show a section to enter the stop loss value */}
                <label htmlFor='addAssetStopLossPercentage'>Stop Loss Percentage</label>
                <input id='addAssetStopLossPercentage' name='stopLossPercentage' type='number' min='1' max='99'></input>{/* As this value changes, show a corresponding dollar value next to the input field */}
            </div>
        </div>   
    )
}