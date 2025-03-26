import React from 'react';
import styles from './AddAssetForm.module.css';

export const AddAssetSearch = () => {

    return (
        <div className={styles.inputSection}>{/* Set this up to have the form conditionally display after the user has searched and chosen a company */}
            <label htmlFor='addAssetSearch'>Search for a Company to Buy or Watch</label>
            <input id='addAssetSearch' name='search' type='search' placeholder='eg. Google'></input>
            <input type='submit'></input>
        </div>
    )
}