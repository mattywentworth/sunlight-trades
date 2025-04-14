import React from 'react';
import styles from './AddAssetForm.module.css';

export const InputGroupQty = ( { stockOrOptions, assetQty, setAssetQty } ) => {


    let assetQtyType;
    if (stockOrOptions === 'stock') {
        assetQtyType = 'shares';
    } else {
        assetQtyType = 'contracts';
    }

    const handleChange = (e) => {
        setAssetQty(e.target.value);
        //alert(assetQty);
    }

    return (
        <div className={styles.inputSection}>
            <label htmlFor='quantity'>How many {assetQtyType}?</label>
            <input id='quantity' name='quantity' type='number' min={0} step={1} value={assetQty} onChange={handleChange} required></input>
        </div>
    )
}