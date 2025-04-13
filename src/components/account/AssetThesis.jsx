import React from 'react';
import styles from './AssetThesis.module.css';
import { AssetThesisUpdateInput } from './AssetThesisUpdateInput';
import { AssetThesisCard } from './AssetThesisCard';
import { convertDateToText } from '../../utils/dates';

export const AssetThesis = ( { thesis, updateInProgress, sellInProgress, updatedThesis, setUpdatedThesis, thesisSaved, setThesisSaved, confidenceLevel, handleThesisSave, handleUpdateClick, action } ) => {

    const initialThesis = thesis[0].thesis;

    const readableDate = convertDateToText(thesis[0].dateAdded);
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerSides}></div>
                <h3>Thesis</h3>
                <div className={styles.headerSides}>
                    <button className={styles.update} onClick={handleUpdateClick}>Update</button>
                </div>
            </div>
            <AssetThesisUpdateInput updatedThesis={updatedThesis} setUpdatedThesis={setUpdatedThesis} updateInProgress={updateInProgress} sellInProgress={sellInProgress} handleThesisSave={handleThesisSave} thesisSaved={thesisSaved} handleUpdateClick={handleUpdateClick}/>
            {/* AssetThesisCard will get .map'd */}
            {thesis.map((thesisElement, index) => {
                //alert(index);
                return <AssetThesisCard thesisDate={thesisElement.dateAddedReadable} thesisText={thesisElement.thesis} confidence={confidenceLevel[index]}/> 
            })}
            {/*<AssetThesisCard thesisDate={thesis[0].dateAddedReadable} thesisText={thesis[0].thesis} />*/}
        </div>
    )
}