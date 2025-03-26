import React from 'react';
import styles from './AddAssetForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchTerm, selectSearchTerm } from '../../features/add-asset/searchSlice';
import { restClient } from '@polygon.io/client-js';


export const AddAssetSearch = () => {


    
    const addAssetSearchTerm = useSelector(selectSearchTerm); //useSelector(state => state.addAssetSearch.value);
    const dispatch = useDispatch();

    const handleSearchTermChange = (e) => {
        const searchTerm = e.target.value;
        dispatch(updateSearchTerm(searchTerm));
        //alert(addAssetSearchTerm);
    }

    //Begin Polygon API test
    const polygonAPIKey = import.meta.env.VITE_API_KEY_POLYGON;
    const rest = restClient(polygonAPIKey);
    
    const reqResponse = () => {
        rest.reference.tickers({
            market: "stocks",
            search: addAssetSearchTerm,
            active: "true",
            order: "asc",
            limit: 100,
            sort: "ticker"
        }).then((data) => {
            console.log(data);
        }).catch(e => {
            console.error('An error happened:', e);
        });
    }

    const handleAssetSearchSubmit = (e) => {
        e.preventDefault();
        alert(addAssetSearchTerm);
        const response = reqResponse();
        alert(response.results);
    }
    
    //Eng Polygon API test



    return (
        <div className={styles.inputSection}>{/* Set this up to have the form conditionally display after the user has searched and chosen a company */}
            <label htmlFor='addAssetSearch'>Search for a Company to Buy or Watch</label>
            <input id='addAssetSearch' name='search' type='search' placeholder='eg. Google' onChange={handleSearchTermChange} value={addAssetSearchTerm}></input>
            <input type='submit' onClick={handleAssetSearchSubmit}></input>
        </div>
    )
}