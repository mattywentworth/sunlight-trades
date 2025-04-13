import React from 'react';
import styles from './TableBought.module.css';
import { useSelector } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';
import { useNavigate, useParams } from 'react-router';

export const TableRow = ( { assetId, ticker, logo, stockOrOptions, costBasis, confidenceLevel, ownership, initialValue } ) => {

    const navigate = useNavigate();
    const params = useParams();
    //alert(params);

    const user = params.user;

    const navToAssetDetails = () => {
        navigate(`/account/${user}/${ownership}/${assetId}`)
    }

    const accountAssets = useSelector(selectAccountAssets);
    let tableRow;
    if (accountAssets) {
        //const assetInfo = {ticker, logo, stockOrOptions, confidenceLevel};
        /*const ticker = assetInfo.ticker;
        const logo = assetInfo.logo;
        const stockOrOptions = assetInfo.stockOrOptions;
        const confidenceLevel = assetInfo.confidenceLevel;*/
        tableRow =
        <>
            <td className={styles.companyInfo}>
                <img className={styles.logo} src={logo}></img>
                <div>{ticker}</div>
            </td>
            <td>{stockOrOptions}</td>
            <td>${initialValue}</td>
            <td>-15%</td>
            <td>$350</td>
            <td>-5%</td>
            <td>${costBasis}</td>
            <td>{confidenceLevel.level}/10</td>{/* Will I need to convert confidenceLevel from a string to a number first? */}
            <td>
                <button onClick={navToAssetDetails}>Details</button>{/* Figure out proper usage here - button or Link element? */}
            </td>
        </>
    }

    return (
        <tr className={styles.tableStructure}>
            {/*<td className={styles.companyInfo}>
                <img className={styles.logo} src={logo}></img>
                <div>{ticker}</div>
            </td>
            <td>{stockOrOptions}</td>
            <td>$2,000</td>
            <td>-15%</td>
            <td>$350</td>
            <td>-5%</td>
            <td>$400</td>
            <td>{confidenceLevel}/10</td>{/* Will I need to convert confidenceLevel from a string to a number first? */}
            {/*<td>
                <button>Details</button>
            </td>*/}
            {tableRow}
        </tr>
    )
}