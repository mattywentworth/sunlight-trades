import React from 'react';
import { AssetCard } from './AssetCard';
import { AccountHeader } from './AccountHeader';

export const Bought = () => {

    const testArray = ['card 1', 'card 2', 'card 3', 'card 4', 'card 5', 'card 6', 'card 7'];

    return (
        <div>
            <AccountHeader/>
            <div>This is BOUGHT info</div>
            <div>More info</div>
            <div>Even more info</div>
            {testArray.map(element => {
                return <AssetCard text={element} />
            })}
        </div>
    )
}