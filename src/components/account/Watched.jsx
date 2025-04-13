import React from 'react';
import { AccountHeader } from './AccountHeader';
import styles from './Bought.module.css';
import { TableBought } from '../account/TableBought';
import { useSelector } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';
import { Link, useParams } from 'react-router';

export const Watched = () => {

    const params = useParams();
    const user = params.user;

    const accountAssets = useSelector(selectAccountAssets);
    let tableContent;
    if (accountAssets.length > 0) {
        tableContent = <TableBought lastAction='Watch' ownership='watched'/>;
    } else {
        tableContent = (
            <>
                <h3><Link to={{pathname: `/account/${user}/overview/add-asset`}}>Add an asset</Link> you've bought in order to see it here.</h3>
            </>
        )
    }

    return (
        <div>
            <AccountHeader/>
            <div className={styles.assetCardContainer}>
                {tableContent}
            </div>
        </div>
    )
}