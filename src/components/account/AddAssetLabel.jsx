import React from 'react';

export const AddAssetLabel = ( { testLabel } ) => {

    return (
        <>
            <label htmlFor={testLabel.htmlFor}>{testLabel.label}</label>
        </>
    )
}