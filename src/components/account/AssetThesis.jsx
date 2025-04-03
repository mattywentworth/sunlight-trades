import React from 'react';
import styles from './AssetThesis.module.css';
import { AssetThesisUpdateInput } from './AssetThesisUpdateInput';

export const AssetThesis = ( { thesis, updateInProgress, handleUpdateClick } ) => {

    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerSides}></div>
                <h3>Thesis</h3>
                <div className={styles.headerSides}>
                    <button className={styles.update} onClick={handleUpdateClick}>Update</button>
                </div>
            </div>
            <AssetThesisUpdateInput updateInProgress={updateInProgress} handleUpdateClick={handleUpdateClick}/>
            <div>{thesis[1]}</div>
            {/* Past theses should appear here */}
        </div>
    )
}