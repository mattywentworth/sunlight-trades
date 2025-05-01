import React, { useState, useEffect } from 'react';
import styles from './AssetBought.module.css';
import { AssetCompanyHeader } from './AssetCompanyHeader';
import { AssetTotalChange } from './AssetTotalChange';
import { AssetConfidenceLevel } from './AssetConfidenceLevel';
import { AssetTodaysChange } from './AssetTodaysChange';
import { AssetDollarValue } from './AssetDollarValue';
import { AssetThesis } from './AssetThesis';
import { AssetAIAnalysis } from './AssetAIAnalysis';
import { AssetSell } from './AssetSell';
import { AssetUpdate } from './AssetUpdate';
import { useParams, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccountAssets, updateAsset, sellAsset, fetchTickerPriceOnLoad } from '../../features/assets/accountAssetsSlice';
import { convertDateToText } from '../../utils/dates';
import { AccountHeader } from './AccountHeader';
import { generateAIAnalysis } from '../../features/assets/singleAIAnalysisSlice';
//for testing
import OpenAI from 'openai';
import twelvedata from 'twelvedata';
import { callChatGPTForHoldPrompt } from '../../utils/aiAnalysisAPICall';

export const AssetBought = () => {

    const navigate = useNavigate();
    const params = useParams();
    const assetIDParam = parseInt(params.assetID);
    const userID = params.user;
    const accountAssets = useSelector(selectAccountAssets);
    const currentAsset = accountAssets.find(asset => asset.assetId === assetIDParam);
    const {ticker, companyName, confidenceLevel, thesis, logo, costBasis, totalGainLoss, watchBuySell, aiAnalysis} = currentAsset;
    const assetActions = currentAsset.watchBuySell;
    const currentPrice = currentAsset.todaysValues.current;
    const length = assetActions.length;
    const mostRecentAction = assetActions[length - 1].action;
    const mostRecentBuyDate = mostRecentAction.dateReadable;
    const readableTodaysDate = convertDateToText();

    const [updateInProgress, setUpdateInProgress] = useState(false); //This is the overarching state value that determines what elements are expose and what eleigible actions are
    const [updatedConfidenceLevel, setUpdatedConfidenceLevel] = useState(5);
    const [updatedThesis, setUpdatedThesis] = useState('');
    const [confidenceLevelSaved, setConfidenceLevelSaved] = useState(false);
    const [thesisSaved, setThesisSaved] = useState(false);
    const [sellInProgress, setSellInProgress] = useState(false);
    const [chatGPTPending, setChatGPTPending] = useState(false);


    let nextAction;
    if (mostRecentAction === 'Watch') {
        nextAction = 'Buy';
    } else if (mostRecentAction === 'Buy') {
        nextAction = 'Sell';
    } else if (mostRecentAction === 'Sell') {
        nextAction = 'Buy';
    };

    /*const holdPurchase = 'Hold';
    const keepWatching = 'Keep Watching';*/

    const handleUpdateClick = (e) => {
        e.preventDefault();
        if (e.target.innerHTML === 'Update' || e.target.innerHTML === 'Cancel Update') {
            updateInProgress ? setUpdateInProgress(false) : setUpdateInProgress(true);
        } else if (e.target.innerHTML === 'Sell' || e.target.innerHTML === 'Cancel Sell') {
            sellInProgress ? setSellInProgress(false) : setSellInProgress(true);
        } else if (e.target.innerHTML === 'Cancel') {
            updateInProgress ? setUpdateInProgress(false) : setUpdateInProgress(true);
        } else if (e.target.innerHTML === 'Buy' || e.target.innerHTML === 'Cancel Buy') {
            sellInProgress ? setSellInProgress(false) : setSellInProgress(true);
        }
        
    }

    const handleConfidenceLevelSave = (e) => {
        e.preventDefault();
        const confidenceLevelUpdateInput = document.getElementById('confidence-level-update');
        confidenceLevelSaved ? setConfidenceLevelSaved(false) : setConfidenceLevelSaved(true);
        confidenceLevelUpdateInput.disabled === false ? confidenceLevelUpdateInput.disabled = true : confidenceLevelUpdateInput.disabled = false;
    }

    //Should probably DRY the function below
    const handleThesisSave = (e) => {
        e.preventDefault();
        const thesisUpdateInput = document.getElementById('thesis-update');
        thesisSaved ? setThesisSaved(false) : setThesisSaved(true);
        thesisUpdateInput.disabled === false ? thesisUpdateInput.disabled = true : thesisUpdateInput.disabled = false;
        //thesisUpdateInput.disabled === false ? thesisUpdateInput.disabled = true : thesisUpdateInput.disabled = false;
    }

    const openAIApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
    const client = new OpenAI( { apiKey: openAIApiKey, dangerouslyAllowBrowser: true});

    const testChatGPTTwo = async (e) => {
        try {
            const response = await client.responses.create({
                model: "gpt-4o",
                input: "Tell me a three sentence bedtime story about a unicorn."
            });
            //alert(Object.keys(response));
            return response.output[0].content[0].text;
        } catch (error) {
            return error;
        }
    }

    const dispatch = useDispatch();
    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        let updateAction;
        if (mostRecentAction === 'Watch' || mostRecentAction === 'Sell') {
            updateAction = 'Keep Watching';
        } else if (mostRecentAction === 'Buy') {
            updateAction = 'Hold';
        }
        //Pending workaround Part 1
        setChatGPTPending(true);
        //End Pending workaround Part 1
        //ChatGPT test
          //const aiAnalysis = await testChatGPTTwo();
          const aiAnalysis = await callChatGPTForHoldPrompt(ticker, updateAction, mostRecentBuyDate, updatedConfidenceLevel, updatedThesis, readableTodaysDate)
        //
        //Pending workaround Part 2
        setChatGPTPending(false);
        //End Pending workaround Part 2

        //alert(assetIDParam + updatedThesis + updatedConfidenceLevel);
        //some action creator that updates state with the new confidence level and thesis values
        dispatch(updateAsset({assetIDParam, updatedThesis, updatedConfidenceLevel, aiAnalysis, updateAction}));
        setUpdateInProgress(false);
        setSellInProgress(false);
        setUpdatedConfidenceLevel(5);
        setUpdatedThesis('');
        setConfidenceLevelSaved(false);
        setThesisSaved(false);
        const thesisUpdateInput = document.getElementById('thesis-update');
        thesisUpdateInput.disabled = false;
        const confidenceLevelUpdateInput = document.getElementById('confidence-level-update');
        confidenceLevelUpdateInput.disabled = false;
    }


    const handleSell = (e) => {
        e.preventDefault();
        dispatch(sellAsset({assetIDParam, updatedThesis, updatedConfidenceLevel, nextAction}));
        if (nextAction === 'Sell') {
            navigate(`/account/${userID}/sold/${assetIDParam}`)
        } else if (nextAction === 'Buy') {
            navigate(`/account/${userID}/bought/${assetIDParam}`)
        }
        
        setUpdateInProgress(false);
        setSellInProgress(false);
        setUpdatedConfidenceLevel(5);
        setUpdatedThesis('');
        setConfidenceLevelSaved(false);
        setThesisSaved(false);
        const thesisUpdateInput = document.getElementById('thesis-update');
        thesisUpdateInput.disabled = false;
        const confidenceLevelUpdateInput = document.getElementById('confidence-level-update');
        confidenceLevelUpdateInput.disabled = false;
    }


    //For testing

    //const openAIApiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
    //const client = new OpenAI( { apiKey: openAIApiKey, dangerouslyAllowBrowser: true});
    


    const testChatGPT = (e) => {
        e.preventDefault();
        dispatch(generateAIAnalysis());
    }
