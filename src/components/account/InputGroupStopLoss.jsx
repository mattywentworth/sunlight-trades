import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupStopLoss = ( { stopLossYesNo, setStopLossYesNo } ) => {

    const handleChange = (e) => {
        setStopLossYesNo(e.target.value);
    }
/*
    if (stopLossYesNo === 'Yes') {
        document.getElementById('addAssetStopLossPercentage').required = true;
    } else if (stopLossYesNo === 'No') {
        document.getElementById('addAssetStopLossPercentage').required = false;
    }
*/
    return (
        <div className={styles.inputSection}>
            <legend >Do you have a stop loss order?</legend>
            <div className={styles.radioDuo}>
                <input id='addAssetStopLossNo' name='stopLoss' type='radio' value='No' defaultChecked onChange={handleChange}></input>
                <label htmlFor='addAssetStopLossNo'>No</label>
            </div>
            <div className={styles.radioDuo}>
                <input id='addAssetStopLossYes' name='stopLoss' type='radio' value='Yes' onChange={handleChange}></input>
                <label htmlFor='addAssetStopLossYes'>Yes</label>
            </div>
            <div className={stopLossYesNo === 'No' ? styles.stopTakeHide : styles.stopTakeShow}>
                <div> {/* if use selects yes to stop loss, show a section to enter the stop loss value */}
                    <label htmlFor='addAssetStopLossPercentage'>Stop Loss Percentage</label>
                    <input id='addAssetStopLossPercentage' name='stopLossPercentage' type='number' min='1'></input>{/* As this value changes, show a corresponding dollar value next to the input field */}
                </div>
            </div>
        </div>   
    )
}