import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupTimeHorizon = () => {

    return (
        <div className={styles.inputSection}>
            <legend>What is your time horizon for this investment?</legend>{/* Need to change this to a simpler input field and simpler way to programmatically handle the input */}
            <label htmlFor='addAssetHorizonNo'>No</label>
            <input id='addAssetHorizonNo' name='timeHorizon' type='radio' value='No' defaultChecked></input>
            <label htmlFor='addAssetHorizonOneDay'>1 Day</label>
            <input id='addAssetHorizonOneDay' name='timeHorizon' type='radio' value='1'></input>
            <label htmlFor='addAssetHorizonOneWeek'>1 Week</label>
            <input id='addAssetHorizonOneWeek' name='timeHorizon' type='radio' value='7'></input>
            <label htmlFor='addAssetHorizonOneMonth'>1 Month</label>
            <input id='addAssetHorizonOneMonth' name='timeHorizon' type='radio' value='30'></input>
        </div>
    )
}