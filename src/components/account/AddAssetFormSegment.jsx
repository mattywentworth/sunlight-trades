import React from 'react';
import { AddAssetInput } from './AddAssetInput';
import { AddAssetLabel } from './AddAssetLabel';

export const AddAssetFormSegment = ( { test } ) => {

    const testLabel = test[0];
    const testInput = test[1];

    return (
        <div>
            <AddAssetLabel testLabel={testLabel} />
            <AddAssetInput testInput={testInput} />
        </div>
    )
}