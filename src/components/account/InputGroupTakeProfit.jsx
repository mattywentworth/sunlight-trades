import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupTakeProfit = () => {

    return (
        <div className={styles.inputSection}>
            <legend >Do you have a take profit order?</legend>
            <div className={styles.radioDuo}>
                <input id='addAssetTakeProfitNo' name='takeProfit' type='radio' value='No' defaultChecked></input>
                <label htmlFor='addAssetTakeProfitNo'>No</label>
            </div>
            <div className={styles.radioDuo}>
                <input id='addAssetTakeProfitYes' name='takeProfit' type='radio' value='Yes'></input>
                <label htmlFor='addAssetTakeProfitYes'>Yes</label>
            </div>
            
            <div> {/* if use selects yes to take profit, show a section to enter the stop loss value */}
                <label htmlFor='addAssetTakeProfitPercentage'>Take Profit Percentage</label>
                <input id='addAssetTakeProfitPercentage' name='takeProfitPercentage' type='number' min='1'></input>{/* As this value changes, show a corresponding dollar value next to the input field */}
            </div>
        </div>
    )
}