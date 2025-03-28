import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AddAssetSelectedAsset.module.css';
import { selectSelectedSearchResult } from '../../features/add-asset/searchResultsSlice';

export const AddAssetSelectedAsset = () => {

    const selectedSearchResult = useSelector(selectSelectedSearchResult);

    let selectedSearchResultContent;
    if (selectedSearchResult) {
        selectedSearchResultContent =
            <>
                <div className={styles.companyInfo}>
                    <div>{selectedSearchResult.companyName}</div>
                    <div>{selectedSearchResult.ticker}</div>
                </div>
                <button className={styles.add}>Add</button>
            </>
    }/* else {
        selectedSearchResultContent = <h3>Please select an asset in order to continue.</h3>
    }*/

    return (
        <div className={styles.container}>
            {selectedSearchResultContent}
            {/*<div className={styles.companyInfo}>
                <div>{selectedSearchResult.companyName}</div>
                <div>{selectedSearchResult.ticker}</div>
            </div>*/}
            
        </div>
    )
}