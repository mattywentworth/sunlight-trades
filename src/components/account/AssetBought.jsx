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
import { useSelector } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';

export const AssetBought = () => {

    const params = useParams();
    const assetIDParam = parseInt(params.assetID);
    const accountAssets = useSelector(selectAccountAssets);
    const currentAsset = accountAssets.find(asset => asset.assetId === assetIDParam);
    const {ticker, companyName, confidenceLevel, thesis} = currentAsset;

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
        setConfidenceLevelSaved(true);
    }

    const handleSubmit = (e) => {}

    return (
        <div>
            <AssetCompanyHeader ticker={ticker} companyName={companyName}/>
            <div className={styles.performance}>
                <AssetTotalChange/>
                <AssetConfidenceLevel confidenceLevel={confidenceLevel} updateInProgress={updateInProgress} updatedConfidenceLevel={updatedConfidenceLevel} setUpdatedConfidenceLevel={setUpdatedConfidenceLevel} handleConfidenceLevelSave={handleConfidenceLevelSave} confidenceLevelSaved={confidenceLevelSaved} handleUpdateClick={handleUpdateClick}/>
                <AssetTodaysChange/>
                <AssetDollarValue/>
            </div>
            <div className={styles.descriptions}>
                <AssetThesis thesis={thesis} updateInProgress={updateInProgress} handleUpdateClick={handleUpdateClick}/>
                <AssetAIAnalysis/>
            </div>
            <div className={styles.actions}>
                <AssetUpdate handleUpdateClick={handleUpdateClick} updateInProgress={updateInProgress}/>
                <AssetSell/>
            </div>
        </div>
    )
}