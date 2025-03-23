import React from 'react';
import { AccountHeader } from './AccountHeader';
import { AssetCard } from './AssetCard';
import { testSimpList } from '../../utils/testBoughtList';

export const Sold = () => {
    //const array = testSimpList;

    return (
        <div>
            <AccountHeader/>
            <div>This is SOLD info</div>
            <div>More info</div>
            <div>Even more info</div>
            {testSimpList.map(element => {
                return <AssetCard text={element} />
            })}
        </div>
    )
}