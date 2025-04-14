import React from 'react';
import styles from './AddAssetForm.module.css'
export const InputGroupWatchOrBuy = ( { watchOrBuy, setWatchOrBuy } ) => {

    const handleChange = (e) => {
        setWatchOrBuy(e.target.value);
        //alert(watchOrBuy);
    };

    return (
        <div className={styles.inputSection}>
            <legend >Do you want to watch or buy this asset?</legend>
            <div className={styles.radioDuo}>
                <input id='addAssetBuying' name='buyOrWatch' type='radio' value='Buy' defaultChecked onChange={handleChange}></input>
                <label htmlFor='addAssetBuying'>Buy</label>
            </div>
            <div className={styles.radioDuo}>
                <input id='addAssetWatching' name='buyOrWatch' type='radio' value='Watch' onChange={handleChange}></input>
                <label htmlFor='addAssetWatching'>Watch</label>
            </div>
        </div>
    )
}