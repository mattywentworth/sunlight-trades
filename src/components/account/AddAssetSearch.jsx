import React, { useEffect } from 'react';
import styles from './AddAssetForm.module.css';
import stylesPlus from './AddAssetSearch.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchTerm, selectSearchTerm } from '../../features/add-asset/searchTermSlice';
import { restClient } from '@polygon.io/client-js';
//Probably need to edit lines below to use createAsyncThunk
import { updateSearchResults, selectSearchResults, selectSelectedSearchResult, updateSelectedSearchResult, fetchStockSearchResults } from '../../features/add-asset/searchResultsSlice';


export const AddAssetSearch = () => {


    
    const addAssetSearchTerm = useSelector(selectSearchTerm); //useSelector(state => state.addAssetSearch.value);
    const dispatch = useDispatch();

    const searchTerm = useSelector(selectSearchTerm);
    const searchResults = useSelector(selectSearchResults);
    const selectedSearchResult = useSelector(selectSelectedSearchResult);

    let noResultsMessage;
    if (typeof searchResults === 'object' && searchResults.length === 0) {
        noResultsMessage = `Your search returned 0 results. Please try a new search.`
    }


    const handleSearchTermChange = (e) => {
        const searchTerm = e.target.value;
        dispatch(updateSearchTerm(searchTerm));
        //alert(addAssetSearchTerm);
    }

    //Begin Polygon API test
    const polygonAPIKey = import.meta.env.VITE_API_KEY_POLYGON;
    const rest = restClient(polygonAPIKey);
    
    /*First attempt at Polygon API call
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
    */

    /*Second attempt at Polygon API call - worked, but it should be in the slice as an asyncThunk
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
    */

    const handleAssetSearchSubmit = async (e) => {
        e.preventDefault();
        if (selectedSearchResult) {
            dispatch(updateSelectedSearchResult(null));
        }
        /*
        const data = await testRequest(addAssetSearchTerm);
        const arrayOfCompanies = data.results;
        dispatch(updateSearchResults(arrayOfCompanies));
        */
       dispatch(fetchStockSearchResults(addAssetSearchTerm));
    }
    
    //End Polygon API test

    /* Ok to use nested api calls instead of a useEffect??
    useEffect(() => {
        alert('arrayOfCompanies has changed');
    }, [searchResults]);*/



    return (
        <div className={stylesPlus.container}>{/* Set this up to have the form conditionally display after the user has searched and chosen a company */}
            <form onSubmit={handleAssetSearchSubmit}>
                <label className={stylesPlus.searchLabel} htmlFor='addAssetSearch'>Search for a Company to Buy or Watch</label>
                <div className={stylesPlus.searchInputAndButton}>
                    <input className={stylesPlus.searchInput} id='addAssetSearch' name='search' type='search' placeholder='eg. "GOOGL" or "Google"' onChange={handleSearchTermChange} value={addAssetSearchTerm}></input>
                    <input className={stylesPlus.searchButton} type='submit'></input>
                </div>
            </form>
            <div className={searchResults.length === 0 ? stylesPlus.noResultsMessageShow : stylesPlus.noResultsMessageHide} >{noResultsMessage}</div>
        </div>
    )
}