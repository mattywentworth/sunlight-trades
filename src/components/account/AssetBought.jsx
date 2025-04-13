import React, { useState } from 'react';
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
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccountAssets, updateAsset, sellAsset, fetchTickerPriceOnAssetTableLoad } from '../../features/assets/accountAssetsSlice';
import { convertDateToText } from '../../utils/dates';
import { AccountHeader } from './AccountHeader';
import { generateAIAnalysis } from '../../features/assets/singleAIAnalysisSlice';

export const AssetBought = () => {

    const params = useParams();
    const assetIDParam = parseInt(params.assetID);
    const accountAssets = useSelector(selectAccountAssets);
    const currentAsset = accountAssets.find(asset => asset.assetId === assetIDParam);
    const {ticker, companyName, confidenceLevel, thesis, logo, costBasis, watchBuySell} = currentAsset;
    const assetActions = currentAsset.watchBuySell;
    const length = assetActions.length;
    const mostRecentAction = assetActions[length - 1].action;

    const [updateInProgress, setUpdateInProgress] = useState(false); //This is the overarching state value that determines what elements are expose and what eleigible actions are
    const [updatedConfidenceLevel, setUpdatedConfidenceLevel] = useState(5);
    const [updatedThesis, setUpdatedThesis] = useState('');
    const [confidenceLevelSaved, setConfidenceLevelSaved] = useState(false);
    const [thesisSaved, setThesisSaved] = useState(false);
    const [sellInProgress, setSellInProgress] = useState(false);


    let nextAction;
    if (mostRecentAction === 'Watch') {
        nextAction = 'Buy';
    } else if (mostRecentAction === 'Buy') {
        nextAction = 'Sell';
    } else if (mostRecentAction === 'Sell') {
        nextAction = 'Buy';
    };

    const holdAction = 'Hold';

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
        thesisSaved ? thesisUpdateInput.disabled = true : thesisUpdateInput.disabled = false;
        //thesisUpdateInput.disabled === false ? thesisUpdateInput.disabled = true : thesisUpdateInput.disabled = false;
    }

    const dispatch = useDispatch();
    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        //alert(assetIDParam + updatedThesis + updatedConfidenceLevel);
        //some action creator that updates state with the new confidence level and thesis values
        dispatch(updateAsset({assetIDParam, updatedThesis, updatedConfidenceLevel}));
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

    const testChatGPT = (e) => {
        e.preventDefault();
        dispatch(generateAIAnalysis());
    }

    return (
        <div>
            <button onClick={testChatGPT}>CHATGPT TEST</button>
            <AccountHeader/>
            <AssetCompanyHeader ticker={ticker} companyName={companyName} logo={logo}/>
            <div className={styles.performance}>
                <AssetTotalChange/>
                <AssetConfidenceLevel confidenceLevel={confidenceLevel} updateInProgress={updateInProgress} sellInProgress={sellInProgress} updatedConfidenceLevel={updatedConfidenceLevel} setUpdatedConfidenceLevel={setUpdatedConfidenceLevel} handleConfidenceLevelSave={handleConfidenceLevelSave} confidenceLevelSaved={confidenceLevelSaved} handleUpdateClick={handleUpdateClick}/>
                <AssetTodaysChange/>
                <AssetDollarValue costBasis={costBasis}/>
            </div>
            <div className={styles.descriptions}>
                <AssetThesis thesis={thesis} updateInProgress={updateInProgress} sellInProgress={sellInProgress} updatedThesis={updatedThesis} setUpdatedThesis={setUpdatedThesis} thesisSaved={thesisSaved} confidenceLevel={confidenceLevel} handleThesisSave={handleThesisSave} handleUpdateClick={handleUpdateClick} action={watchBuySell}/>
                <AssetAIAnalysis/>
            </div>
            <div className={styles.actions}>
                <AssetUpdate handleUpdateClick={handleUpdateClick} handleSubmitUpdate={handleSubmitUpdate} sellInProgress={sellInProgress} thesisSaved={thesisSaved} confidenceLevelSaved={confidenceLevelSaved} updateInProgress={updateInProgress}/>
                <AssetSell handleSell={handleSell} sellInProgress={sellInProgress} handleUpdateClick={handleUpdateClick} thesisSaved={thesisSaved} confidenceLevelSaved={confidenceLevelSaved} updateInProgress={updateInProgress} nextAction={nextAction}/>
            </div>
        </div>
    )
}