/*
    const twelvedataAPIKey = import.meta.env.VITE_API_KEY_TWELVEDATA;
    const config = {
        key: twelvedataAPIKey,
    };
    const clientTwelveData = twelvedata(config);

    const fetchTickerPriceOnLoad = async (stockSymbol) => {
            const response = await clientTwelveData
                .price(stockSymbol);
            const price = Number(response.price);
            const roundedPrice = price.toFixed(2);
            const numdRoundedPrice = Number(roundedPrice);
            return numdRoundedPrice;
        }

    const testTen = async () => {
        const price = await fetchTickerPriceOnLoad({symbol: 'AAPL'});
        alert(price);
    }
*/

    useEffect(()=> {
        dispatch(fetchTickerPriceOnLoad({symbol: ticker}));
    }, [dispatch]);

    return (
        <div>
            {/*<button onClick={testTen}>CHATGPT TEST</button>*/}
            <AccountHeader/>
            <AssetCompanyHeader ticker={ticker} companyName={companyName} logo={logo}/>
            <div className={styles.performanceContainer}>
                <div className={styles.performanceOne}>
                    <AssetTotalChange totalGainLoss={totalGainLoss}/>
                    <AssetConfidenceLevel confidenceLevel={confidenceLevel} updateInProgress={updateInProgress} sellInProgress={sellInProgress} updatedConfidenceLevel={updatedConfidenceLevel} setUpdatedConfidenceLevel={setUpdatedConfidenceLevel} handleConfidenceLevelSave={handleConfidenceLevelSave} confidenceLevelSaved={confidenceLevelSaved} handleUpdateClick={handleUpdateClick}/>
                </div>
                <div className={styles.performanceTwo}>
                    <AssetTodaysChange/>
                    <AssetDollarValue costBasis={costBasis} currentPrice={currentPrice}/>
                </div>
            </div>
            <div className={styles.descriptions}>
                <AssetThesis thesis={thesis} updateInProgress={updateInProgress} sellInProgress={sellInProgress} updatedThesis={updatedThesis} setUpdatedThesis={setUpdatedThesis} thesisSaved={thesisSaved} confidenceLevel={confidenceLevel} handleThesisSave={handleThesisSave} handleUpdateClick={handleUpdateClick} action={currentAsset.thesis.action}/>
                <AssetAIAnalysis aiAnalysis={aiAnalysis} confidenceLevel={confidenceLevel}/>
            </div>
            <div className={styles.actions}>
                <h4 className={!chatGPTPending ? styles.pendingHide : styles.pendingShow}>Fetching AI Analysis...</h4>
                <AssetUpdate handleUpdateClick={handleUpdateClick} handleSubmitUpdate={handleSubmitUpdate} sellInProgress={sellInProgress} thesisSaved={thesisSaved} confidenceLevelSaved={confidenceLevelSaved} updateInProgress={updateInProgress}/>
                <AssetSell handleSell={handleSell} sellInProgress={sellInProgress} handleUpdateClick={handleUpdateClick} thesisSaved={thesisSaved} confidenceLevelSaved={confidenceLevelSaved} updateInProgress={updateInProgress} nextAction={nextAction}/>
            </div>
        </div>
    )
}