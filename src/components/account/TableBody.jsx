import React from 'react';
import { TableRow } from './TableRow';
import { useSelector } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';

export const TableBody = ( { lastAction, ownership } ) => {

    const accountAssets = useSelector(selectAccountAssets);
    const boughtAssets = accountAssets.filter(asset => {
        const actions = asset.watchBuySell;
        const actionsLength = asset.watchBuySell.length;
        const mostRecentAction = actions[actionsLength - 1];
        return mostRecentAction.action === lastAction;
    });

    let tableContent;
    if (boughtAssets) {
        tableContent = boughtAssets.map(asset => {
            const numConfidenceLevels = asset.confidenceLevel.length;
            const mostRecentConfidenceLevel = asset.confidenceLevel[numConfidenceLevels - 1];
            return <TableRow key={asset.assetId} assetId={asset.assetId} ticker={asset.ticker} logo={asset.logo} stockOrOptions={asset.stockOrOptions} costBasis={asset.costBasis} price={asset.todaysValues.current} currentValue={asset.currentValue} totalGainLoss={asset.totalGainLoss} currentValue={asset.currentValue} confidenceLevel={mostRecentConfidenceLevel} ownership={ownership} initialValue={asset.initialValue}/>;
        })
    } else {
        <td>Add an asset in your account in order to display them here.</td>
    }

    return (
        <tbody>
            {tableContent}
        </tbody>
    )
}