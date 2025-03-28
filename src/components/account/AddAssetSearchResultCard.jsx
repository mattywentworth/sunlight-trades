import React from 'react';
import styles from './AddAssetSearchResultCard.module.css';
import { updateSelectedSearchResult, selectSelectedSearchResult } from '../../features/add-asset/searchResultsSlice';
import { useSelector, useDispatch } from 'react-redux';

export const AddAssetSearchResultCard = ( {companyName, ticker} ) => {
    
    const dispatch = useDispatch();
    const selection = useSelector(selectSelectedSearchResult);

    const handleAssetClick = (e) => {
        e.preventDefault();
        //alert('test');
        const ticker = e.target.dataset.ticker;
        const name = e.target.dataset.companyname;
        //alert(name + ticker);
        dispatch(updateSelectedSearchResult({
            ticker: ticker,
            companyName: name
        }));
    }

    let shortenedCompanyName;
    if (companyName.length <= 30) {
        shortenedCompanyName = companyName;
    } else {
        shortenedCompanyName = companyName.slice(0, 26  ) + '...';
    }

    return (
        <div className={styles.container}>
            <div className={styles.companyInfo}>
                <div>{shortenedCompanyName}</div>
                <div>{ticker}</div>
            </div>
            <button className={styles.add} data-ticker={ticker} data-companyname={companyName} onClick={handleAssetClick}>Add</button>
        </div>
    )
}