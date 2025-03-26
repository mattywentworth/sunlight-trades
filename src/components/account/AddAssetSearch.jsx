import React from 'react';
import styles from './AddAssetForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchTerm, selectSearchTerm } from '../../features/add-asset/searchTermSlice';
import { restClient } from '@polygon.io/client-js';
//Probably need to edit lines below to use createAsyncThunk
import { updateSearchResults } from '../../features/add-asset/searchResultsSlice';


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
    
    const reqResponse = async (term) => {
        rest.reference.tickers({
            market: "stocks",
            search: term, //addAssetSearchTerm,
            active: "true",
            order: "asc",
            limit: 100,
            sort: "ticker"
        }).then((data) => {
            console.log(data);
            return data;
            //console.log(data.results);
        }).catch(e => {
            console.error('An error happened:', e);
        });
    }

    const testRequest = async (term) => {
        try {
            const response = await rest.reference.tickers({
                market: "stocks",
                search: term, //addAssetSearchTerm,
                active: "true",
                order: "asc",
                limit: 100,
                sort: "ticker"
            });
            return response;
        } catch (error) {
            console.log('There wan an error fetching tickers.', error);
        }
    }

    const handleAssetSearchSubmit = async (e) => {
        e.preventDefault();
        const data = await testRequest(addAssetSearchTerm);
        //alert(data.results[0].ticker);
        const arrayOfCompanies = data.results;
        dispatch(updateSearchResults(arrayOfCompanies));
    }
    
    //End Polygon API test



    return (
        <div className={styles.inputSection}>{/* Set this up to have the form conditionally display after the user has searched and chosen a company */}
            <label htmlFor='addAssetSearch'>Search for a Company to Buy or Watch</label>
            <input id='addAssetSearch' name='search' type='search' placeholder='eg. Google' onChange={handleSearchTermChange} value={addAssetSearchTerm}></input>
            <input type='submit' onClick={handleAssetSearchSubmit}></input>
        </div>
    )
}