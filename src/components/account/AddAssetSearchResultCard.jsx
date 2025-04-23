import React from 'react';
import styles from './AddAssetSearchResultCard.module.css';
import { restClient } from '@polygon.io/client-js';
import { updateSelectedSearchResult, selectSelectedSearchResult, fetchTickerPriceWhenAdded } from '../../features/add-asset/searchResultsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';

export const AddAssetSearchResultCard = ( {companyName, ticker} ) => {
    
    const dispatch = useDispatch();
    const selection = useSelector(selectSelectedSearchResult);

    const assets = useSelector(selectAccountAssets);
    const checkAssetsForTicker = (clickedTicker) => {
        const assetInPortfolio = assets.some(asset => {
            //alert(typeof asset.ticker);
            return asset.ticker === clickedTicker;
        })
        //alert(typeof clickedTicker);
        //alert(assetInPortfolio);
        return assetInPortfolio;
    }
    

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
            const urlQuery = `?apiKey=${polygonAPIKey}`;
            const usableIcon = `${icon}${urlQuery}`;
            //alert(usableIcon);
            console.log(response);
            return usableIcon;
        } catch (error) {
            console.log('Error', error);
        }
    }

    //End API test
    /*
    const duplicateWarningJSX = (
        <p>TICKER already exists in your X list. Update it <a href="www.google.com">HERE</a>, or select a different asset if you want to add something new to your portfolio.</p>
    )
        */

    const handleAssetClick = async (e) => {
        e.preventDefault();

        //alert('test');
        const ticker = e.target.dataset.ticker;
        const name = e.target.dataset.companyname;
        //Beg icon API test
        const imageUrl = await fetchCompanyIcon(ticker);

        //End icon API test
        const tickerInAssets = checkAssetsForTicker(ticker);
        //const duplicateWarning = document.getElementById('duplicate-selection-warning');
        if (tickerInAssets) {
            return alert(`${ticker} is already on one of your lists. Please update the asset there.`);
        }
        //const icon = imageUrl;
        //alert(icon);
        
        dispatch(updateSelectedSearchResult({
            ticker: ticker,
            companyName: name,
            icon: imageUrl //Must add '?apiKey=[insertAPIKey]' to url in order to access the icon
        }));
        dispatch(fetchTickerPriceWhenAdded({symbol: ticker}));
        window.scroll(0,0);
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