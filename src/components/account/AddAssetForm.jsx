import React, { useState } from 'react';
import styles from './AddAssetForm.module.css';
import { AddAssetFormSegment } from './AddAssetFormSegment';
import { InputGroupWatchOrBuy } from './InputGroupWatchOrBuy';
import { InputGroupStockOrOptions } from './InputGroupStockorOptions';
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


export const AddAssetForm = () => {

    const [watchOrBuy, setWatchOrBuy] = useState('buy');
    const [stockOrOptions, setStockOrOptions] = useState('stock');
    const [assetQty, setAssetQty] = useState(null);
    const [stopLossYesNo, setStopLossYesNo] = useState('no');
    const [stopLossPercentage, setStopLossPercentage] = useState(null);
    const [takeProfitYesNo, setTakeProfitYesNo] = useState(null);
    const [takeProfitPercentage, setTakeProfitPercentage] = useState(null);
    const [confidenceLevel, setConfidenceLevel] = useState(5);
    const [thesis, setThesis] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const selectedSearchResult = useSelector(selectSelectedSearchResult);
    const accountAssets = useSelector(selectAccountAssets);

    const handleSubmit = (e) => {
        e.preventDefault();
        const numAssets = accountAssets.length;
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
            thesis: {
                '1': thesis
            },
            percentageOfPortfolio: null
            //aiThesisReview: 'someFutureFeature'
        }));
        const user = params.user;
        if (watchOrBuy === 'buy') {
            navigate(`/account/${user}/overview/bought`);
        } else if (watchOrBuy === 'watch') {
            navigate(`/account/${user}/overview/watched`);
        } else {
            alert('Unrecognized Request');
        }
    }

    //radio elements below aren't allowing changes. seems like i'm using the 'checked' attribute incorrectly
    return (
        <div className={selectedSearchResult ? styles.containerShow : styles.containerHide}>
            
            <form className={styles.addForm} onSubmit={handleSubmit}>
                <div className={styles.primaryFormInputs}>
                    <div className={styles.formColumn}>
                        <InputGroupWatchOrBuy watchOrBuy={watchOrBuy} setWatchOrBuy={setWatchOrBuy}/>
                        <InputGroupStockOrOptions watchOrBuy={watchOrBuy} stockOrOptions={stockOrOptions} setStockOrOptions={setStockOrOptions}/>
                        <InputGroupQty stockOrOptions={stockOrOptions} assetQty={assetQty} setAssetQty={setAssetQty}/>
                    </div>
                    <div className={styles.formColumn}>
                        <InputGroupStopLoss stopLossYesNo={stopLossYesNo} setStopLossYesNo={setStopLossYesNo}/>
                        <InputGroupTakeProfit takeProfitYesNo={takeProfitYesNo} setTakeProfitYesNo={setTakeProfitYesNo}/>
                        <InputGroupTimeHorizon/>
                    </div>
                    <div className={styles.formColumn}>
                        <InputGroupConfidence confidenceLevel={confidenceLevel} setConfidenceLevel={setConfidenceLevel}/>
                        <InputGroupThesis thesis={thesis} setThesis={setThesis}/>
                    </div>
                </div>
                <div className={styles.submitContainer}>
                    <input className={styles.submitButton} type='submit' value='Add to My Portfolio'></input>
                </div>
            </form> {/* Form needs a submit button - style this so that it is showing at the bottom of the screen at all times or changes display based on where user has scrolled? Have it stuck to bottom of screen AND above footer? */}
        </div>
    )
}