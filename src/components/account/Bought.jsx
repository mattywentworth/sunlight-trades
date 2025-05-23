import React, {useEffect} from 'react';
import styles from './Bought.module.css';
import { AccountHeader } from './AccountHeader';
import { TableBought } from '../account/TableBought';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';
import { Link, useParams } from 'react-router';

export const Bought = () => {

    //const element = testBoughtArray[0];
    //const testArray = ['card 1', 'card 2', 'card 3', 'card 4', 'card 5', 'card 6', 'card 7']
    const params = useParams();
    const user = params.user;

    const accountAssets = useSelector(selectAccountAssets);
    let tableContent;
    if (accountAssets.length > 0) {
        tableContent = <TableBought lastAction='Buy' ownership='bought'/>;
    } else {
        tableContent = (
            <>
                <h3><Link to={{pathname: `/account/${user}/overview/add-asset`}}>Add an asset</Link> you've bought in order to see it here.</h3>
            </>
        )
    }

    /*
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTickerPriceOnAssetTableLoad('AAPL'));
    }, [dispatch]);
    */

    return (
        <div>
            <AccountHeader/>
            <div className={styles.assetCardContainer}>
                {/*<TableBought/>*/}
                {tableContent}
                {/*<AssetCard img={element.img} companyName={element.companyName} ticker={element.ticker} totalGainLoss={element.totalGainLoss} todaysGainLoss={element.todaysGainLoss} currentPrice={element.currentPrice} purchasePrice={element.purchasePrice}/>*/}
                {/*{testBoughtArray.map(element => {
                    return <AssetCard img={element.img} companyName={element.companyName} ticker={element.ticker} totalGainLoss={element.totalGainLoss} todaysGainLoss={element.todaysGainLoss} currentPrice={element.currentPrice} purchasePrice={element.purchasePrice}/>
                })}*/}
            </div>
        </div>
    )
}

