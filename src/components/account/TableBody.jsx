import React from 'react';
import { TableRow } from './TableRow';
import { useSelector } from 'react-redux';
import { selectAccountAssets } from '../../features/assets/accountAssetsSlice';

export const TableBody = () => {

    const accountAssets = useSelector(selectAccountAssets);

    let tableContent;
    if (accountAssets) {
        tableContent = accountAssets.map(asset => {
            return <TableRow ticker={asset.ticker} logo={asset.logo} stockOrOptions={asset.stockOrOptions} confidenceLevel={asset.confidenceLevel[1]}/>;
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