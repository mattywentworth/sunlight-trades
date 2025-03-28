import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AddAssetSelectedAsset.module.css';
import { updateSelectedSearchResult, selectSelectedSearchResult } from '../../features/add-asset/searchResultsSlice';
import { selectSearchTerm } from '../../features/add-asset/searchTermSlice';

export const AddAssetSelectedAsset = () => {

    const dispatch = useDispatch();
    const selectedSearchResult = useSelector(selectSelectedSearchResult);
    const searchTerm = useSelector(selectSearchTerm);

    const handleRemoveSelectedAsset = (e) => {
        e.preventDefault();
        dispatch(updateSelectedSearchResult(null));
    }

    let selectedSearchResultContent;
    if (selectedSearchResult) {
        selectedSearchResultContent =
            <>
                <div className={styles.companyInfo}>
                    <div>{selectedSearchResult.companyName}</div>
                    <div>{selectedSearchResult.ticker}</div>
                </div>
                <button className={styles.remove} onClick={handleRemoveSelectedAsset}>Show Search Results</button>
            </>
    }/* else {
        selectedSearchResultContent = <h3>Please select an asset in order to continue.</h3>
    }*/



    return (
        <div className={selectedSearchResult ? styles.container : styles.containerHide}>
            {selectedSearchResultContent}
            {/*<div className={styles.companyInfo}>
                <div>{selectedSearchResult.companyName}</div>
                <div>{selectedSearchResult.ticker}</div>
            </div>*/}
            
        </div>
    )
}