import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupStockOrOptions = ( { watchOrBuy, stockOrOptions, setStockOrOptions } ) => {

    const handleChange = (e) => {
        setStockOrOptions(e.target.value);
    }

    let watchOrBuyText;
    if (watchOrBuy === 'buy') {
        watchOrBuyText = 'buying';
    } else {
        watchOrBuyText = 'watching';
    }

    return (
        <div className={styles.inputSection}>
            <legend >Are you {watchOrBuyText} stock or options?</legend>{/* have the value oof stock or options change based on what user selected */}
            <div className={styles.radioDuo}>
                <input id='addAssetStock' name='stockOrOptions' type='radio' value='stock' defaultChecked onChange={handleChange}></input>
                <label htmlFor='addAssetStock'>Stock</label>
            </div>
            <div className={styles.radioDuo}>
                <input id='addAssetOptions' name='stockOrOptions' type='radio' value='options' onChange={handleChange}></input>
                <label htmlFor='addAssetOptions'>Options</label>
            </div>
        </div>
    )
}