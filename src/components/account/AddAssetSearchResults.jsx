import React from 'react';
import styles from './AddAssetSearchResults.module.css'
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../../features/add-asset/searchResultsSlice';
import { AddAssetSearchResultCard } from './AddAssetSearchResultCard';



export const AddAssetSearchResults = () => {

    const searchResults = useSelector(selectSearchResults);
    // if (searchResults) {alert(searchResults[0].ticker)}
    
    
    let companySearchResults;
    if (typeof searchResults === 'object') {
        companySearchResults = searchResults.map(element => {
            return <AddAssetSearchResultCard companyName={element.name} ticker={element.ticker} key={element.ticker}/>;
        })
    } else if (typeof searchResults === null) {
        c
    }

    return (
        <div className={companySearchResults ? styles.container : styles.containerHide}>
            {/*{searchResults.map(element => {
                return <div>{element.ticker}</div>;
            })}*/}
            <div className={styles.searchResultsContainer}>
                {companySearchResults}
            </div>
        </div>
    )
}