import React, { useState } from 'react';
import styles from './Summary.module.css';

export const Summary = () => {

    const [buttonInnerHTML, setButtonInnerHTML] = useState('▲ Hide Summary ▲');
    const [display, setDisplay] = useState(true);

    const modifySummaryView = () => {
        display ? setDisplay(false) : setDisplay(true);
        buttonInnerHTML === '▲ Hide Summary ▲' ? setButtonInnerHTML('▼ Show Summary ▼') : setButtonInnerHTML('▲ Hide Summary ▲');
        
        //const summaryDetails = document.getElementById('summary-details');
        //const summaryButton = document.getElementById('summary-button');
        //summaryDetails.style.display = 'none';
        //summaryButton.innerHTML === 'Hide Summary' ? summaryButton.innerHTML = 'Show Summary' : summaryButton.innerHTML = 'Hide Summary';
        //summaryButton.innerHTML = 'test';
        //summaryDetails.style.display === 'block' ? summaryDetails.style.display = 'none' : summaryDetails.style.display = 'block';
    }

    return (
        <div className={styles.container}>
            <button className={styles.summaryButton} onClick={modifySummaryView}>{buttonInnerHTML}</button>
            <div className={display ? styles.buttonBorderHide : styles.buttonBorderShow}></div>
            <div className={display ? styles.subContainerShow : styles.subContainerHide}>
                <div className={styles.contentContainer}>
                    <div>This is SUMMARY info</div>
                    <div>More info</div>
                    <div>Even more info</div>
                </div>
            </div>
        </div>
    )
}