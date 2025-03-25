import React from 'react';
import styles from './AddAssetForm.module.css';
import { AddAssetFormSegment } from './AddAssetFormSegment';


export const AddAssetForm = () => {

    const testArray = [
        [
            {
                label: 'Ticker/Company Search',
                htmlFor: 'addAssetSearch',
            },
            {
                inputType: 'search',
                id: 'addAssetSearch',//This is a search, so it needs a corresponding button. Will need to create different form segments for each input type??
                name: 'addAssetSearch',
                placeholder: 'Search for a Company',
                minlength: 1,
            }
        ],
        [
            {
                label: 'Action',
                htmlFor: 'addAssetAction'
            },
            {
                inputType: 'button',
                id: 'addAssetAction',
                name: 'addAssetAction',
                innerHTML: 'Buy or Watch'//Fix the logic here so it programmatically loops through multiple inputs for a single label
            }
        ],
        [
            {
                label: 'Number of Shares',//Fix the logic so it programmatically changes to say 'Contracts' if user selects 'Options' - BUT this will be more complicated given options chains, so leave this for now
                htmlFor: 'addAssetNumShares'
            },
            {
                inputType: 'number',
                id: 'addAssetNumShares',
                name: 'addAssetNumShares',
                min: 1,
                step: 1
            }
        ]
    ]
    //radio elements below aren't allowing changes. seems like i'm using the 'checked' attribute incorrectly
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.inputSection}>
                    <label htmlFor='addAssetSearch'>Search for a Company or Ticker</label>
                    <input id='addAssetSearch' name='search' type='search' placeholder='eg. Google'></input>
                </div>
                <div className={styles.inputSection}>
                    <legend >Are you watching or buying?</legend>
                    <div className={styles.radioDuo}>
                        <input id='addAssetBuying' name='buyOrWatch' type='radio' value='buying' defaultChecked></input>
                        <label htmlFor='addAssetBuying'>Buying</label>
                    </div>
                    <div className={styles.radioDuo}>
                        <input id='addAssetWatching' name='buyOrWatch' type='radio' value='watching'></input>
                        <label htmlFor='addAssetWatching'>Watching</label>
                    </div>
                </div>
                <div className={styles.inputSection}>
                    <legend >Are you watching or buying stock or options?</legend>{/* have the value oof stock or options change based on what user selected */}
                    <div className={styles.radioDuo}>
                        <input id='addAssetStock' name='stockOrOptions' type='radio' value='Stock' defaultChecked></input>
                        <label htmlFor='addAssetStock'>Stock</label>
                    </div>
                    <div className={styles.radioDuo}>
                        <input id='addAssetOptions' name='stockOrOptions' type='radio' value='Options'></input>
                        <label htmlFor='addAssetOptions'>Options</label>
                    </div>
                </div>
                <div className={styles.inputSection}>
                    <label htmlFor='addAssetQuantity'>How many shares or contracts?</label> {/* have this auto change based oon whether stock or options was selected */}
                    <input id='addAssetQuantity' name='numShares' type='number' min='1' step='1'></input>
                </div>

            </div>
            <div>
                <div className={styles.inputSection}>
                    <legend >Do you have a stop loss order?</legend>
                    <div className={styles.radioDuo}>
                        <input id='addAssetStopLossNo' name='stopLoss' type='radio' value='No' defaultChecked></input>
                        <label htmlFor='addAssetStopLossNo'>No</label>
                    </div>
                    <div className={styles.radioDuo}>
                        <input id='addAssetStopLossYes' name='stopLoss' type='radio' value='Yes'></input>
                        <label htmlFor='addAssetStopLossYes'>Yes</label>
                    </div>
                    
                    <div> {/* if use selects yes to stop loss, show a section to enter the stop loss value */}
                        <label htmlFor='addAssetStopLossPercentage'>Stop Loss Percentage</label>
                        <input id='addAssetStopLossPercentage' name='stopLossPercentage' type='number' min='1' max='99'></input>{/* As this value changes, show a corresponding dollar value next to the input field */}
                    </div>
                </div>
                <div className={styles.inputSection}>
                    <legend >Do you have a take profit order?</legend>
                    <div className={styles.radioDuo}>
                        <input id='addAssetTakeProfitNo' name='takeProfit' type='radio' value='No' defaultChecked></input>
                        <label htmlFor='addAssetTakeProfitNo'>No</label>
                    </div>
                    <div className={styles.radioDuo}>
                        <input id='addAssetTakeProfitYes' name='takeProfit' type='radio' value='Yes'></input>
                        <label htmlFor='addAssetTakeProfitYes'>Yes</label>
                    </div>
                    
                    <div> {/* if use selects yes to take profit, show a section to enter the stop loss value */}
                        <label htmlFor='addAssetTakeProfitPercentage'>Take Profit Percentage</label>
                        <input id='addAssetTakeProfitPercentage' name='takeProfitPercentage' type='number' min='1'></input>{/* As this value changes, show a corresponding dollar value next to the input field */}
                    </div>
                </div>
                
    
                <legend>What is your time horizon for this investment?</legend>{/* Need to change this to a simpler input field and simpler way to programmatically handle the input */}
                <label htmlFor='addAssetHorizonNo'>No</label>
                <input id='addAssetHorizonNo' name='timeHorizon' type='radio' value='No' defaultChecked></input>
                <label htmlFor='addAssetHorizonOneDay'>1 Day</label>
                <input id='addAssetHorizonOneDay' name='timeHorizon' type='radio' value='1'></input>
                <label htmlFor='addAssetHorizonOneWeek'>1 Week</label>
                <input id='addAssetHorizonOneWeek' name='timeHorizon' type='radio' value='7'></input>
                <label htmlFor='addAssetHorizonOneMonth'>1 Month</label>
                <input id='addAssetHorizonOneMonth' name='timeHorizon' type='radio' value='30'></input>
            </div>
            <div>
                <div className={styles.inputSection}>
                    <label>On a scale from 1 to 10, how confident are you that this is a good investment? 1 is least confident, 10 is most confident.</label>
                    <input type='number'></input>
                </div>{/* Change this to radio buttons */}

                <div className={styles.inputSection}>
                    <label htmlFor='addAssetThesis'>What is your investment thesis?</label>
                    <textarea id='addAssetThesis' name='thesis' placeholder='Be honest and descriptive. ' minlength='10' maxlength='5000' cols={30} rows={15} wrap='hard' className={styles.thesisTextArea}></textarea>
                </div>{/* Style the page so the investment thesis consumes a bunch of space in a right column, and all other fields consume space on a left column? */}
                
            </div>
        </div>
    )
}