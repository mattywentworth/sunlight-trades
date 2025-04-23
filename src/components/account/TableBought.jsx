import React from 'react';
import styles from './TableBought.module.css';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import { useSelector } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';

//Follow table element accessibility guidelines - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table or https://usability.yale.edu/web-accessibility/articles/tables#:~:text=HTML%20tables%20are%20appropriate%20for,%2C%20column%20headers%2C%20or%20both.

export const TableBought = ( { lastAction, ownership } ) => {

    const accountAssets = useSelector(selectAccountAssets);

    return (
        
            <table className={styles.table} id='xyz'> 
                <thead className={styles.tableHead} id='table-head'>
                    <tr className={styles.headerContainer}>
                        <th className={styles.companyInfo}>Company</th>
                        <th className={styles.assetType}>Type</th>
                        <th className={styles.totalValue}>Total Value</th>
                        <th className={styles.totalGainLoss}>Total Gain/Loss</th>
                        <th className={styles.companyHeader}>Price</th>
                        <th className={styles.companyHeader}>Today's Gain/Loss</th>
                        <th className={styles.companyHeader}>Cost Basis</th>
                        <th className={styles.companyHeader}>Initial Confidence</th>
                        <th className={styles.companyHeader}>Full Details</th>
                    </tr>
                </thead>
                <TableBody lastAction={lastAction} ownership={ownership} />
            </table>
    )
}