import React from 'react';
import styles from './AddAssetForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchTerm } from '../../features/add-asset/searchSlice';

export const AddAssetSearch = () => {

    const addAssetSearchTerm = useSelector(state => state.addAssetSearch.value);
    const dispatch = useDispatch();

    const handleSearchTermChange = (e) => {
        const searchTerm = e.target.value;
        dispatch(updateSearchTerm(searchTerm));
    }

    

    return (
        <div className={styles.inputSection}>{/* Set this up to have the form conditionally display after the user has searched and chosen a company */}
            <label htmlFor='addAssetSearch'>Search for a Company to Buy or Watch</label>
            <input id='addAssetSearch' name='search' type='search' placeholder='eg. Google' onChange={handleSearchTermChange} value={addAssetSearchTerm}></input>
            <input type='submit'></input>
        </div>
    )
}