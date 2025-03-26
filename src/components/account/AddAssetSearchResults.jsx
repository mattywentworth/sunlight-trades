import React from 'react';
import styles from './AddAssetSearchResults.module.css'
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../../features/add-asset/searchResultsSlice';



export const AddAssetSearchResults = () => {

    const searchResults = useSelector(selectSearchResults);
   // if (searchResults) {alert(searchResults[0].ticker)}

    return (
        <div className={styles.container}>
            <div>Search results will go here</div>
            {searchResults.map(element => {
                return <div>{element.ticker}</div>;
            })}
        </div>
    )
}