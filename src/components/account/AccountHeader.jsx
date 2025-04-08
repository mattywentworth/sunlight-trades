import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router';
import styles from './AccountHeader.module.css';
import { useSelector } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';

export const AccountHeader = () => {

    /*
    if i use the route param :accountTab and do param.accountTab on each 
    */

    const [clickedId, setClickedId] = useState('test1');

    const params = useParams();

    const accountAssets = useSelector(selectAccountAssets);



    //Probably a more efficient way to write this in the event that I want to make changes. Possible to do this with className and values in css module??
    const handleTabClick = ({ isActive, isPending }) => ({
        backgroundColor: isActive ? "white" : isPending ? "white" : "black",
        color: isActive ? "black" : isPending ? "black" : "white"
    })

    let ticker;
    let assetHeader;
    const ownership = 'bought' || 'sold';
    if (params.assetID) {
        //alert(accountAssets[0].assetId);
        const numdAssetId = Number(params.assetID);
        const currentAsset = accountAssets.find(asset => asset.assetId === numdAssetId);
        //alert(currentAsset);
        ticker = currentAsset.ticker;
        assetHeader = <NavLink to={`/account/${params.user}/${params.ownership}/${params.assetID}`} id='test7' style={handleTabClick} className={styles.test}>{ticker}</NavLink>;
    }

    return (
        <div className={styles.container}>
            <ul id='account-tabs'>
                {/*<NavLink to='/account/:user/summary' id='test1' style={handleTabClick}>Summary</NavLink>*/}
                <NavLink to={`/account/${params.user}/overview/summary`} id='test1' style={handleTabClick}>Summary</NavLink>
                <NavLink to={`/account/${params.user}/overview/bought`} id='test2' style={handleTabClick}>Bought</NavLink>
                <NavLink to={`/account/${params.user}/overview/sold`} id='test3' style={handleTabClick}>Sold</NavLink>
                <NavLink to={`/account/${params.user}/overview/watched`} id='test4' style={handleTabClick} className={styles.test}>Watched</NavLink>
                <NavLink to={`/account/${params.user}/overview/add-asset`} id='test5' style={handleTabClick} className={styles.test}>Add to a List</NavLink>
                <NavLink to={`/account/${params.user}/overview/principles`} id='test6' style={handleTabClick} className={styles.test}>My Principles</NavLink>
                {assetHeader}
            </ul>
        </div>
    )
}