import React from 'react';
import styles from './AddAsset.module.css';
import { AccountHeader } from './AccountHeader';
import { AddAssetForm } from './AddAssetForm';
import { AddAssetSearch } from './AddAssetSearch';
import { AddAssetSearchResults } from './AddAssetSearchResults';

export const AddAsset = () => {

    return (
        <div>
            <AccountHeader/>
            <AddAssetSearch/>
            <AddAssetSearchResults/>
            <AddAssetForm />
        </div>
    )
}