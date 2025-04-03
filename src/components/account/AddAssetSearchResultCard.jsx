import React from 'react';
import styles from './AddAssetSearchResultCard.module.css';
import { restClient } from '@polygon.io/client-js';
import { updateSelectedSearchResult, selectSelectedSearchResult } from '../../features/add-asset/searchResultsSlice';
import { useSelector, useDispatch } from 'react-redux';

export const AddAssetSearchResultCard = ( {companyName, ticker} ) => {
    
    const dispatch = useDispatch();
    const selection = useSelector(selectSelectedSearchResult);

    //Beg API test
    const polygonAPIKey = import.meta.env.VITE_API_KEY_POLYGON;
    const rest = restClient(polygonAPIKey);

    const fetchCompanyIcon = async (companyTicker) => {
        /*rest.reference.tickerDetails(
            companyTicker
        )
        .then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });*/
        try {
            const response = await rest.reference.tickerDetails(
                companyTicker/*,
                {
                }*/
            );
            const icon = response.results.branding.icon_url;
            console.log(response);
            return icon;
        } catch (error) {
            console.log('Error', error);
        }
    }

    //End API test

    const handleAssetClick = async (e) => {
        e.preventDefault();

        //alert('test');
        const ticker = e.target.dataset.ticker;
        const name = e.target.dataset.companyname;
        //Beg icon API test
        const imageUrl = await fetchCompanyIcon(ticker);

        //End icon API test
        const icon = imageUrl;
        //alert(icon);
        dispatch(updateSelectedSearchResult({
            ticker: ticker,
            companyName: name,
            icon: icon //Must add '?apiKey=[insertAPIKey]' to url in order to access the icon
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