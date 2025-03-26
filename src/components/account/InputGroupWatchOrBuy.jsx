import React from 'react';
import styles from './AddAssetForm.module.css'
export const InputGroupWatchOrBuy = () => {

    return (
        <div className={styles.inputSection}>
            <legend >Are you watching or buying?</legend>
            <div className={styles.radioDuo}>
                <input id='addAssetBuying' name='buyOrWatch' type='radio' value='buying' defaultChecked></input>
                <label htmlFor='addAssetBuying'>Buying</label>
            </div>
            <div className={styles.radioDuo}>
                <input id='addAssetWatching' name='buyOrWatch' type='radio' value='watching'></input>
                <label htmlFor='addAssetWatching'>Watching</label>
            </div>
        </div>
    )
}