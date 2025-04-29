import React, { useState } from 'react';
import styles from './AddAssetForm.module.css';
import { AddAssetFormSegment } from './AddAssetFormSegment';
import { InputGroupWatchOrBuy } from './InputGroupWatchOrBuy';
import { InputGroupStockOrOptions } from './InputGroupStockOrOptions';
import { InputGroupQty } from './InputGroupQty';
import { InputGroupStopLoss } from './InputGroupStopLoss';
import { InputGroupTakeProfit} from './InputGroupTakeProfit';
import { InputGroupTimeHorizon } from './InputGroupTimeHorizon';
import { InputGroupConfidence } from './InputGroupConfidence';
import { InputGroupThesis } from './InputGroupThesis';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedSearchResult } from '../../features/add-asset/searchResultsSlice';
import { addAssetToAccount, selectAccountAssets } from '../../features/assets/accountAssetsSlice';
import { useParams, useNavigate } from 'react-router';
import { callChatGPTForBuyPrompt } from '../../utils/aiAnalysisAPICall';
import { convertDateToText } from '../../utils/dates';

export const AddAssetForm = () => {

    const [watchOrBuy, setWatchOrBuy] = useState('Buy');
    const [stockOrOptions, setStockOrOptions] = useState('stock');
    const [assetQty, setAssetQty] = useState(null);
    const [stopLossYesNo, setStopLossYesNo] = useState('No');
    const [stopLossPercentage, setStopLossPercentage] = useState(0);
    const [takeProfitYesNo, setTakeProfitYesNo] = useState('No');
    const [takeProfitPercentage, setTakeProfitPercentage] = useState(0);
    const [confidenceLevel, setConfidenceLevel] = useState(5);
    const [thesis, setThesis] = useState('');
    const [thesisLength, setThesisLength] = useState(0);

    const todaysDateReadable = convertDateToText();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const selectedSearchResult = useSelector(selectSelectedSearchResult);
    const accountAssets = useSelector(selectAccountAssets);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const ticker = selectedSearchResult.ticker;
        const companyName = selectedSearchResult.companyName;
        const logo = selectedSearchResult.icon;
        const costBasis = selectedSearchResult.costBasis;
        const aiAnalysis = await callChatGPTForBuyPrompt(ticker, confidenceLevel, thesis, todaysDateReadable)
        //alert(costBasis);
        dispatch(addAssetToAccount({ticker, companyName, logo, watchOrBuy, stockOrOptions, assetQty, costBasis, stopLossYesNo, stopLossPercentage, takeProfitYesNo, takeProfitPercentage, confidenceLevel, thesis, aiAnalysis}))
        /*const numAssets = accountAssets.length;
        const nextID = numAssets + 1;
        dispatch(addAssetToAccount({
            assetId: nextID,
            dateAdded: Date(),
            ticker: selectedSearchResult.ticker,
            companyName: selectedSearchResult.companyName,
            logo: selectedSearchResult.icon,
            watchOrBuy: watchOrBuy,
            stockOrOptions: stockOrOptions,
            //watchOrBuyDate: someDateFunc,
            quantity: assetQty,
            stopLossYesNo: stopLossYesNo,
            stopLossPercentage: stopLossPercentage,
            takeProfitYesNo: takeProfitYesNo,
            takeProfitPercentage: takeProfitPercentage,
            confidenceLevel: [
                {
                    dateAdded: Date(),
                    level: confidenceLevel
                }
            ],
            thesis: [
                {
                    dateAdded: Date(),
                    thesis: thesis
                }
            ]
        }));*/
        const user = params.user;
        if (watchOrBuy === 'Buy') {
            navigate(`/account/${user}/overview/bought`);
        } else if (watchOrBuy === 'Watch') {
            navigate(`/account/${user}/overview/watched`);
        } else {
            alert('Unrecognized Request');
        }
    }

    const paramsTest = {
        symbol: 'AAPL',
        interval: '1day'
        }
    
    //dispatch(fetchTickerPriceOnAssetTableLoad(paramsTest));
    

    //radio elements below aren't allowing changes. seems like i'm using the 'checked' attribute incorrectly
    return (
        <div className={selectedSearchResult ? styles.containerShow : styles.containerHide}>
            
            <form className={styles.addForm} onSubmit={handleSubmit}>
                <div className={styles.primaryFormInputs}>
                    <div className={styles.formColumn}>
                        <InputGroupWatchOrBuy watchOrBuy={watchOrBuy} setWatchOrBuy={setWatchOrBuy}/>
                        <InputGroupStockOrOptions watchOrBuy={watchOrBuy} stockOrOptions={stockOrOptions} setStockOrOptions={setStockOrOptions}/>
                        <InputGroupQty stockOrOptions={stockOrOptions} assetQty={assetQty} setAssetQty={setAssetQty}/>
                        <InputGroupStopLoss stopLossYesNo={stopLossYesNo} setStopLossYesNo={setStopLossYesNo}/>
                        <InputGroupTakeProfit takeProfitYesNo={takeProfitYesNo} setTakeProfitYesNo={setTakeProfitYesNo}/>
                    </div>
                    {/*<div className={styles.formColumn}>
                        <InputGroupStopLoss stopLossYesNo={stopLossYesNo} setStopLossYesNo={setStopLossYesNo}/>
                        <InputGroupTakeProfit takeProfitYesNo={takeProfitYesNo} setTakeProfitYesNo={setTakeProfitYesNo}/>
                        <InputGroupTimeHorizon/>
                    </div>*/}
                    <div className={styles.formColumn}>
                        <InputGroupConfidence confidenceLevel={confidenceLevel} setConfidenceLevel={setConfidenceLevel}/>
                        <InputGroupThesis thesis={thesis} setThesis={setThesis} thesisLength={thesisLength} setThesisLength={setThesisLength}/>
                    </div>
                </div>
                <div className={styles.submitContainer}>
                    <input className={styles.submitButton} type='submit' value='Add to My Portfolio'></input>
                </div>
            </form> {/* Form needs a submit button - style this so that it is showing at the bottom of the screen at all times or changes display based on where user has scrolled? Have it stuck to bottom of screen AND above footer? */}
        </div>
    )
}