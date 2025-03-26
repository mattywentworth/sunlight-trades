import React from 'react';
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


export const AddAssetForm = () => {


    //radio elements below aren't allowing changes. seems like i'm using the 'checked' attribute incorrectly
    return (
        <div className={styles.container}>
            
            <form className={styles.addForm}>
                <div className={styles.formColumn}>
                    <InputGroupWatchOrBuy/>
                    <InputGroupStockOrOptions/>
                    <InputGroupQty/>
                </div>
                <div className={styles.formColumn}>
                    <InputGroupStopLoss/>
                    <InputGroupTakeProfit/>
                    <InputGroupTimeHorizon/>
                </div>
                <div className={styles.formColumn}>
                    <InputGroupConfidence/>
                    <InputGroupThesis/>
                </div>
            </form> {/* Form needs a submit button - style this so that it is showing at the bottom of the screen at all times or changes display based on where user has scrolled? Have it stuck to bottom of screen AND above footer? */}
        </div>
    )
}