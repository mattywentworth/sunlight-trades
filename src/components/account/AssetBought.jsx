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
import { selectAccountAssets, updateAsset } from '../../features/assets/accountAssetsSlice';
import { convertDateToText } from '../../utils/dates';

export const AssetBought = () => {

    const params = useParams();
    const assetIDParam = parseInt(params.assetID);
    const accountAssets = useSelector(selectAccountAssets);
    const currentAsset = accountAssets.find(asset => asset.assetId === assetIDParam);
    const {ticker, companyName, confidenceLevel, thesis, logo} = currentAsset;

    const [updateInProgress, setUpdateInProgress] = useState(false); //This is the overarching state value that determines what elements are expose and what eleigible actions are
    const [updatedConfidenceLevel, setUpdatedConfidenceLevel] = useState(5);
    const [updatedThesis, setUpdatedThesis] = useState('');
    const [confidenceLevelSaved, setConfidenceLevelSaved] = useState(false);
    const [thesisSaved, setThesisSaved] = useState(false);

    const handleUpdateClick = (e) => {
        e.preventDefault();
        updateInProgress ? setUpdateInProgress(false) : setUpdateInProgress(true);
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
    }

    const dispatch = useDispatch();
    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        //alert(assetIDParam + updatedThesis + updatedConfidenceLevel);
        //some action creator that updates state with the new confidence level and thesis values
        dispatch(updateAsset({assetIDParam, updatedThesis, updatedConfidenceLevel}));
    }

    return (
        <div>
            <AssetCompanyHeader ticker={ticker} companyName={companyName} logo={logo}/>
            <div className={styles.performance}>
                <AssetTotalChange/>
                <AssetConfidenceLevel confidenceLevel={confidenceLevel} updateInProgress={updateInProgress} updatedConfidenceLevel={updatedConfidenceLevel} setUpdatedConfidenceLevel={setUpdatedConfidenceLevel} handleConfidenceLevelSave={handleConfidenceLevelSave} confidenceLevelSaved={confidenceLevelSaved} handleUpdateClick={handleUpdateClick}/>
                <AssetTodaysChange/>
                <AssetDollarValue/>
            </div>
            <div className={styles.descriptions}>
                <AssetThesis thesis={thesis} updateInProgress={updateInProgress} updatedThesis={updatedThesis} setUpdatedThesis={setUpdatedThesis} thesisSaved={thesisSaved} confidenceLevel={confidenceLevel} handleThesisSave={handleThesisSave} handleUpdateClick={handleUpdateClick}/>
                <AssetAIAnalysis/>
            </div>
            <div className={styles.actions}>
                <AssetUpdate handleUpdateClick={handleUpdateClick} handleSubmitUpdate={handleSubmitUpdate} thesisSaved={thesisSaved} confidenceLevelSaved={confidenceLevelSaved} updateInProgress={updateInProgress}/>
                <AssetSell/>
            </div>
        </div>
    )
}